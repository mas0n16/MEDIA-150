/* ============================================
   MEDP 150 — Practice Test Question Banks
   Questions written to match study guide format:
   definitional, explanatory, application-based.
   ============================================ */

const QUIZ_DATA = {

  gaming: {
    title: "Gaming",
    color: "#c1432f",
    questions: [

      // --- GAMIFICATION ---
      {
        type: "mc",
        q: "Gamification is best defined as:",
        choices: [
          "The process of designing video games for educational purposes",
          "The application of game-playing elements — points, competition, rules — to non-game activities, typically to drive engagement with a product or service",
          "The study of games as a cultural phenomenon",
          "The use of game engines to create interactive media"
        ],
        answer: 1,
        explain: "Gamification applies game elements (point scoring, competition, rules) to non-game contexts — typically as an online marketing technique to encourage engagement with a product or service. Coined by Nick Pelling in 2002."
      },
      {
        type: "tf",
        q: "According to Eric Zimmerman, gamification preserves the most valuable aspects of games — play, creativity, and critical thinking.",
        answer: false,
        explain: "False. Zimmerman argues gamification 'strip-mines the superficial aspects of games' (points, levels, rewards) while leaving the 'soul of play' behind — abandoning transgressive creativity and critical thinking."
      },
      {
        type: "mc",
        q: "Eric Zimmerman critiques gamification by arguing that it:",
        choices: [
          "Makes games too complicated for casual players",
          "Focuses too much on storytelling at the expense of mechanics",
          "Strips games of their soul by reducing them to points and rewards used as marketing tools",
          "Gives too much power to players and not enough to designers"
        ],
        answer: 2,
        explain: "Zimmerman (The Rules We Break): gamification 'weaponizes' games as frequent flyer reward programs, stripping the superficial aspects while abandoning play's most valuable qualities — transgressive creativity, the dance of desire and meaning."
      },

      // --- LUDOLOGY VS. NARRATOLOGY ---
      {
        type: "mc",
        q: "Narratology, as applied to video games, is an approach that:",
        choices: [
          "Argues games should have no story whatsoever",
          "Borrows analytical tools from literature and film to understand video games",
          "Studies games purely through their rules and mechanics",
          "Claims games are a form of interactive cinema"
        ],
        answer: 1,
        explain: "Narratology borrows from literature and film — rooted in Aristotle's Poetics and extended to games by theorists like Janet Murray in Hamlet on the Holodeck (1997)."
      },
      {
        type: "mc",
        q: "Ludology argues that the most important thing about games is:",
        choices: [
          "Their visual style and cinematic quality",
          "Their narrative and storytelling potential",
          "Play itself — which older art-form methods cannot fully capture",
          "Their ability to replicate real-world experiences"
        ],
        answer: 2,
        explain: "Ludology holds that games are distinct from other media and that play — not story — is central. Johan Huizinga (Homo Ludens, 1938) argued play is primary to and a necessary condition for human culture."
      },
      {
        type: "tf",
        q: "Today, the split between ludology and narratology is considered absolute — scholars must choose one framework and reject the other entirely.",
        answer: false,
        explain: "False. The split has softened considerably. Modern theorists build bridges between the two — cutscenes and quests are examples of elements that blend narrative and game structure."
      },
      {
        type: "mc",
        q: "Which of the following is an example of something that bridges the gap between ludology and narratology?",
        choices: [
          "A game with no story at all",
          "A purely text-based novel",
          "Cutscenes and quests that blend narrative with player action",
          "A film adaptation of a video game"
        ],
        answer: 2,
        explain: "Cutscenes provide unifying narrative logic and reward player actions. Quests give sequences of events the player must actualize. Both bridge ludology (play/rules) and narratology (story)."
      },

      // --- EMERGENCE VS. PROGRESSION ---
      {
        type: "mc",
        q: "A game of emergence is best described as:",
        choices: [
          "A game with a fixed, designer-controlled sequence of events",
          "A game where a small number of rules combine to yield a large number of possible variations that players navigate through strategy",
          "A game designed primarily to tell a cinematic story",
          "A game that can only be played once through in a single way"
        ],
        answer: 1,
        explain: "Emergence: small number of rules → large game tree → players design strategies. Almost all multiplayer games are games of emergence. Pong is the classic example."
      },
      {
        type: "mc",
        q: "What is the key characteristic of a game of progression?",
        choices: [
          "Players can approach each situation in any order they choose",
          "The game has no rules, only loose goals",
          "The game designer has strong control over the sequence of events the player encounters",
          "The game generates infinite random scenarios for infinite replayability"
        ],
        answer: 2,
        explain: "In progression games, the designer controls the event sequence — this is where you find cinematic and storytelling ambitions. The guide for a progression game is a walkthrough; for an emergence game it's a strategy guide."
      },
      {
        type: "tf",
        q: "Pong is a classic example of a game of progression because the designer controls the sequence of events.",
        answer: false,
        explain: "False. Pong is the canonical example of emergence — few rules, large possibility space, players develop strategies. A game of progression would have a designer-controlled fixed sequence of events."
      },

      // --- SCHELL'S FOUR ELEMENTS ---
      {
        type: "mc",
        q: "According to Jesse Schell, the four basic elements of a game are:",
        choices: [
          "Rules, Players, Goals, and Rewards",
          "Mechanics, Story, Technology, and Aesthetics",
          "Design, Narrative, Interface, and Sound",
          "Gameplay, Graphics, Audio, and Controls"
        ],
        answer: 1,
        explain: "Schell's four elements (The Art of Game Design): Mechanics (rules/procedures), Story (sequence of events), Technology (the medium), and Aesthetics (visual/sonic world). All four work together."
      },
      {
        type: "mc",
        q: "According to Schell, which of his four elements is the crucial difference between games and other linear art forms like film or novels?",
        choices: ["Story", "Aesthetics", "Technology", "Mechanics"],
        answer: 3,
        explain: "Mechanics — the rules and procedures. Books and films have story, aesthetics, and technology, but only games have mechanics that the player actively interacts with. This is what makes games distinct."
      },
      {
        type: "mc",
        q: "Schell describes Aesthetics as the element that:",
        choices: [
          "Determines the rules and goals of the game",
          "Enables certain behaviors and prohibits others through the game's medium",
          "Has the most direct connection to the player's experience — the visual style and sonic world",
          "Controls the sequence of events in the game's narrative"
        ],
        answer: 2,
        explain: "Aesthetics = the visual style and sonic world of the game. It has the most direct connection to the player's experience. Technology amplifies aesthetics."
      },
      {
        type: "tf",
        q: "According to Schell, a game's Technology element must always refer to digital or electronic technology.",
        answer: false,
        explain: "False. Technology in Schell's framework is simply the medium — it can be paper and pencil, plastic objects, or VR goggles. Technology enables certain behaviors and prohibits others."
      },

      // --- COLOSSAL CAVE ADVENTURE ---
      {
        type: "mc",
        q: "What is the significance of Colossal Cave Adventure (1975) to the history of video games and interactive stories?",
        choices: [
          "It was the first game to use color graphics and a joystick controller",
          "It introduced character personality and emotional responses in animation",
          "It was the first text adventure, spread virally over the ARPANET, and is considered a foundational moment for interactive fiction and computer culture",
          "It was the first multiplayer game and introduced the concept of emergence"
        ],
        answer: 2,
        explain: "Colossal Cave Adventure is a foundational text of computer culture — the first text adventure, spread across the ARPANET (one of the earliest examples of software spreading through a network), and the origin of interactive narrative in games."
      },
      {
        type: "mc",
        q: "Colossal Cave Adventure spread across the ARPANET because:",
        choices: [
          "Its creators intentionally published it as open-source software",
          "Will Crowther worked at BBN — the company building ARPANET — and saved the game on a networked computer before going on vacation",
          "The US government funded its distribution to test the ARPANET's capabilities",
          "Don Woods uploaded it to the network after expanding the game in 1976"
        ],
        answer: 1,
        explain: "'Where Patricia linked caves, Will linked nodes.' Will worked at Bolt Beranek and Newman (BBN), the company building ARPANET. He saved the game on a BBN computer; people across the network discovered it."
      },
      {
        type: "mc",
        q: "Jorge Luis Borges's 'The Garden of Forking Paths' and Edward Packard's Choose Your Own Adventure books are discussed alongside Colossal Cave Adventure because:",
        choices: [
          "They were all developed at the same university laboratory",
          "They all use the same text-based interface as early video games",
          "They are all part of a lineage of non-linear, interactive storytelling where choices shape the narrative",
          "They were all written as critiques of traditional linear narrative structure"
        ],
        answer: 2,
        explain: "Borges (1941), Packard (1969), and Crowther (1975) share non-linear narrative structures where reader/player choices shape the story — a lineage of interactive storytelling that runs through to modern games and even interactive TV episodes."
      }
    ]
  },

  animation: {
    title: "Animation",
    color: "#c1432f",
    questions: [

      // --- KEY CONTRIBUTORS ---
      {
        type: "mc",
        q: "What was Étienne-Jules Marey's contribution to animation?",
        choices: [
          "He invented the rotoscope and the technique of tracing live footage frame by frame",
          "He created sequential photographic studies of movement that established the scientific basis for the persistence of vision principle — that rapid stills create the illusion of continuous motion",
          "He directed the first feature-length animated film and developed character personality",
          "He codified the 12 principles of animation at Disney Studios"
        ],
        answer: 1,
        explain: "Marey's chronophotographic gun (1882) captured 12 frames per second of movement on a single plate. His sequential-image studies established the basis for persistence of vision — the foundation of all animation."
      },
      {
        type: "mc",
        q: "What was J. Stuart Blackton's contribution to animation?",
        choices: [
          "He created the first feature-length animated film with synchronized sound",
          "He was one of the earliest pioneers of film animation, using stop-motion and drawn animation in silent films in the early 1900s",
          "He invented the principle of squash and stretch at Disney",
          "He patented the rotoscope as a tool for tracing live footage"
        ],
        answer: 1,
        explain: "Blackton used stop-motion and drawn animations in silent films in the early 1900s — including The Enchanted Drawing (1900) and The Haunted House (1907) — bridging live-action film and animation."
      },
      {
        type: "mc",
        q: "What was Winsor McCay's contribution to animation?",
        choices: [
          "He was the first to use computer-generated imagery in an animated film",
          "He invented the technique of rotoscoping for realistic character movement",
          "Through Gertie the Dinosaur (1914), he introduced character personality — discernible emotional responses, individual traits, and behaviors — plus technical advances like animated loops and key frames",
          "He co-authored the 12 principles of animation that became the foundation of Disney's style"
        ],
        answer: 2,
        explain: "Gertie the Dinosaur introduced character personality — emotional responses and individual traits beyond basic gestures. Disney built on McCay's innovation, realizing emotionally gripping stories were the key to animated film success."
      },
      {
        type: "tf",
        q: "The three animation principles Squash and Stretch, Slow In and Slow Out, and Timing come from a book by Ollie Johnston and Frank Thomas called The Illusion of Life: Disney Animation.",
        answer: true,
        explain: "True. Johnston and Frank Thomas codified the 12 principles in The Illusion of Life. Note: the lecture spells it 'Johnson' but the correct spelling is Johnston."
      },

      // --- THREE PRINCIPLES ---
      {
        type: "mc",
        q: "Explain the animation principle 'Squash and Stretch.' What does it do?",
        choices: [
          "It controls how quickly an object accelerates at the beginning and end of its movement",
          "It determines how many frames are used to produce fast or slow motion",
          "It gives a sense of weight, volume, and flexibility to animated objects — communicating physical properties like mass and elasticity",
          "It ensures that all actions follow an arc rather than a straight line path"
        ],
        answer: 2,
        explain: "Squash and Stretch gives a sense of weight, volume, and flexibility. A bouncing ball squashes on impact and stretches in motion — telling the viewer about the physical properties of what's being animated. Without it, objects feel rigid and lifeless."
      },
      {
        type: "mc",
        q: "Explain the animation principle 'Slow In and Slow Out.' What does it reflect?",
        choices: [
          "The idea that heavier objects should move more slowly across the screen",
          "The real-world physics of natural acceleration and deceleration — objects slowly speed up at the start of movement and slow down at the end",
          "The rule that animations should begin and end with a still frame",
          "The principle that fewer frames should always be used at the climax of an action"
        ],
        answer: 1,
        explain: "Slow In and Slow Out (known as 'ease in / ease out' in motion graphics software) mimics natural physics — almost nothing in the real world starts or stops instantly. Without it, motion feels mechanical and robotic."
      },
      {
        type: "mc",
        q: "Explain the animation principle of 'Timing.' How is speed controlled in animation?",
        choices: [
          "Speed is controlled by the size of the character — larger characters should move more slowly",
          "Speed is controlled by frame count — more frames produce slower motion, fewer frames produce faster motion",
          "Speed is controlled by the frame rate of the camera capturing the action",
          "Speed is controlled by the music tempo synced to the animation"
        ],
        answer: 1,
        explain: "Timing is controlled entirely by frame count. More frames = slower motion. Fewer frames = faster motion. Timing controls the rhythm, pace, and perceived weight of the animation."
      },

      // --- TYPES OF ANIMATION ---
      {
        type: "mc",
        q: "Explain stop motion animation. How does it create the illusion of motion?",
        choices: [
          "A live-action film is traced frame by frame to create animation",
          "A physical subject is photographed, moved slightly, photographed again — and when the still frames are viewed in sequence, they create the illusion of motion",
          "A computer generates movement procedurally through repeated code commands",
          "Flat materials cut from paper or magazines are arranged and filmed"
        ],
        answer: 1,
        explain: "Stop motion: shoot, move, shoot. The sequence of still frames creates the illusion of motion. Works with clay, puppets, objects — anything physical. Examples: The Quay Brothers, Jan Švankmajer."
      },
      {
        type: "mc",
        q: "Explain rotoscoping. What is the technique and where did it originate?",
        choices: [
          "Rotoscoping is a 3D technique where models are built from geometric vertices and given control points",
          "Rotoscoping is the process of writing code to procedurally generate on-screen movement",
          "Rotoscoping is the tracing of images from a film one frame at a time — originally done by projecting film onto frosted glass and tracing, patented by Max Fleischer in 1917",
          "Rotoscoping is a type of stop motion where flat cutout materials are moved frame by frame"
        ],
        answer: 2,
        explain: "Rotoscoping is tracing live footage frame by frame. Max Fleischer patented it in 1917, originally projecting film onto frosted glass for animators to trace. Modern examples: Waking Life, Undone."
      },
      {
        type: "mc",
        q: "Explain 3D animation (CGI). What makes it distinct from other animation types?",
        choices: [
          "It traces live footage for realism, using a digital rotoscope instead of a physical one",
          "It moves flat cutout materials frame by frame using computer-controlled rigs",
          "It takes place in a virtual 3D environment — models are built from geometric vertices, rigged with control points, lit, textured, and rendered with a virtual camera on x, y, and z axes",
          "It uses code to execute repeated commands that control placement and movement without drawing any frames"
        ],
        answer: 2,
        explain: "3D animation uses virtual 3D environments with x/y/z axes. Models are built from geometric vertices, rigged like marionettes (Woody in Toy Story had ~700 control points), and rendered with lighting and textures."
      },
      {
        type: "mc",
        q: "Explain algorithmic animation. What makes it distinct?",
        choices: [
          "It is animation made by tracing live footage one frame at a time",
          "It uses the procedural affordances of a computer — code executes many repeated commands controlling placement, line, shape, and vector to generate movement, rather than drawing each frame by hand",
          "It is a type of stop motion using clay or puppet figures",
          "It is 3D animation rendered in real time using a game engine"
        ],
        answer: 1,
        explain: "Algorithmic animation is code-driven — the animator writes rules and the computer generates visual movement procedurally. The key distinction: the animator programs behavior rather than drawing individual frames."
      },
      {
        type: "mc",
        q: "Explain cutout animation. What is it and how does it relate to stop motion?",
        choices: [
          "Cutout animation is a type of 3D animation using geometric meshes cut into flat shapes",
          "Cutout animation is a form of rotoscoping where the traced frames are cut out and layered",
          "Cutout animation is a type of stop motion animation using flat materials cut from different sources — paper, magazines, photography, or fabric — moved frame by frame",
          "Cutout animation is any animation that cuts between different visual styles within the same film"
        ],
        answer: 2,
        explain: "Cutout is stop-motion with flat materials — 'photomontage in motion.' Stan VanDerBeek called his approach 'Cut and Paste Cinema.' Terry Gilliam's Monty Python animations are the most widely recognized example."
      },
      {
        type: "tf",
        q: "Cutout animation is a form of stop motion animation — the two techniques are not separate categories but related.",
        answer: true,
        explain: "True. Cutout animation IS a type of stop motion. Stop motion is the broader category (shoot, move, shoot). Cutout is a specific variation that uses flat materials as the subject."
      },
      {
        type: "mc",
        q: "Which type of animation uses 'the procedural and spatial affordances of a computer to execute many repeated commands' rather than hand-drawing frames?",
        choices: ["Stop motion", "Rotoscoping", "3D animation (CGI)", "Algorithmic animation"],
        answer: 3,
        explain: "Algorithmic animation uses code to execute many repeated commands controlling design elements — generating movement procedurally. The animator writes the rules; the computer executes them."
      },
      {
        type: "tf",
        q: "Marey's sequential motion studies, Blackton's early films, and McCay's Gertie the Dinosaur all contributed to establishing animation as a distinct art form capable of conveying personality and emotion.",
        answer: true,
        explain: "True. Marey established the scientific basis for the illusion of motion; Blackton pioneered film animation in silent cinema; McCay demonstrated that animated characters could have distinct personalities and emotional responses."
      }
    ]
  },

  uxui: {
    title: "UX / UI",
    color: "#c1432f",
    questions: [

      // --- DEFINE USER EXPERIENCE ---
      {
        type: "mc",
        q: "How do Jakob Nielsen and Don Norman define 'user experience'?",
        choices: [
          "The visual design and color palette of a digital product",
          "The technical performance and loading speed of a website",
          "All aspects of the end-user's interaction with the company, its services, and its products",
          "The process a designer follows when building an interface"
        ],
        answer: 2,
        explain: "Nielsen and Norman (2014): UX encompasses 'all aspects of the end-user's interaction with the company, its services, and its products' — including how it feels to hold, use, and look at a product, down to sensual details like the click of a button."
      },
      {
        type: "mc",
        q: "Marc Hassenzahl's UX model (2010) divides user experience into Pragmatic and Hedonic dimensions. Which correctly defines both?",
        choices: [
          "Pragmatic = how beautiful the design is; Hedonic = how fast it loads",
          "Pragmatic = how simple and practical it is for users to achieve their goals; Hedonic = how evocative and stimulating the interaction is",
          "Pragmatic = the technical architecture; Hedonic = the visual style",
          "Pragmatic = the onboarding experience; Hedonic = the long-term loyalty it builds"
        ],
        answer: 1,
        explain: "Hassenzahl (2010): Pragmatic = how simple, practical, and obvious it is for the user to achieve their goals. Hedonic = how evocative and stimulating the interaction is. Both dimensions make up the full UX."
      },

      // --- SCANNING GUIDELINES ---
      {
        type: "mc",
        q: "Steve Krug's most important finding about how people use websites is that:",
        choices: [
          "Users read every word carefully before making a decision",
          "Users prefer pages with lots of varied content and options",
          "Users scan websites rather than read them — designers must format content to support scanning",
          "Users always follow the navigation path the designer intended"
        ],
        answer: 2,
        explain: "Krug's central finding (Don't Make Me Think): people scan, they don't read. Designers must accommodate this with frequent headings, short paragraphs, lists, and highlighted key terms."
      },
      {
        type: "mc",
        q: "Based on how people scan websites, which of the following is a guideline designers should follow?",
        choices: [
          "Use long paragraphs to convey thoroughness",
          "Hide navigation to keep the interface clean",
          "Format content with frequent meaningful headings, short paragraphs, lists, and highlighted key terms",
          "Present all available options upfront so users have full choice"
        ],
        answer: 2,
        explain: "Krug's six guidelines for scanning: format content to support scanning (headings, short paragraphs, lists, highlighted terms), take advantage of conventions, create visual hierarchies, break pages into clear areas, make clickable things obvious, eliminate distractions."
      },
      {
        type: "tf",
        q: "According to design conventions, a website's logo should conventionally be placed top-left, primary navigation across the top or left side, and the search bar in the upper right.",
        answer: true,
        explain: "True. These location conventions are so widely established that users expect them from prior experience — exactly what Jakob's Law predicts. Violating these conventions creates friction and task abandonment."
      },

      // --- JAKOB'S LAW ---
      {
        type: "mc",
        q: "Jakob's Law states that users prefer your website to work like sites they already know. What does this mean for how designers should respond?",
        choices: [
          "Designers should always innovate with novel conventions to stand out",
          "Designers should leverage common patterns and conventions — especially for structure, navigation, and expected elements like search — to lower cognitive load",
          "Designers should copy competitors' websites exactly",
          "Designers should test every layout with users before committing to any convention"
        ],
        answer: 1,
        explain: "Jakob's Law means: leverage common patterns and conventions. This lowers cognitive load — mental energy is freed for the user's actual goals. Uncommon conventions lead to frustration, confusion, and task abandonment."
      },
      {
        type: "mc",
        q: "How can designers lower cognitive load according to UX principles?",
        choices: [
          "By adding more visual variety and unexpected elements to keep users engaged",
          "By increasing the amount of content on each page so users find everything in one place",
          "By matching the user's mental model — what users expect based on prior experience — through user interviews, personas, journey maps, and consistent language",
          "By removing all text and relying entirely on icons and imagery"
        ],
        answer: 2,
        explain: "Cognitive load is lowered by matching users' mental models. Methods include user interviews, personas, journey maps, and empathy maps. Consistent, expected language matters — avoid quirky terms for standard functions."
      },

      // --- HICK'S LAW ---
      {
        type: "mc",
        q: "Hick's Law states that the time to make a decision increases with the number and complexity of choices. What does this mean for designers?",
        choices: [
          "Designers should always maximize the number of options to make users feel empowered",
          "Designers should minimize choices when response time is critical, break complex tasks into steps, highlight recommended options, and provide choices at the right time",
          "Designers should remove all choices and make decisions for the user automatically",
          "Designers should group all choices in a single dropdown to save space"
        ],
        answer: 1,
        explain: "Hick's Law: minimize choices when speed matters, break complex tasks into smaller steps, highlight recommended options, and provide choices at the right time rather than all at once."
      },
      {
        type: "mc",
        q: "What methods support effective visual hierarchies in web design?",
        choices: [
          "Making every element the same size so nothing dominates",
          "Using the most vibrant color for the least important elements to balance the design",
          "Making more important things more prominent — larger, bolder, more white space — and grouping logically related things visually in the same style and area",
          "Using only one font size throughout for visual consistency"
        ],
        answer: 2,
        explain: "Visual hierarchy (Krug): more important = more prominent (larger, bolder, distinctive color, more white space, nearer the top). Logically related things should be visually related — grouped, same style, clearly defined area, nested to show what belongs to what."
      },

      // --- AESTHETIC USABILITY EFFECT ---
      {
        type: "mc",
        q: "Describe the Aesthetic Usability Effect.",
        choices: [
          "More usable designs are always more aesthetically pleasing as a result of good design process",
          "Users often perceive aesthetically pleasing designs as more usable — and are more tolerant of minor usability issues when a design looks good",
          "Aesthetic improvements always come at the cost of usability and function",
          "Users consistently prefer functional products over beautiful ones in every context"
        ],
        answer: 1,
        explain: "The Aesthetic Usability Effect: beautiful designs are perceived as more usable, and users forgive minor usability issues when the product is aesthetically pleasing — even if that perception doesn't match actual usability."
      },

      // --- VISIBILITY OF SYSTEM STATUS ---
      {
        type: "mc",
        q: "Describe 'Visibility of System Status' as a UX design heuristic.",
        choices: [
          "The website's server status should always be visible to users in the footer",
          "Every page should display how many other users are currently online",
          "Designs should always keep users informed about what is going on through appropriate feedback within a reasonable amount of time — building trust and helping users determine next steps",
          "Every page should display the site's performance metrics and technical specifications"
        ],
        answer: 2,
        explain: "Visibility of System Status (Nielsen's 10 Usability Heuristics): the design should keep users informed through appropriate feedback within a reasonable time. When users know the system status, they learn from interactions and build trust in the product."
      },
      {
        type: "tf",
        q: "A determinate loading indicator shows specific progress (like 47%) while an indeterminate one only shows that something is happening (like a spinning circle).",
        answer: true,
        explain: "True — and the professor said to focus on these first two types for the exam. Determinate = specific progress. Indeterminate = signals activity is occurring, but no specific timeframe."
      },

      // --- DESIGN STYLES ---
      {
        type: "mc",
        q: "Explain flat design. What is it and what does it reject?",
        choices: [
          "A design style that imitates real-world physical objects using 3D textures and shadows",
          "A design style that depicts UI elements as photorealistic representations of physical reality",
          "A design movement that rejects 3D, skeuomorphic, and realistic styles — avoiding highlights, shadows, gradients, and textures that make elements look dimensional",
          "A design approach that uses dramatic typography and negative space as its only visual tools"
        ],
        answer: 2,
        explain: "Flat design is a movement against 3D, skeuomorphic, and realistic styles. Flat interfaces avoid highlights, shadows, gradients, and textures. A critique: if not done well, it can create click uncertainty — users can't tell what's clickable."
      },
      {
        type: "mc",
        q: "Explain minimalist web design. What does it prioritize and what are its defining characteristics?",
        choices: [
          "Using only black and white with no color anywhere in the design",
          "Getting the interface out of the way — using flat design, limited color, few UI elements, negative space, and dramatic typography so users can achieve their goals without friction",
          "Removing all navigation so users scroll through a single long page",
          "Applying Swiss Modernism typography to all digital products"
        ],
        answer: 1,
        explain: "Minimalist web design = getting the interface out of the way. Characteristics: flat design, limited color schemes, few UI elements, use of negative space, dramatic typography. Rooted in Mies van der Rohe's 'Less is more.'"
      },
      {
        type: "tf",
        q: "Flat design and minimalist design describe the same thing — a website that is flat is automatically minimalist.",
        answer: false,
        explain: "False. Flat design refers specifically to textures, icons, and graphics. Minimalist design applies to the broader content, feature, and layout strategy. A website can be flat without being minimalist."
      },
      {
        type: "mc",
        q: "Explain realism as a UI design style. How does it differ from skeuomorphic design?",
        choices: [
          "Realism and skeuomorphism are identical — they both avoid 3D effects entirely",
          "Realism depicts UI elements as photorealistic representations of physical reality using detailed textures, lighting, and materials — going further than skeuomorphism, which imitates real-world objects but doesn't aim for photographic accuracy",
          "Realism uses flat, minimal graphics with no reference to physical objects",
          "Realism relies on code-generated procedural visuals rather than hand-crafted textures"
        ],
        answer: 1,
        explain: "Realism attempts actual photographic realism (a calendar that looks like a photograph of a leather-bound planner). Skeuomorphism imitates real-world counterparts visually and behaviorally but doesn't necessarily achieve photographic realism."
      },
      {
        type: "mc",
        q: "Explain skeuomorphic design. What is it and why was it used?",
        choices: [
          "A style that avoids all reference to the physical world in favor of pure geometry",
          "A style where digital interface elements imitate their real-world counterparts — visually and in behavior — to help users by leveraging their existing mental models",
          "A code-generated procedural design style",
          "A typography-driven minimalist approach that strips all ornamentation"
        ],
        answer: 1,
        explain: "Skeuomorphism makes digital elements look and behave like physical objects — the iOS Notes app looked like a legal pad; iBooks shelves like wooden bookcases. It helps users by leveraging existing mental models. iOS 7 (2013) marked the shift away from it toward flat design."
      }
    ]
  },

  affordances: {
    title: "Affordances of Digital Media",
    color: "#c1432f",
    questions: [

      // --- MURRAY'S FOUR AFFORDANCES ---
      {
        type: "mc",
        q: "What are the four affordances of the digital medium according to Janet Murray?",
        choices: [
          "Visual, Audio, Spatial, Temporal",
          "Encyclopedic, Spatial, Procedural, Participatory",
          "Numerical, Modular, Automated, Variable",
          "Interactive, Immersive, Networked, Programmable"
        ],
        answer: 1,
        explain: "Murray's four affordances: Encyclopedic (unequalled storage), Spatial (navigation + GUI), Procedural (computer processes/algorithms), Participatory (human interaction)."
      },
      {
        type: "mc",
        q: "Explain the Encyclopedic affordance of the digital medium with an example.",
        choices: [
          "The computer can create worlds users navigate — like GPS or AR overlays on physical space",
          "The computer can contain more information in more forms than any previous medium — like databases, archives, and encyclopedias. Listening Post by Hansen and Rubin draws on a vast pool of online conversation.",
          "The computer can execute sequences of mathematical calculations like a game engine or search algorithm",
          "The computer allows users to manipulate its objects — like social media, blogs, and recommendation systems"
        ],
        answer: 1,
        explain: "Encyclopedic = unequalled storage + infinite library. Examples: databases, archives, encyclopedias. Listening Post (Hansen and Rubin) visualizes and sonifies a vast pool of live online chatroom conversation."
      },
      {
        type: "mc",
        q: "Explain the Spatial affordance of the digital medium with an example.",
        choices: [
          "The computer stores more information than any previous medium — used in databases and archives",
          "The computer executes algorithmic sequences — used in game engines, search engines, and spreadsheets",
          "The computer creates worlds users can navigate and inhabit — like GPS, maps, and AR. Kinfolk uses AR to place monuments of Black and Brown icons at Columbus Circle.",
          "The computer allows human interaction and manipulation — like social media and recommendation systems"
        ],
        answer: 2,
        explain: "Spatial = navigating + GUI. Examples: maps, GPS, information spaces. Kinfolk (Idris Brewster and Glenn Cantave) uses AR — a spatial affordance — to render new monuments at Columbus Circle."
      },
      {
        type: "mc",
        q: "Explain the Procedural affordance of the digital medium with an example.",
        choices: [
          "The computer stores encyclopedic amounts of information — used in archives and databases",
          "The computer creates navigable spatial worlds — used in GPS and map applications",
          "The computer executes algorithms — precise sequences of mathematical calculations with no ambiguity, like a game engine or search algorithm. The Enron Simulator by Lavigne and Brain uses this.",
          "The computer allows humans to manipulate its objects — used in social media and blogs"
        ],
        answer: 2,
        explain: "Procedural = computer processes and executes algorithms. The term 'algorithm' comes from mathematician al-Khwarizmi. Examples: game engines, search engines, spreadsheets. The Good Life (Enron Simulator) recreates the experience of receiving 500,000 Enron emails procedurally."
      },
      {
        type: "mc",
        q: "Explain the Participatory affordance of the digital medium with an example.",
        choices: [
          "The computer stores and retrieves vast amounts of information",
          "The computer creates worlds users can navigate",
          "The computer executes mathematical algorithms automatically",
          "The computer allows users to interact with and manipulate its objects — like social media, blogs, recommendation systems, and input devices. Conversations with Bina48 by Stephanie Dinkins highlights this through AI dialogue."
        ],
        answer: 3,
        explain: "Participatory = human interaction and manipulation. Examples: social media, blogs, recommendation systems, input devices. Stephanie Dinkins's Conversations with Bina48 foregrounds the participatory affordance through dialogue with an AI robot."
      },

      // --- MANOVICH'S PRINCIPLES ---
      {
        type: "mc",
        q: "What are the five principles of new media according to Lev Manovich?",
        choices: [
          "Encyclopedic, Spatial, Procedural, Participatory, Interactive",
          "Numerical Representation, Modularity, Automation, Variability, Transcoding",
          "Visual, Audio, Spatial, Temporal, Numerical",
          "Open, Modular, Distributed, Variable, Networked"
        ],
        answer: 1,
        explain: "Manovich's five principles (The Language of New Media): Numerical Representation, Modularity, Automation, Variability, and Transcoding. Manovich asks: what is NEW about new media — how is it different from traditional media?"
      },
      {
        type: "mc",
        q: "Explain Manovich's principle of Numerical Representation with an example.",
        choices: [
          "New media must display data as charts and graphs",
          "All new media objects are made of digital code (0s and 1s) — they can be described mathematically and manipulated algorithmically. Andrew Demirjian's The Week in Review maps stock market data to music.",
          "All new media content must be measured in pixels",
          "Media producers must back their work with numerical data"
        ],
        answer: 1,
        explain: "Numerical Representation: all new media is digital code → media becomes programmable. Mappings can be made between text, sound, image, and film because all share the same binary foundation."
      },
      {
        type: "mc",
        q: "Explain Manovich's principle of Modularity with an example.",
        choices: [
          "New media must be experienced in a fixed linear sequence",
          "All new media is built in standardized 30 or 60-second modules",
          "New media objects consist of independent parts that can be modified without affecting the whole — like swapping 'cars' to 'trains' in an animation without redoing the rest of the code",
          "New media must be produced by teams rather than individual creators"
        ],
        answer: 2,
        explain: "Modularity = independent parts modifiable separately. In animation/code, the 'cars' element can be swapped for 'trains' without affecting the rest. In analog media, you'd have to redo the entire piece."
      },
      {
        type: "mc",
        q: "Explain Manovich's principle of Variability with an example.",
        choices: [
          "New media always looks the same to every user",
          "New media varies in quality depending on the device",
          "New media can exist in an unlimited number of versions or states — like a personalized Amazon homepage that is unique to each user",
          "New media must be updated regularly to remain relevant"
        ],
        answer: 2,
        explain: "Variability = unlimited states. Your Amazon homepage is unique to you; interactive installations change based on engagement; each person's path through Question Bridge will likely be different."
      },
      {
        type: "mc",
        q: "Explain Manovich's principle of Transcoding. What are the two layers of new media?",
        choices: [
          "A hardware layer and a software layer",
          "A cultural layer (human-readable meaning — images, sentences) and a computer layer (data structures — lists, records, arrays) that influence each other",
          "A creation layer and a distribution layer",
          "A visual layer and an audio layer"
        ],
        answer: 1,
        explain: "Transcoding: cultural layer (what humans understand — images of sunsets, text forming sentences) + computer layer (how the computer organizes it — lists, records, arrays). The two influence each other. Analog objects have only one level; new media has two."
      },

      // --- RESPONSIVE ENVIRONMENTS ---
      {
        type: "mc",
        q: "What are the characteristics of a responsive environment in media art?",
        choices: [
          "A website that adapts its layout to different screen sizes using CSS media queries",
          "Media artworks that rely on a symbiotic exchange between the physical world and media — participatory works that respond to users or physical events, often built with Arduino, sensors, and Raspberry Pi",
          "An exhibition space with adjustable climate and lighting",
          "Any digital artwork that can be experienced on a mobile device"
        ],
        answer: 1,
        explain: "Responsive environments are built on exchange between physical and digital worlds. They are participatory, symbiotic, organic — replicating human engagement with the world. Often built with Arduino, sensors (light, motion, pressure, GSR), and Raspberry Pi."
      },
      {
        type: "mc",
        q: "What are the characteristics of Rashin Fahandej's A Father's Lullaby as a responsive environment?",
        choices: [
          "It uses GPS to change its content based on the viewer's physical location",
          "It is a touch-activated installation of audio portraits — intimate interviews, songs, and lullabies — offering poetic meditations on love, trauma, and absence related to racial disparities in the criminal justice system",
          "It projects live video of the artist responding to audience questions in real time",
          "It uses machine learning to generate new music based on the viewer's biometric data"
        ],
        answer: 1,
        explain: "A Father's Lullaby: touch-activated audio portraits exploring the role of men in raising children and their absence due to racial disparities in the criminal justice system — using personal memories to interrogate the structural violence of mass incarceration."
      },
      {
        type: "mc",
        q: "What are the characteristics of Steve Lambert's Simmer Down Sprinter as a responsive environment?",
        choices: [
          "Viewers vote to speed up or slow down a projected sprinter",
          "It maps the user's Galvanic Skin Response (GSR) — a measure of emotional stress — to the speed of a virtual runner, rewarding the player for achieving focused relaxation",
          "Motion sensors make a digital runner mirror the viewer's physical movements",
          "It plays different music based on the number of people present in the room"
        ],
        answer: 1,
        explain: "Simmer Down Sprinter maps GSR (the same biometric used in lie detectors — changes in skin electrical resistance from emotional stress) to runner speed. The more relaxed the player, the faster the runner moves — rewarding focused relaxation."
      },
      {
        type: "mc",
        q: "What are the characteristics of Sougwen Chung's Omnia per Omnia as a responsive environment?",
        choices: [
          "A VR experience responding to the viewer's head movements",
          "A collaboration between Chung and a swarm of custom drawing robots (D.O.U.G._L.A.S.) that respond to the dynamic flow of a city — reimagining landscape painting as human-machine collaboration",
          "An audience-participation piece where viewers vote on colors the artist applies",
          "A work generating unique paintings from each viewer's biometric data"
        ],
        answer: 1,
        explain: "Omnia per Omnia: Sougwen Chung collaborates with D.O.U.G._L.A.S. (Drawing Operations Unit: Generation_3 Live Autonomous System) — a robotic swarm — exploring the poetics of human and machine sensing, organic and synthetic, improvisational and computational."
      },

      // --- PARALLEL TENDENCIES ---
      {
        type: "mc",
        q: "Explain the concept of parallel tendencies between the arts and computer science in the 1960s.",
        choices: [
          "Artists and computer scientists worked together in shared labs, directly collaborating on the same projects",
          "Art movements like Fluxus directly inspired the invention of specific programming languages",
          "Artists and computer scientists were independently articulating similar ideas at the same time — using manifestos and artworks as parallel forms, both arriving at notions of art as process, algorithm, participation, and chance",
          "Computer science replaced art as the dominant cultural force after WWII"
        ],
        answer: 2,
        explain: "Söke Dinkla: both domains were converging on the same ideas — art as temporal process (not object), active audience participation, algorithms (instruction sets), indeterminacy, and chance — independently and simultaneously."
      },
      {
        type: "mc",
        q: "How do Sol LeWitt's Wall Drawings illustrate the parallel tendencies between art and computer science?",
        choices: [
          "LeWitt used early computers to generate his wall drawings digitally",
          "His instruction-based works function as pseudocode — plain-language rule sets specifying all permutations, which could be directly translated into a computer program",
          "LeWitt collaborated directly with Bell Labs engineers on his compositions",
          "His color fields anticipated the pixel grid of digital displays"
        ],
        answer: 1,
        explain: "LeWitt's instruction sets (e.g., 'draw diagonal lines from corner to corner in each one-inch square') are essentially pseudocode — combinatorial algorithms. His practice of using permutations (combinatorial aesthetics) exactly parallels how a computer program iterates through possibilities."
      },
      {
        type: "tf",
        q: "Fluxus, founded by George Maciunas in 1960, was characterized as a shared attitude rather than a unified art movement — valuing DIY, chance, humor, and collaboration with no single agreed-upon style.",
        answer: true,
        explain: "True. Fluxus had no single unifying style — DIY, democratic, open to anyone. It valued simplicity, anti-commercialism, chance, accident, and humor. Key figures: Yoko Ono, Nam June Paik, Joseph Beuys, Dick Higgins."
      }
    ]
  },

  internet: {
    title: "Internet",
    color: "#c1432f",
    questions: [

      // --- KEY TERMS ---
      {
        type: "mc",
        q: "Describe HTTP. What is it and what makes it significant?",
        choices: [
          "A markup language for structuring web page content, created by Tim Berners-Lee",
          "A coding language for adding interactive behavior to websites",
          "The open protocol for serving web pages — the agreed-upon way computers communicate to deliver websites, created by Tim Berners-Lee at CERN and free for anyone to use",
          "A system for assigning unique addresses to web pages on the internet"
        ],
        answer: 2,
        explain: "HTTP (HyperText Transfer Protocol) is the open protocol for serving web pages. Created by Berners-Lee at CERN. Its openness — anyone can use it free — is what made the web universally accessible."
      },
      {
        type: "mc",
        q: "Describe CSS. What does it do?",
        choices: [
          "CSS is a protocol for transferring data between servers",
          "CSS controls the visual style of a website — colors, fonts, layout, and spacing",
          "CSS is a programming language for adding interactivity to web pages",
          "CSS is a database language for storing and retrieving web content"
        ],
        answer: 1,
        explain: "CSS (Cascading Style Sheets) controls the visual style of a website. CSS Zen Garden demonstrates this by showing the same HTML content styled in completely different ways."
      },
      {
        type: "mc",
        q: "Describe JavaScript and what a JavaScript 'library' is.",
        choices: [
          "JavaScript is a markup language; a library is a collection of HTML templates",
          "JavaScript is a web coding language; a library is a JS file you include in your page that lets you use its pre-built functions, objects, and methods to extend your site's capabilities",
          "JavaScript is a server-side database language; a library is a physical archive of code documentation",
          "JavaScript is a protocol for data transfer; a library is a collection of communication standards"
        ],
        answer: 1,
        explain: "JavaScript is a prominent web coding language. A library (like Three.js, A-Frame, Juxtapose) is 'a JavaScript file that you include in your page, which lets you use the functions, objects, methods, and properties it contains' (Jon Duckett)."
      },
      {
        type: "mc",
        q: "Describe a URL. What is it?",
        choices: [
          "A protocol for transferring web pages between servers",
          "The markup language that structures web page content",
          "The address of a web page — how you specify the location of a resource on the internet, created by Tim Berners-Lee at CERN",
          "A coding language for creating interactive web experiences"
        ],
        answer: 2,
        explain: "URL = Uniform Resource Locator — the web page address. Like HTML and HTTP, it was created by Tim Berners-Lee at CERN as part of the foundational architecture of the World Wide Web."
      },
      {
        type: "mc",
        q: "Describe ARPANET. What was it and why was it created?",
        choices: [
          "The first website published on the World Wide Web, created at CERN by Tim Berners-Lee",
          "The company that created HTML, HTTP, and the URL to make the web universally accessible",
          "The first nationwide interconnected computer network (1968), created so researchers at different universities working on DARPA projects could share their work",
          "The government agency that invented the smartphone and mobile internet"
        ],
        answer: 2,
        explain: "ARPANET (1968) was the first nationwide interconnected computer network. By Fall 1969 Stanford and UCLA were networked; by 1981 it had 200 connections. The first word sent was 'lo' — the system crashed trying to type 'login.'"
      },

      // --- LICKLIDER & RITCHIE ---
      {
        type: "mc",
        q: "Describe Joseph Licklider's contribution to the history of the Internet.",
        choices: [
          "He created HTML, HTTP, and the URL at CERN, making information universally accessible",
          "He invented packet switching and proposed the distributed network architecture at the Rand Corporation",
          "As DARPA's behavioral science director, he wrote 'Man-Computer Symbiosis' (1960) and conceived of an 'Intergalactic Computer Network' — a vision that directly inspired the team that built ARPANET",
          "He co-created Unix and the C programming language at Bell Labs, providing the OS foundation for the internet"
        ],
        answer: 2,
        explain: "Licklider was the visionary — he imagined the internet before it existed, articulating the concept of a global computer network with standardized communication between machines and recruiting the talent that built ARPANET."
      },
      {
        type: "mc",
        q: "Describe Dennis Ritchie's contribution to the history of the Internet.",
        choices: [
          "He created HTML, HTTP, and the URL at CERN",
          "He conceived of the Intergalactic Computer Network and directed DARPA",
          "He invented packet switching and the distributed network architecture",
          "He co-created Unix with Ken Thompson and created the C programming language at Bell Labs — providing a hardware-independent, freely distributed OS that shaped a generation of programmers and the internet's software foundation"
        ],
        answer: 3,
        explain: "Ritchie's Unix + C became the standard environment for networked computing. AT&T antitrust rules forced Bell Labs to give Unix away free, shaping a generation of programmers. All Apple computers and Android devices use a Unix-like system today."
      },
      {
        type: "tf",
        q: "Dennis Ritchie's Unix became widely available to universities because of an antitrust case against AT&T that prevented Bell Labs from commercializing it.",
        answer: true,
        explain: "True. AT&T couldn't enter the computer business, so Bell Labs distributed Unix freely to universities, government agencies, and companies — exactly when programming was taking off. This shaped the open, sharable software culture that enabled the internet's growth."
      },

      // --- NETWORK ARCHITECTURES ---
      {
        type: "mc",
        q: "Explain the differences between centralized, decentralized, and distributed networks.",
        choices: [
          "Centralized = digital; decentralized = analog; distributed = hybrid",
          "Centralized = one hub (failure takes down the whole network); decentralized = multiple regional hubs (failure takes down a region); distributed = every node connects to multiple others, so information routes around any failed node",
          "Centralized = fastest; decentralized = most secure; distributed = cheapest",
          "They describe different encryption methods used to secure network traffic"
        ],
        answer: 1,
        explain: "Centralized: one hub — fragile. Decentralized: multiple hubs like AT&T's switching centers — regional vulnerability. Distributed: every node connects to multiple others — redundant, survives node failures. The internet is built on the distributed model."
      },
      {
        type: "mc",
        q: "Why was a distributed network considered the solution for the early internet — and who proposed it?",
        choices: [
          "It was the cheapest architecture to build; proposed by Tim Berners-Lee at CERN",
          "It allowed a central authority to monitor all traffic; proposed by the NSA",
          "It provided redundancy — information routes around damaged nodes; proposed by Paul Baran at the Rand Corporation (hired by the Air Force), with Donald Davies independently arriving at the same conclusion and contributing packet switching",
          "It guaranteed the fastest data transfer speeds; proposed by Joseph Licklider at DARPA"
        ],
        answer: 2,
        explain: "Paul Baran proposed the distributed network at Rand — originally a Cold War solution to AT&T's centralized switching centers being vulnerable missile targets. It took him 5 years to convince peers. Donald Davies independently confirmed it and invented packet switching."
      },
      {
        type: "tf",
        q: "AT&T's centralized telephone switching network was considered a Cold War vulnerability because the switching centers were near major cities and could be destroyed by Soviet missiles, taking down entire regions of the network.",
        answer: true,
        explain: "True. This is why Paul Baran proposed the distributed model — information could route around destroyed nodes. The distributed architecture solved both the Cold War vulnerability problem and enabled the efficient internet we have today."
      },

      // --- BERNERS-LEE ---
      {
        type: "mc",
        q: "Explain Tim Berners-Lee's contributions to the Internet.",
        choices: [
          "He co-created Unix, wrote the C programming language, and distributed both freely through Bell Labs",
          "He conceived of the Intergalactic Computer Network and directed DARPA's behavioral science office",
          "Working at CERN, he created HTML, HTTP, and the URL — and CERN distributed the World Wide Web software for free, making the web universally accessible",
          "He proposed the distributed network architecture and invented packet switching at the Rand Corporation"
        ],
        answer: 2,
        explain: "Berners-Lee at CERN: HTML (so all computers could access the same information), HTTP (the transfer protocol), and the URL (the address system). CERN distributed the WWW software for free — a foundational act for the open web."
      },
      {
        type: "tf",
        q: "The World Wide Web and the Internet are the same thing.",
        answer: false,
        explain: "False. The Internet is the underlying network infrastructure. The World Wide Web is a system of documents and resources that sits on top of the internet — created by Berners-Lee at CERN using HTML, HTTP, and URLs."
      },

      // --- WEB 1.0 VS 2.0 ---
      {
        type: "mc",
        q: "What are the differences between Web 1.0 and Web 2.0?",
        choices: [
          "Web 1.0 used color graphics; Web 2.0 introduced video and animation",
          "Web 1.0 was built on open protocols owned by no one (HTTP, TCP/IP, SMTP) — mostly read-only; Web 2.0 shifted to centralized corporate platforms leveraging user-generated content — read and write",
          "Web 1.0 required a desktop computer; Web 2.0 was designed for mobile devices",
          "Web 1.0 used static images; Web 2.0 introduced interactive graphics"
        ],
        answer: 1,
        explain: "Web 1.0: open protocols (HTTP, TCP/IP, SMTP, POP) owned by no one — mostly read-only, users consumed. Web 2.0: centralized corporate platforms (Facebook, TikTok, Instagram, YouTube) — user-generated content, read/write. The shift: from open protocols to corporate-owned platforms."
      },
      {
        type: "tf",
        q: "Web 1.0 protocols like HTTP, TCP/IP, and SMTP were owned by no single company and were free for anyone to use.",
        answer: true,
        explain: "True. Web 1.0 ran on open protocols defined and maintained by academic researchers and international standards bodies. No one owned them — you didn't pay a licensing fee to use HTTP or sell your identity to send an SMTP email."
      },

      // --- GOOGLE BUSINESS MODEL ---
      {
        type: "mc",
        q: "What is the Google business model?",
        choices: [
          "Selling premium subscriptions to users for an ad-free search experience",
          "Licensing its search algorithm to enterprise clients and government agencies",
          "Extracting as much personal data from as many people as possible at the lowest price, and reselling that data to companies at the highest price — what Shoshana Zuboff calls 'surveillance capitalism'",
          "Generating revenue by charging websites a fee to appear in search results"
        ],
        answer: 2,
        explain: "Taplin (Move Fast and Break Things): extract personal data cheaply, resell it expensively. Zuboff: surveillance capitalism — trading in human futures. Between 2000 and 2004, this model generated a 3,590% revenue increase — the 'surveillance dividend' that reset expectations for investors across the economy."
      },
      {
        type: "mc",
        q: "Shoshana Zuboff argues that the Google business model created 'surveillance capitalism.' What does this mean?",
        choices: [
          "Google sells surveillance hardware to governments and corporations worldwide",
          "Google charges users for premium privacy features that protect their data",
          "Human experience itself becomes a free raw material — personal data is extracted to predict and influence behavior, generating revenue through targeted advertising, spreading from Google to Facebook and ultimately throughout the broader economy",
          "Google monitors internet traffic on behalf of national security agencies"
        ],
        answer: 2,
        explain: "Zuboff: surveillance capitalism claims human experience as raw material. Google created the first markets to trade in human futures — predictions of which ads users would click. This spread from tech to insurance, retail, healthcare, and every product called 'smart' or 'personalized.'"
      }
    ]
  }

};