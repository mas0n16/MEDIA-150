/* ============================================
   MEDP 150 — Quiz Engine
   ============================================ */

(function() {
  'use strict';

  const topic = document.body.dataset.quizTopic;
  if (!topic || !QUIZ_DATA[topic]) return;

  const data = QUIZ_DATA[topic];

  let state = {
    started: false,
    currentIdx: 0,
    answers: [],
    questions: []
  };

  const overlay = document.getElementById('quiz-overlay');
  const launchBtn = document.getElementById('quiz-launch');

  if (!overlay || !launchBtn) return;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function renderIntro() {
    overlay.innerHTML = `
      <div class="quiz-modal">
        <button class="quiz-close" aria-label="Close quiz">×</button>
        <div class="quiz-intro">
          <div class="quiz-eyebrow">Practice Test</div>
          <h2>${escapeHTML(data.title)}</h2>
          <p class="quiz-lead">${data.questions.length} questions · mix of multiple choice and true/false · instant feedback after each answer.</p>
          <div class="quiz-intro-meta">
            <div><strong>${data.questions.length}</strong><span>Questions</span></div>
            <div><strong>${data.questions.filter(q => q.type === 'mc').length}</strong><span>Multiple choice</span></div>
            <div><strong>${data.questions.filter(q => q.type === 'tf').length}</strong><span>True / False</span></div>
          </div>
          <button class="quiz-btn quiz-btn-primary" id="quiz-start">Begin Practice Test →</button>
          <p class="quiz-note">Questions appear in random order. No grades, no time limit.</p>
        </div>
      </div>
    `;
    document.getElementById('quiz-start').onclick = startQuiz;
    overlay.querySelector('.quiz-close').onclick = closeQuiz;
  }

  function startQuiz() {
    state.started = true;
    state.currentIdx = 0;
    state.answers = [];
    state.questions = shuffle(data.questions);
    renderQuestion();
  }

  function renderQuestion() {
    const q = state.questions[state.currentIdx];
    const progress = ((state.currentIdx) / state.questions.length) * 100;

    let choicesHTML = '';
    if (q.type === 'mc') {
      choicesHTML = q.choices.map((c, i) => `
        <button class="quiz-choice" data-idx="${i}">
          <span class="quiz-choice-letter">${String.fromCharCode(65 + i)}</span>
          <span class="quiz-choice-text">${escapeHTML(c)}</span>
        </button>
      `).join('');
    } else if (q.type === 'tf') {
      choicesHTML = `
        <button class="quiz-choice quiz-tf" data-idx="true">
          <span class="quiz-choice-letter">T</span>
          <span class="quiz-choice-text">True</span>
        </button>
        <button class="quiz-choice quiz-tf" data-idx="false">
          <span class="quiz-choice-letter">F</span>
          <span class="quiz-choice-text">False</span>
        </button>
      `;
    }

    overlay.innerHTML = `
      <div class="quiz-modal">
        <button class="quiz-close" aria-label="Close quiz">×</button>
        <div class="quiz-progress-wrap">
          <div class="quiz-progress-bar" style="width: ${progress}%"></div>
        </div>
        <div class="quiz-question">
          <div class="quiz-meta">
            <span class="quiz-count">Question ${state.currentIdx + 1} of ${state.questions.length}</span>
            <span class="quiz-type">${q.type === 'mc' ? 'Multiple Choice' : 'True / False'}</span>
          </div>
          <h3 class="quiz-q-text">${escapeHTML(q.q)}</h3>
          <div class="quiz-choices">
            ${choicesHTML}
          </div>
          <div class="quiz-feedback" id="quiz-feedback"></div>
          <div class="quiz-actions" id="quiz-actions"></div>
        </div>
      </div>
    `;

    overlay.querySelectorAll('.quiz-choice').forEach(btn => {
      btn.onclick = () => handleAnswer(btn);
    });
    overlay.querySelector('.quiz-close').onclick = closeQuiz;
  }

  function handleAnswer(btn) {
    const q = state.questions[state.currentIdx];
    const choices = overlay.querySelectorAll('.quiz-choice');

    choices.forEach(c => c.disabled = true);

    let userAnswer, isCorrect;
    if (q.type === 'mc') {
      userAnswer = parseInt(btn.dataset.idx);
      isCorrect = userAnswer === q.answer;
      choices.forEach(c => {
        const idx = parseInt(c.dataset.idx);
        if (idx === q.answer) c.classList.add('quiz-correct');
        if (c === btn && !isCorrect) c.classList.add('quiz-incorrect');
      });
    } else {
      userAnswer = btn.dataset.idx === 'true';
      isCorrect = userAnswer === q.answer;
      choices.forEach(c => {
        const val = c.dataset.idx === 'true';
        if (val === q.answer) c.classList.add('quiz-correct');
        if (c === btn && !isCorrect) c.classList.add('quiz-incorrect');
      });
    }

    state.answers.push({
      question: q,
      userAnswer: userAnswer,
      isCorrect: isCorrect
    });

    const feedback = document.getElementById('quiz-feedback');
    feedback.innerHTML = `
      <div class="quiz-feedback-inner ${isCorrect ? 'is-correct' : 'is-incorrect'}">
        <div class="quiz-feedback-label">${isCorrect ? '✓ Correct' : '✗ Incorrect'}</div>
        <p>${escapeHTML(q.explain)}</p>
      </div>
    `;

    const actions = document.getElementById('quiz-actions');
    const isLast = state.currentIdx === state.questions.length - 1;
    actions.innerHTML = `
      <button class="quiz-btn quiz-btn-primary" id="quiz-next">
        ${isLast ? 'See Results →' : 'Next Question →'}
      </button>
    `;
    document.getElementById('quiz-next').onclick = () => {
      if (isLast) {
        renderResults();
      } else {
        state.currentIdx++;
        renderQuestion();
      }
    };

    setTimeout(() => {
      feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }

  function renderResults() {
    const correct = state.answers.filter(a => a.isCorrect).length;
    const total = state.answers.length;
    const pct = Math.round((correct / total) * 100);

    let grade, gradeMsg;
    if (pct >= 90) { grade = 'A'; gradeMsg = 'Excellent — exam ready.'; }
    else if (pct >= 80) { grade = 'B'; gradeMsg = 'Strong — review the misses and you\'re set.'; }
    else if (pct >= 70) { grade = 'C'; gradeMsg = 'Solid foundation — go deeper on what you missed.'; }
    else if (pct >= 60) { grade = 'D'; gradeMsg = 'Worth reviewing the chapter again before the exam.'; }
    else { grade = 'F'; gradeMsg = 'Go back to the notes — this topic needs another pass.'; }

    const missedHTML = state.answers
      .filter(a => !a.isCorrect)
      .map(a => `
        <div class="quiz-review-item">
          <div class="quiz-review-q">${escapeHTML(a.question.q)}</div>
          <div class="quiz-review-explain">${escapeHTML(a.question.explain)}</div>
        </div>
      `).join('');

    overlay.innerHTML = `
      <div class="quiz-modal">
        <button class="quiz-close" aria-label="Close quiz">×</button>
        <div class="quiz-results">
          <div class="quiz-eyebrow">Results</div>
          <div class="quiz-score-display">
            <div class="quiz-grade">${grade}</div>
            <div class="quiz-score-num">${correct} <span>/ ${total}</span></div>
            <div class="quiz-score-pct">${pct}%</div>
          </div>
          <p class="quiz-grade-msg">${gradeMsg}</p>

          ${missedHTML ? `
            <div class="quiz-review">
              <h4>Review what you missed</h4>
              ${missedHTML}
            </div>
          ` : `
            <div class="quiz-perfect">
              <p>You got everything right. Confident move.</p>
            </div>
          `}

          <div class="quiz-results-actions">
            <button class="quiz-btn quiz-btn-secondary" id="quiz-retry">Retake Test</button>
            <button class="quiz-btn quiz-btn-primary" id="quiz-finish">Done</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('quiz-retry').onclick = startQuiz;
    document.getElementById('quiz-finish').onclick = closeQuiz;
    overlay.querySelector('.quiz-close').onclick = closeQuiz;
  }

  function openQuiz() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    renderIntro();
  }

  function closeQuiz() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  launchBtn.onclick = openQuiz;

  overlay.onclick = (e) => {
    if (e.target === overlay) closeQuiz();
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeQuiz();
    }
  });

})();
