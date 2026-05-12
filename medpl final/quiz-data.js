/* ============================================
   MEDP 150 — Practice Test Question Banks
   ============================================ */

const QUIZ_DATA = {

  gaming: {
    title: "Gaming",
    color: "#c1432f",
    questions: [
      {
        type: "mc",
        q: "Who coined the term 'gamification' in 2002?",
        choices: ["Jesse Schell", "Nick Pelling", "Jesper Juul", "Eric Zimmerman"],
        answer: 1,
        explain: "Nick Pelling coined the term in 2002. It refers to applying game elements to non-game contexts, typically as an online marketing technique."
      },
      {
        type: "tf",
        q: "Gamification is generally defined as a marketing technique to encourage engagement with a product or service.",
        answer: true,
        explain: "Correct. Per the lecture, gamification is 'typically an online marketing technique to encourage engagement with a product or service.'"
      },
      {
        type: "mc",
        q: "Which theorist critiques gamification for 'strip-mining the superficial aspects of games' and leaving the 'soul of play' behind?",
        choices: ["Janet Murray", "Johan Huizinga", "Eric Zimmerman", "Jesse Schell"],
        answer: 2,
        explain: "Eric Zimmerman in The Rules We Break. He argues gamification abandons the most valuable parts of games — transgressive creativity and critical thinking."
      },
      {
        type: "mc",
        q: "Which book by Johan Huizinga (1938) is the source of the term 'ludic'?",
        choices: ["Hamlet on the Holodeck", "Homo Ludens", "The Art of Game Design", "Half-Real"],
        answer: 1,
        explain: "Homo Ludens (1938). Huizinga argued play is at the center of what makes us human — play is primary to and a necessary condition for culture."
      },
      {
        type: "mc",
        q: "Which approach uses methods from literature and film to analyze video games?",
        choices: ["Ludology", "Narratology", "Emergence theory", "Procedural rhetoric"],
        answer: 1,
        explain: "Narratology borrows analytical tools from literature and film. Janet Murray's Hamlet on the Holodeck (1997) is a key text."
      },
      {
        type: "tf",
        q: "Ludology and narratology are now considered completely incompatible approaches to game studies.",
        answer: false,
        explain: "False. The split was sharper when video games first emerged as a field of study. Today theorists look for bridges — cutscenes and quests are examples that bridge the two."
      },
      {
        type: "mc",
        q: "Games of emergence are characterized by:",
        choices: [
          "Strong designer control over the sequence of events",
          "A small number of rules that yield a large game tree",
          "Linear, cinematic storytelling",
          "Step-by-step walkthroughs as game guides"
        ],
        answer: 1,
        explain: "Games of emergence: a small number of rules combine to yield a large game tree. Players design strategies. Almost all multiplayer games are emergence games."
      },
      {
        type: "mc",
        q: "If a game's guide is a step-by-step walkthrough rather than a strategy guide, the game is likely:",
        choices: ["A game of emergence", "A game of progression", "A multiplayer game", "An indie game"],
        answer: 1,
        explain: "Games of progression have strong designer control over event sequence. A walkthrough fits because the path is mostly fixed."
      },
      {
        type: "tf",
        q: "Pong is a classic example of a game of progression.",
        answer: false,
        explain: "False. Pong is the canonical example of a game of emergence — few rules, large possibility space, players develop strategies."
      },
      {
        type: "mc",
        q: "Which of these is NOT one of Jesse Schell's four basic elements of a game?",
        choices: ["Mechanics", "Story", "Marketing", "Aesthetics"],
        answer: 2,
        explain: "Schell's four elements are Mechanics, Story, Technology, and Aesthetics."
      },
      {
        type: "mc",
        q: "According to Schell, which element is the crucial difference between games and other (linear) art forms like books and movies?",
        choices: ["Story", "Aesthetics", "Mechanics", "Technology"],
        answer: 2,
        explain: "Mechanics. Books and movies have story, aesthetics, and technology — but only games have mechanics (rules and procedures players interact with)."
      },
      {
        type: "mc",
        q: "Which of Schell's elements has the most direct connection to the player's experience?",
        choices: ["Mechanics", "Story", "Technology", "Aesthetics"],
        answer: 3,
        explain: "Aesthetics — the visual style and sonic world — has the most direct connection to the player's experience. Technology amplifies aesthetics."
      },
      {
        type: "mc",
        q: "Colossal Cave Adventure (1975) was created by:",
        choices: [
          "Don Woods alone",
          "Will and Patricia Crowther",
          "Jorge Luis Borges",
          "Edward Packard"
        ],
        answer: 1,
        explain: "Will Crowther (programmer at BBN) and his wife Patricia Crowther (Cave Research Foundation caver). Don Woods significantly expanded it in 1976."
      },
      {
        type: "tf",
        q: "Colossal Cave Adventure spread virally over the ARPANET, making it one of the earliest examples of software spreading through a network.",
        answer: true,
        explain: "True. Will saved the game on a BBN computer (BBN built ARPANET) and people across the network discovered it. 'Where Patricia linked caves, Will linked nodes.'"
      },
      {
        type: "mc",
        q: "Edward Packard's 1969 book Sugarcane Island is considered the origin of:",
        choices: [
          "The text adventure",
          "Choose Your Own Adventure books",
          "Hypertext fiction",
          "The visual novel"
        ],
        answer: 1,
        explain: "Sugarcane Island (1969) invented the Choose Your Own Adventure format — non-linear branching narrative with multiple endings."
      }
      ,{
        type: "mc",
        q: "In the Space Invaders example, the marching alien sound that speeds up as more aliens are destroyed is an example of which of Schell's elements?",
        choices: ["Mechanics", "Story", "Technology", "Aesthetics"],
        answer: 3,
        explain: "Aesthetics — the sonic world of the game. The heartbeat-like sound speeding up creates tension and shapes the player's experience emotionally."
      },
      {
        type: "tf",
        q: "According to the lecture, multiplayer role-playing games are pure games of emergence with no progression elements.",
        answer: false,
        explain: "False. They are HYBRIDS — emergence games with progression components. The overall structure is emergent but contains small linear quests."
      },
      {
        type: "mc",
        q: "The Space Invaders thought experiment (fast fashion vs. surveillance drones) is used to argue that:",
        choices: [
          "Rules are the only thing that matters in games",
          "Fiction is unimportant to game design",
          "The same rule system can carry completely different meanings depending on fiction",
          "Aesthetics should always come before mechanics"
        ],
        answer: 2,
        explain: "Same mechanics, different fiction → different meaning. This is the counter-argument to the claim that fiction is incidental. Rules support fiction allegorically."
      },
      {
        type: "mc",
        q: "Jorge Luis Borges's 1941 story 'The Garden of Forking Paths' is cited as an early example of:",
        choices: [
          "Algorithmic game design",
          "Non-linear narrative — the source of the term 'Borgesian'",
          "The first text adventure",
          "Ludology as a discipline"
        ],
        answer: 1,
        explain: "Borges imagined an infinite series of forking, parallel times. It's part of the lineage of non-linear / interactive storytelling that leads to Colossal Cave and Choose Your Own Adventure."
      },
      {
        type: "tf",
        q: "Will Crowther worked at the company contracted to help build the ARPANET, which is how Colossal Cave Adventure spread across the early network.",
        answer: true,
        explain: "True. Will worked at Bolt Beranek and Newman (BBN), the company building ARPANET. He saved the game on a BBN computer that was on the network, and it spread from there."
      }
    ]
  },

  animation: {
    title: "Animation",
    color: "#c1432f",
    questions: [
      {
        type: "mc",
        q: "Étienne-Jules Marey is best known for inventing:",
        choices: [
          "The rotoscope",
          "The chronophotographic gun",
          "Stop-motion animation",
          "The first animated feature film"
        ],
        answer: 1,
        explain: "Marey invented the chronophotographic gun (1882), capturing 12 frames per second on a single plate. His sequential motion studies are foundational to animation."
      },
      {
        type: "tf",
        q: "Marey's work helped establish the scientific basis for the persistence of vision principle.",
        answer: true,
        explain: "True. His sequential-image studies showed how rapid stills create the illusion of continuous motion — the foundation of all animation."
      },
      {
        type: "mc",
        q: "J. Stuart Blackton's contribution to animation was primarily:",
        choices: [
          "Inventing the rotoscope",
          "Creating the first feature-length animated film",
          "Using stop-motion and drawn animation in silent films in the early 1900s",
          "Developing 12 principles of animation"
        ],
        answer: 2,
        explain: "Blackton was one of the earliest pioneers of film animation, with works like The Enchanted Drawing (1900) and The Haunted House (1907)."
      },
      {
        type: "mc",
        q: "Winsor McCay's Gertie the Dinosaur (1914) is significant because it:",
        choices: [
          "Was the first animated feature film",
          "Introduced character personality and emotional responses",
          "Was the first to use color",
          "Was the first to use sound"
        ],
        answer: 1,
        explain: "Gertie had discernible emotional responses, individual personality traits, and behaviors beyond basic gestures — plus technical advances like animated loops and key frames."
      },
      {
        type: "mc",
        q: "The 12 basic principles of animation come from which book?",
        choices: [
          "Understanding Comics",
          "The Illusion of Life: Disney Animation",
          "The Animator's Survival Kit",
          "The Art of Game Design"
        ],
        answer: 1,
        explain: "The Illusion of Life by Ollie Johnston and Frank Thomas — the foundational text on Disney animation principles."
      },
      {
        type: "mc",
        q: "Which animation principle gives a sense of weight, volume, and flexibility to animated objects?",
        choices: ["Timing", "Slow In and Slow Out", "Squash and Stretch", "Arcs"],
        answer: 2,
        explain: "Squash and Stretch. A bouncing ball flattens on impact and stretches as it moves, telling viewers about the object's physical properties."
      },
      {
        type: "mc",
        q: "'Slow In and Slow Out' is also commonly known in motion graphics software as:",
        choices: ["Tweening", "Ease in / Ease out", "Keyframing", "Onion skinning"],
        answer: 1,
        explain: "Ease in / Ease out. Objects in the real world tend to slowly accelerate and slowly decelerate — almost nothing starts or stops instantly."
      },
      {
        type: "tf",
        q: "According to the principle of Timing, more frames produce faster motion.",
        answer: false,
        explain: "False — it's the opposite. More frames = slower motion. Fewer frames = faster motion."
      },
      {
        type: "mc",
        q: "Stop motion animation works by:",
        choices: [
          "Tracing live-action footage frame by frame",
          "Taking a shot, slightly moving the subject, then taking another shot",
          "Writing code to generate movement procedurally",
          "Using flat materials cut from paper or magazines"
        ],
        answer: 1,
        explain: "Stop motion: shoot, move, shoot. When viewed in sequence, the still frames create the illusion of motion. Works with clay, puppets, objects, even people."
      },
      {
        type: "mc",
        q: "Rotoscoping was patented in 1917 by:",
        choices: ["Walt Disney", "Max Fleischer", "Winsor McCay", "Ollie Johnston"],
        answer: 1,
        explain: "Max Fleischer patented rotoscoping in 1917. Originally, animators projected film onto a frosted glass panel and traced it frame by frame."
      },
      {
        type: "tf",
        q: "Rotoscoping involves tracing an image from a film one frame at a time.",
        answer: true,
        explain: "True. Modern examples include Linklater's Waking Life and the Amazon series Undone."
      },
      {
        type: "mc",
        q: "In 3D animation, 'rigging' refers to:",
        choices: [
          "Setting up lights in the scene",
          "Applying textures to surfaces",
          "Giving control points and handles to objects, like a marionette",
          "Building the geometric mesh from vertices"
        ],
        answer: 2,
        explain: "Rigging adds control points so animators can pose and move models. Woody in Toy Story had approximately 700 control points."
      },
      {
        type: "mc",
        q: "Algorithmic animation is best described as:",
        choices: [
          "Animation traced from live footage",
          "Animation that uses code to execute many repeated commands controlling design elements",
          "Animation built from clay or puppets",
          "Animation made by drawing every frame by hand"
        ],
        answer: 1,
        explain: "Algorithmic animation is code-driven — the animator writes rules and the computer generates movement procedurally, rather than drawing each frame."
      },
      {
        type: "mc",
        q: "Cutout animation is best described as:",
        choices: [
          "A type of 3D animation using digital models",
          "A type of stop-motion using flat materials like paper, magazines, or fabric",
          "Animation drawn directly on celluloid",
          "Computer-generated 2D animation"
        ],
        answer: 1,
        explain: "Cutout is stop-motion with flat materials — described as 'photomontage in motion.' Terry Gilliam's Monty Python animations are a famous example."
      },
      {
        type: "mc",
        q: "Stan VanDerBeek pioneered an animation approach he called:",
        choices: ["Cut and Paste Cinema", "Total Animation", "Algorithmic Cinema", "Direct Cinema"],
        answer: 0,
        explain: "VanDerBeek pioneered 'Cut and Paste Cinema' — combining collage with animation, inter-splicing live footage, and scratching or painting directly on celluloid."
      }
      ,{
        type: "mc",
        q: "The 12 basic principles of animation were articulated by which two Disney animators?",
        choices: [
          "Walt Disney and Roy Disney",
          "Ollie Johnston and Frank Thomas",
          "Max Fleischer and Dave Fleischer",
          "Chuck Jones and Tex Avery"
        ],
        answer: 1,
        explain: "Ollie Johnston and Frank Thomas in The Illusion of Life: Disney Animation. (Note: the lecture spells it 'Johnson' but the correct spelling is Johnston.)"
      },
      {
        type: "mc",
        q: "In animation, 'tweening' refers to:",
        choices: [
          "Animating teenage characters",
          "Automatically generated in-between frames between key frames",
          "A type of rotoscoping",
          "Combining two different animation styles"
        ],
        answer: 1,
        explain: "Tweening (from 'in-between') is what Flash called the auto-generated frames between keyframes. In Premiere/After Effects this is just called keyframing."
      },
      {
        type: "tf",
        q: "Pose to Pose animation uses key frames as starting and stopping points, with the in-between frames filled in later.",
        answer: true,
        explain: "True. The opposite is Straight Ahead, where each frame is drawn one after another. Pose to Pose is what most modern keyframe-based animation software uses."
      },
      {
        type: "mc",
        q: "Which of these is NOT a feature of 3D animation as described in the lecture?",
        choices: [
          "Models built from geometrical vertices",
          "Rigging with control points",
          "Tracing live-action footage frame by frame",
          "Spot lights and point lights for accentuating depth"
        ],
        answer: 2,
        explain: "Tracing live footage frame by frame is rotoscoping, not 3D animation. 3D uses vertices, rigging, lighting, textures, and a virtual 3D camera."
      },
      {
        type: "mc",
        q: "Which of the following animations was given as a cutout animation example in the lecture?",
        choices: [
          "Toy Story",
          "Waking Life",
          "Terry Gilliam's Monty Python animations",
          "Gertie the Dinosaur"
        ],
        answer: 2,
        explain: "Terry Gilliam's Monty Python animations are the iconic cutout example. Also cited: Stan VanDerBeek's 'Cut and Paste Cinema' and Lemony Snicket opening sequences."
      }
    ]
  },

  uxui: {
    title: "UX / UI",
    color: "#c1432f",
    questions: [
      {
        type: "mc",
        q: "Jakob Nielsen and Don Norman (2014) define User Experience as:",
        choices: [
          "Only the visual interface a user sees",
          "All aspects of the end-user's interaction with the company, its services, and its products",
          "The technology stack used to build a product",
          "The marketing strategy around a digital product"
        ],
        answer: 1,
        explain: "UX encompasses ALL aspects — not just the interface. It includes how a person feels about the product across every touchpoint."
      },
      {
        type: "mc",
        q: "Marc Hassenzahl's UX model (2010) divides user experience into which two dimensions?",
        choices: [
          "Functional and Visual",
          "Pragmatic and Hedonic",
          "Practical and Beautiful",
          "Cognitive and Emotional"
        ],
        answer: 1,
        explain: "Pragmatic (how practical it is to achieve goals) and Hedonic (how evocative and stimulating the interaction is)."
      },
      {
        type: "tf",
        q: "According to Steve Krug, people generally read websites carefully from top to bottom.",
        answer: false,
        explain: "False. Krug's central point in Don't Make Me Think is that people SCAN websites — they don't read them. Design must accommodate this."
      },
      {
        type: "mc",
        q: "Which is NOT one of Krug's six guidelines for designing for scanning?",
        choices: [
          "Take advantage of conventions",
          "Create effective visual hierarchies",
          "Use lots of decorative animation",
          "Make it obvious what's clickable"
        ],
        answer: 2,
        explain: "Decorative animation is NOT a guideline — Krug actually says to eliminate distractions. His six guidelines all push toward minimal, scannable design."
      },
      {
        type: "mc",
        q: "Jakob's Law states that:",
        choices: [
          "Designers should always innovate with new conventions",
          "Users prefer your site to work the same way as other sites they already know",
          "The more options you give users, the happier they will be",
          "Aesthetics always trump usability"
        ],
        answer: 1,
        explain: "Jakob's Law: users spend most of their time on OTHER sites, so they expect yours to behave like the ones they're used to."
      },
      {
        type: "mc",
        q: "A 'mental model' in UX refers to:",
        choices: [
          "A wireframe of the interface",
          "What users think they know about how a system works, based on past experience",
          "The designer's vision for the product",
          "The technical architecture of the application"
        ],
        answer: 1,
        explain: "Mental models are users' assumptions based on prior experience. Matching them lowers cognitive load. Snapchat's redesign violated user mental models — and tanked."
      },
      {
        type: "mc",
        q: "Hick's Law states that:",
        choices: [
          "Beautiful designs feel more usable",
          "The time to make a decision increases with the number and complexity of choices",
          "Users will always pick the first option presented",
          "More users mean more design constraints"
        ],
        answer: 1,
        explain: "Hick's Law: more choices = longer decision time. Designers should minimize choices when response times are critical."
      },
      {
        type: "mc",
        q: "The 'Paradox of Choice' was popularized by which psychologist?",
        choices: ["Daniel Kahneman", "Herbert A. Simon", "Barry Schwartz", "Don Norman"],
        answer: 2,
        explain: "Barry Schwartz, building on Herbert A. Simon's 1950s work. More choice ≠ more happiness; it can cause paralysis."
      },
      {
        type: "tf",
        q: "The Aesthetic Usability Effect says that users are MORE tolerant of minor usability issues when a design is aesthetically pleasing.",
        answer: true,
        explain: "True. Beautiful designs are often perceived as more usable, and users forgive small flaws when the product looks good."
      },
      {
        type: "mc",
        q: "'Visibility of System Status' is one of Jakob Nielsen's:",
        choices: [
          "Laws of UX",
          "10 Usability Heuristics",
          "Design Principles",
          "User Personas"
        ],
        answer: 1,
        explain: "It's the first of Nielsen's 10 Usability Heuristics. The system should always keep users informed about what's happening."
      },
      {
        type: "mc",
        q: "A progress bar showing '47% complete' is an example of which type of loading indicator?",
        choices: ["Indeterminate", "Determinate", "Asynchronous", "Skeleton"],
        answer: 1,
        explain: "Determinate indicators show specific progress. Indeterminate indicators (like a spinning circle) only show that SOMETHING is happening."
      },
      {
        type: "mc",
        q: "Flat design is best described as a movement AGAINST:",
        choices: [
          "Minimalism",
          "Skeuomorphic, 3D, and realistic styles",
          "Limited color schemes",
          "Dramatic typography"
        ],
        answer: 1,
        explain: "Flat design rejects highlights, shadows, gradients, and textures that make UI elements look glossy or three-dimensional."
      },
      {
        type: "mc",
        q: "Which is NOT a characteristic of minimalist web design?",
        choices: [
          "Flat design",
          "Limited color schemes",
          "Heavy use of skeuomorphic textures",
          "Use of negative space"
        ],
        answer: 2,
        explain: "Skeuomorphism is the OPPOSITE of minimalism. Minimalist web design uses flat design, limited color, few UI elements, negative space, and dramatic typography."
      },
      {
        type: "tf",
        q: "A website can be flat without being minimal.",
        answer: true,
        explain: "True. Flat refers to textures/icons/graphics; minimalism applies to broader content, feature, and layout strategy. The two are related but distinct."
      },
      {
        type: "mc",
        q: "Skeuomorphic design is best described as:",
        choices: [
          "A style that avoids 3D effects and shadows",
          "A style in which digital interface elements imitate their real-world counterparts",
          "A code-generated procedural design",
          "A typography-driven minimalist approach"
        ],
        answer: 1,
        explain: "Skeuomorphism makes digital elements look like physical objects — like the original iOS Notes app looking like a yellow legal pad. Apple's iOS 7 (2013) marked the shift away from it."
      }
      ,{
        type: "mc",
        q: "According to Steve Krug, where should the search bar conventionally be located on a website?",
        choices: ["Bottom center", "Top left", "Upper right", "Down the left side"],
        answer: 2,
        explain: "Upper right is the convention. Logo goes top-left, primary navigation goes across the top or down the left side, search goes upper right."
      },
      {
        type: "tf",
        q: "An indeterminate loading indicator (like a spinning circle) communicates specific progress to the user.",
        answer: false,
        explain: "False. Indeterminate indicators only show that SOMETHING is happening. Determinate indicators (like a progress bar at 47%) show specific progress."
      },
      {
        type: "mc",
        q: "Dieter Rams's design philosophy 'Less, but better' is most associated with which product?",
        choices: ["The original iPhone", "The Braun SK4", "The Eames lounge chair", "The Bauhaus typewriter"],
        answer: 1,
        explain: "Dieter Rams designed the Braun SK4 with the philosophy 'Less, but better' — a major influence on Jonathan Ive and Apple's minimalist design language."
      },
      {
        type: "mc",
        q: "Robert Venturi's critique 'Less is a bore' is aimed at:",
        choices: [
          "Skeuomorphic design",
          "Over-applied, personality-free minimalism",
          "Flat design specifically",
          "The Snapchat redesign"
        ],
        answer: 1,
        explain: "Venturi's response to Mies van der Rohe's 'Less is more.' The lecture extends this: minimalism applied everywhere creates bland 'Bauhaus-era UX' that has no personality."
      },
      {
        type: "tf",
        q: "Skeuomorphic design helps users by leveraging existing mental models — a button that looks raised invites pressing.",
        answer: true,
        explain: "True. Skeuomorphism uses 3D effects, textures, and shadows to make digital elements feel familiar. The trade-off: it can feel dated, which is why Apple's iOS 7 (2013) shifted toward flat design."
      }
    ]
  },

  affordances: {
    title: "Affordances of Digital Media",
    color: "#c1432f",
    questions: [
      {
        type: "mc",
        q: "Janet Murray's four affordances of the digital medium are:",
        choices: [
          "Visual, Audio, Spatial, Temporal",
          "Encyclopedic, Spatial, Procedural, Participatory",
          "Interactive, Immersive, Imaginative, Iterative",
          "Numerical, Modular, Automatic, Variable"
        ],
        answer: 1,
        explain: "Murray's four affordances: Encyclopedic (storage), Spatial (navigation), Procedural (computer processes), and Participatory (human interaction)."
      },
      {
        type: "mc",
        q: "Which affordance refers to the computer's unmatched storage capacity and ability to contain more information in more forms than any previous medium?",
        choices: ["Spatial", "Procedural", "Encyclopedic", "Participatory"],
        answer: 2,
        explain: "Encyclopedic affordance — examples include databases, archives, and encyclopedias. Listening Post by Hansen & Rubin draws on this affordance."
      },
      {
        type: "mc",
        q: "An augmented reality app like Kinfolk that lets users place new monuments at Columbus Circle is an example of which affordance?",
        choices: ["Encyclopedic", "Spatial", "Procedural", "Participatory"],
        answer: 1,
        explain: "Spatial affordance — navigation + GUI. AR overlays a navigable digital layer on physical space."
      },
      {
        type: "tf",
        q: "The term 'algorithm' is derived from the name of the mathematician Muhammad ibn Musa al-Khwarizmi.",
        answer: true,
        explain: "True. He led the House of Wisdom in Baghdad (820–850) and developed mathematical techniques foundational to algebra (also derived from his name)."
      },
      {
        type: "mc",
        q: "Stephanie Dinkins' Conversations with Bina48 primarily highlights which affordance?",
        choices: ["Encyclopedic", "Spatial", "Procedural", "Participatory"],
        answer: 3,
        explain: "Participatory — the work is built around human interaction and dialogue with an AI."
      },
      {
        type: "mc",
        q: "According to Lev Manovich, the five principles of new media are:",
        choices: [
          "Encyclopedic, Spatial, Procedural, Participatory, Interactive",
          "Numerical Representation, Modularity, Automation, Variability, Transcoding",
          "Visual, Audio, Spatial, Temporal, Numerical",
          "Open, Modular, Distributed, Variable, Networked"
        ],
        answer: 1,
        explain: "Manovich's five principles: Numerical Representation, Modularity, Automation, Variability, and Transcoding."
      },
      {
        type: "mc",
        q: "Manovich's principle of 'Numerical Representation' means that:",
        choices: [
          "All new media objects can be measured in pixels",
          "All new media objects are made of digital code (0s and 1s) and can be programmatically manipulated",
          "New media uses numerical interfaces",
          "All media must include statistical analysis"
        ],
        answer: 1,
        explain: "Because all new media share the same binary code, media becomes programmable, and mappings can be made between text, sound, image, and film."
      },
      {
        type: "mc",
        q: "Which Manovich principle most closely corresponds to Janet Murray's 'Procedural' affordance?",
        choices: ["Modularity", "Variability", "Automation", "Transcoding"],
        answer: 2,
        explain: "Automation. Both describe the computer's ability to execute repeated tasks and processes."
      },
      {
        type: "mc",
        q: "Your personalized Amazon homepage that changes based on your behavior is the best example of which Manovich principle?",
        choices: ["Numerical Representation", "Modularity", "Variability", "Transcoding"],
        answer: 2,
        explain: "Variability — a new media object can exist in an unlimited number of states. Each user sees a unique version."
      },
      {
        type: "mc",
        q: "Manovich's principle of Transcoding describes new media as having:",
        choices: [
          "Only a cultural layer",
          "Only a computer layer",
          "Two distinct layers: a cultural layer and a computer layer",
          "Three layers: visual, audio, and code"
        ],
        answer: 2,
        explain: "Transcoding: cultural layer (what humans understand) + computer layer (lists, records, arrays). Analog objects only have one level."
      },
      {
        type: "mc",
        q: "Rashin Fahandej's A Father's Lullaby uses touch-activated audio portraits to address:",
        choices: [
          "Climate change",
          "Racial disparities in the criminal justice system and mass incarceration",
          "Migration patterns",
          "Voter suppression"
        ],
        answer: 1,
        explain: "The work highlights the role of men in raising children and their absence due to racial disparities in the criminal justice system."
      },
      {
        type: "mc",
        q: "Steve Lambert's Simmer Down Sprinter uses what biometric to control the speed of on-screen runners?",
        choices: [
          "Heart rate",
          "Breathing rate",
          "Galvanic Skin Response (GSR)",
          "Brain waves"
        ],
        answer: 2,
        explain: "GSR — changes in skin's electrical resistance from emotional stress. The more the player relaxes, the faster their runner moves."
      },
      {
        type: "mc",
        q: "Sougwen Chung's Omnia per Omnia is a collaboration between the artist and:",
        choices: [
          "A team of human painters",
          "A swarm of custom-designed drawing robots (D.O.U.G._L.A.S.)",
          "A neural network only",
          "Visitors to the museum"
        ],
        answer: 1,
        explain: "The robotic swarm is D.O.U.G._L.A.S. — Drawing Operations Unit: Generation_3 Live Autonomous System. It reimagines landscape painting as human-machine collaboration."
      },
      {
        type: "mc",
        q: "Söke Dinkla proposed that new media should be understood as:",
        choices: [
          "A purely technological development",
          "Parallel tendencies between modern art and computer science since the end of WWII",
          "An extension of cinema",
          "A subset of conceptual art"
        ],
        answer: 1,
        explain: "Dinkla's framework: artists and computer scientists were articulating similar ideas at the same time, using manifestos and prototypes alike."
      },
      {
        type: "tf",
        q: "Sol LeWitt's instruction-based Wall Drawings can be seen as a kind of pseudocode — plain-language instructions that could be turned into a computer program.",
        answer: true,
        explain: "True. LeWitt's Work from Instructions (1971) reads almost identically to a computer algorithm. This is core to Dinkla's parallel tendencies thesis."
      }
      ,{
        type: "mc",
        q: "Listening Post by Mark Hansen and Ben Rubin is given as an art example of which of Murray's affordances?",
        choices: ["Encyclopedic", "Spatial", "Procedural", "Participatory"],
        answer: 0,
        explain: "Encyclopedic. The work visualizes and sonifies a vast pool of live online conversation from internet chatrooms — drawing on the computer's storage capacity."
      },
      {
        type: "mc",
        q: "Manovich's principle of Modularity means that:",
        choices: [
          "All media is built from the same physical materials",
          "A new media object consists of independent parts that can be modified separately",
          "Media is always made in modules of 60 seconds or less",
          "New media must follow a modular grid layout"
        ],
        answer: 1,
        explain: "Modularity = independent parts modifiable separately. In an animation, the 'cars' element can be swapped to 'trains' without redoing the rest. Analog work would require redoing everything."
      },
      {
        type: "tf",
        q: "Fluxus was founded as a single unified art movement with strict rules about style and material.",
        answer: false,
        explain: "False. Fluxus (founded 1960 by George Maciunas) had NO single unifying style — it was a shared attitude. DIY, democratic, valued chance and humor. Used whatever materials were at hand."
      },
      {
        type: "mc",
        q: "Douglas Engelbart's December 9, 1968 demonstration — now called 'The Mother of All Demos' — introduced which technologies?",
        choices: [
          "The transistor and the integrated circuit",
          "The mouse, video conferencing, hypertext, and word processing",
          "HTML, HTTP, and the URL",
          "Email and the @ symbol"
        ],
        answer: 1,
        explain: "Engelbart introduced the mouse, video conferencing, hypertext, word processing, and dynamic file linking — foundational HCI innovations of the era."
      },
      {
        type: "mc",
        q: "Sol LeWitt's practice of using permutations — arranging all members of a set into different sequences — is described in the lecture as:",
        choices: [
          "Conceptual minimalism",
          "Combinatorial aesthetics",
          "Procedural drawing",
          "Algorithmic painting"
        ],
        answer: 1,
        explain: "Combinatorial aesthetics — iterating through all possible permutations. This is exactly what a computer program does, which is why LeWitt's instruction-based work fits Dinkla's 'parallel tendencies' thesis."
      }
    ]
  },

  internet: {
    title: "Internet",
    color: "#c1432f",
    questions: [
      {
        type: "mc",
        q: "HTTP stands for:",
        choices: [
          "HyperText Transmission Process",
          "HyperText Transfer Protocol",
          "Hyperlink Transport Protocol",
          "High-speed Text Transfer Path"
        ],
        answer: 1,
        explain: "HyperText Transfer Protocol — the open protocol for serving web pages, created by Tim Berners-Lee at CERN."
      },
      {
        type: "mc",
        q: "CSS is primarily used to:",
        choices: [
          "Define the structure of a webpage",
          "Control the visual style of a website",
          "Add interactive behavior to a webpage",
          "Communicate between server and client"
        ],
        answer: 1,
        explain: "CSS (Cascading Style Sheets) controls visual style — colors, fonts, layout, spacing. Demonstrated by CSS Zen Garden."
      },
      {
        type: "mc",
        q: "A JavaScript 'library' is best described as:",
        choices: [
          "A folder of HTML files",
          "A JS file included in your page that lets you use its functions, objects, and methods",
          "A database for storing user information",
          "A server-side programming language"
        ],
        answer: 1,
        explain: "Libraries (like Three.js, A-Frame) extend JavaScript's functionality — you include them and access their pre-built features."
      },
      {
        type: "mc",
        q: "ARPANET was officially launched in:",
        choices: ["1958", "1962", "1968", "1981"],
        answer: 2,
        explain: "Project started in 1968 — the first nationwide interconnected computer network. By Fall 1969, Stanford and UCLA were networked."
      },
      {
        type: "mc",
        q: "DARPA was formed in 1958 in response to:",
        choices: [
          "The Vietnam War",
          "The launch of Sputnik in 1957",
          "The Cuban Missile Crisis",
          "The breakup of AT&T"
        ],
        answer: 1,
        explain: "Eisenhower formed DARPA (Defense Advanced Research Projects Agency) on Jan. 7, 1958, in response to Sputnik (Oct. 4, 1957)."
      },
      {
        type: "mc",
        q: "Joseph C.R. Licklider's contribution to the Internet was primarily:",
        choices: [
          "Inventing packet switching",
          "Writing 'Man-Computer Symbiosis' (1960) and conceiving of an interconnected 'Intergalactic Computer Network'",
          "Creating HTML and HTTP",
          "Designing the first web browser"
        ],
        answer: 1,
        explain: "Licklider was the visionary — director of DARPA's behavioral science office, he conceived of interconnected computers and recruited the talent that built ARPANET."
      },
      {
        type: "mc",
        q: "Dennis Ritchie's primary contributions were:",
        choices: [
          "Inventing the World Wide Web",
          "Co-creating Unix and creating the C programming language",
          "Designing the distributed network",
          "Building the first web browser"
        ],
        answer: 1,
        explain: "Ritchie co-created Unix with Ken Thompson at Bell Labs (1969-71) and created C. Unix rewritten in C in 1972 became hardware-independent — a foundation of networked computing."
      },
      {
        type: "tf",
        q: "Because of an antitrust case against AT&T, Bell Labs gave Unix away for free to universities and government agencies.",
        answer: true,
        explain: "True. AT&T couldn't enter the computer business, so they distributed Unix freely. This shaped a generation of programmers in the late 1970s."
      },
      {
        type: "mc",
        q: "Who proposed the distributed network at the Rand Corporation, hired by the Air Force?",
        choices: ["Donald Davies", "Vint Cerf", "Paul Baran", "Bob Taylor"],
        answer: 2,
        explain: "Paul Baran. It took him 5 years to convince his peers. The British physicist Donald Davies arrived at the same conclusion independently — and invented packet switching."
      },
      {
        type: "mc",
        q: "Which of these is the key benefit of a DISTRIBUTED network over a centralized or decentralized one?",
        choices: [
          "It's cheaper to build",
          "It provides redundancy for information delivery if a node goes down",
          "It uses less bandwidth",
          "It's easier to censor"
        ],
        answer: 1,
        explain: "Distributed networks survive node failures because information can route around damage. This was originally a Cold War concern."
      },
      {
        type: "tf",
        q: "Donald Davies came up with the idea of packet switching — breaking data into smaller 'electronic packets' that could be dispersed across the network.",
        answer: true,
        explain: "True. Davies, working independently of Paul Baran, conceived of packet switching — a core technical innovation behind the internet."
      },
      {
        type: "mc",
        q: "Tim Berners-Lee, working at CERN, did NOT create which of the following?",
        choices: ["HTML", "HTTP", "URL", "TCP/IP"],
        answer: 3,
        explain: "Berners-Lee created HTML, HTTP, and the URL. TCP/IP is an older, separate protocol — one of the foundational protocols of the internet itself."
      },
      {
        type: "mc",
        q: "Web 1.0 was characterized primarily by:",
        choices: [
          "User-generated content on centralized platforms",
          "Open protocols owned by no one, like POP, SMTP, HTTP, and TCP/IP",
          "Blockchain-based ownership",
          "Augmented reality experiences"
        ],
        answer: 1,
        explain: "Web 1.0 ran on open protocols defined and maintained by academic researchers and standards bodies — anyone could use them free of charge."
      },
      {
        type: "mc",
        q: "Web 2.0 is best defined as:",
        choices: [
          "The introduction of HTML5",
          "Sites that leverage user-generated content to create platforms for communication and sharing media",
          "A system based on blockchain ownership",
          "Open-source protocols replacing proprietary ones"
        ],
        answer: 1,
        explain: "Web 2.0 = Facebook, TikTok, Instagram, YouTube. Centralized platforms that monetize user-generated content."
      },
      {
        type: "mc",
        q: "Jonathan Taplin describes the Google business model as:",
        choices: [
          "Selling premium subscriptions to users",
          "Extracting personal data at the lowest price and reselling it to companies at the highest price",
          "Licensing its search algorithm to enterprise clients",
          "Charging publishers for indexing their content"
        ],
        answer: 1,
        explain: "Taplin's definition (Move Fast and Break Things). Shoshana Zuboff frames this as 'surveillance capitalism' — trading in 'human futures.'"
      }
      ,{
        type: "mc",
        q: "The W3C (World Wide Web Consortium) is responsible for:",
        choices: [
          "Running the ARPANET",
          "Setting web standards",
          "Manufacturing servers",
          "Distributing the Unix operating system"
        ],
        answer: 1,
        explain: "The W3C sets web standards. HTML5, for example, was published Oct. 28, 2014 under W3C's standards process."
      },
      {
        type: "tf",
        q: "The first word ever sent over ARPANET was 'login,' transmitted successfully on the first attempt.",
        answer: false,
        explain: "False. The first word sent was 'lo' — the system CRASHED while trying to type 'login.' A fittingly imperfect debut for what became the internet."
      },
      {
        type: "mc",
        q: "Why was AT&T's centralized telephone switching network seen as a Cold War vulnerability?",
        choices: [
          "It was too slow for military use",
          "The switching centers were close to major cities and would be high-value targets for Soviet missiles",
          "It used outdated copper wires",
          "Foreign agents could easily intercept calls"
        ],
        answer: 1,
        explain: "Centralized switching centers near major cities = single points of failure that could be destroyed in a nuclear strike. This is why Paul Baran proposed the distributed network at Rand."
      },
      {
        type: "mc",
        q: "Steven Johnson defines a 'protocol' as:",
        choices: [
          "A type of computer hardware",
          "A way that multiple computers agree to communicate with one another",
          "A government regulation for internet companies",
          "A type of network cable"
        ],
        answer: 1,
        explain: "Johnson: 'a way that multiple computers agree to communicate with one another.' Protocols govern raw data flow, email, web addresses, etc. — TCP/IP, HTTP, SMTP are all protocols."
      },
      {
        type: "tf",
        q: "Shoshana Zuboff calls Google's revenue growth from 2000 to 2004 — a 3,590% increase — the 'surveillance dividend.'",
        answer: true,
        explain: "True. This rapid growth reset the bar for investors and drove startups, Facebook, and eventually the broader economy toward surveillance capitalism business models."
      }
    ]
  }

};
