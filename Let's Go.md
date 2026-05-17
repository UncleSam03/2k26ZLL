You are an expert frontend developer specializing in immersive React web experiences, Tailwind CSS, and Framer Motion. Your task is to build the main body and conclusion of a highly unique, interactive girlfriend proposal website for Zinhle Mndzebele. 

This phase begins immediately after the user clicks the "Let's Go" button from the initial introduction.

### 🛠️ Core Assets & Essential Background Patching
* **Image Naming Scheme:** You have 14 explicit character assets available, named exactly `1.png`, `2.png`, `3.png` ... up to `14.png`. They correspond directly to speech bubbles 1 through 14.
* **CRITICAL - Background Seamlessness:** The provided images (`1.png` through `14.png`) feature the character on a light, uniform off-white background. You MUST ensure a seamless visual blend. Either programmatically strip the image backgrounds using CSS blending/masking, or perfectly match the canvas background color of the entire website sections to the exact hex code of the image backgrounds. There must be NO visible rectangular borders or box outlines around the character during scroll movements or transitions.

---

### 📑 Phase 1: The Scroll-Story (One Continuous Page)
Render a fluid, scroll-monitored journey. As the user scrolls down, individual speech bubbles fade and slide into view. The character image updates dynamically alongside the active text using Framer Motion viewports (`whileInView`). Alternating layouts (e.g., Text Left/Image Right, then flipping to Text Right/Image Left) must be used to keep the scrolling dynamic.

Implement the following text blocks and explicit image pairings:

1. **Image:** `1.png` (Relaxed intro posture)
   **Text:** "Hi. I am Samukeliso Mayabane but over the years I've accumulated a lot of names and personas, mostly I identify as nerd which I am and honestly love however that's not the case according to the public opinion, I behave like a gangster they say which I see why I am misconceptualised like that, I prefer the term hustleprenuer it sounds more socially acceptable."

2. **Image:** `2.png` (Proud, crossed arms)
   **Text:** "Just a brief history about myself I started hustling at grade 3, never stopped since."

3. **Image:** `3.png` (Thoughtful, upward gaze)
   **Text:** "I gave up on the formal education system at age 17, I had gotten into finance, economics, world history and geopolitics ,it changed my perspective and I saw that the person I want to be cannot be accommodated by the current education system so I aligned myself as a capitalist and planned to start my first company by 21 and by the grace of God I did however it hasn't been going as planned to be honest there's still so much to learn on the field, I'm not in a hurry so I will be learning as much as a can and I will be practicing as I learn, can't shake the feeling that I am close to a win I just need to keep calm and continue this scary walk in the pitch black tunnel I am in. The company's name is Al VANGUARD, Vanguard is Latin for leading the way or frontlining, I am planning to change it at some point to Vanguard Technologies."

4. **Image:** `4.png` (Passionate, open-hand gesturing)
   **Text:** "About 2 years ago I had a feeling maybe a calling to liberate the African youth, to start a mission to decolonise the brain of the youth spent a year trying to figure out how till it dawned on me that we grow up with the illusion that doing school and finishing will liberate one not being told the other side that it takes more than that, it needs interpersonal skills, a clear plan and a lot of intrinsic motivation, discipline and determination, finally a whole lot of adaptability so I started SkillsBridge Africa as an initiative to empower the youth with these skills."

5. **Image:** `5.png` (Humble neck-rub stance)
   **Text:** "So now I have 2 companies to grow simultaneously honestly it excites me 10% of the time the rest of the time I am just worried if I am equipped to handle this responsibility. I have a past, not a particularly clean one, I've spent most my late teenage hood and early adulthood living in the grey I will explain that in person it's a long story, at the moment all you have to know is that I have made a lot of mistakes some unavoidable as they were part of the learning process most were avoidable just allowed myself under the influence of being young. The important thing is that I have learnt and grown from them."

6. **Image:** `6.png` (Sincere regret, hand over heart)
   **Text:** "One mistake I regret from this year is my inability to take the opportunity to express clearly how I feel about you when the chance was handed to me. Well dwelling on that isn't helping me at all, I had to spend a deal of time alone figuring out what happened I used to be good at reading people."

7. **Image:** `7.png` (Casual conversational shrug)
   **Text:** "Anyways that's just a snapshot of me I will answer any questions if you any."

8. **Image:** `8.png` (Deep romantic admiration gaze)
   **Text:** "There's no word that fits you more than the one your IG handle, it is a true embodiment of who you are, the Old French took it from Latin originally dux which translates to leader or sometimes military commander, the English then took it from old French referring to a noble woman which also accurately describes you, so Dutchess is a very powerful name which was the first thing that drew my interest."

9. **Image:** `9.png` (Starstruck, blushing smitten pose)
   **Text:** "I knew that I wanted to be with you from the first conversation we had the first day we met however I tackled myself because I doubted myself if I'd be able to fit in the role, it was the way you articulated yourself with a smile that both excited and crippled me, I had never met a person as driven, focused and beautiful all coupled in a woman Cleopatra would be jealous of."

10. **Image:** `10.png` (Grateful, relieved hand posture)
    **Text:** "A sense of humour that relaxes and a voice that calms it was nothing short of breathtaking yet again crippling. After my big fumble and a whole lot of sense being spoken by you I had to reset and I still appreciate that you didn't permanently shut the door."

11. **Image:** `11.png` (Intense, stepping-forward declaration)
    **Text:** "It took me a minute to understand what I had to do to be able to show you that I am not planning on being just casual with you but to show you that I want to build with you, I want you by my side and me by your side as we journey this life thing, I hope I got it right this time. It is certainty, assurance that I am not all fun and games who is here for a good time not a long time and I do understand that you are not at the same place as you where when we began talking so I will dedicate my time to showing you that I don't care that they may be better packages out there (your words not mine) because that's not what is driving me to spend this much time writing and coding, what's driving me is something I cannot logically explain leaving me to conclude with absolute certainty that for the first time in a long time I am, hopelessly and stupidly in love with you"

12. **Image:** `12.png` (Earnest smile, cupping a glowing heart)
    **Text:** "and with each passing day knowing that you aren't with me hurts more I really wish I can finish this coding project quicker so I can give you this message just that the perfectionist in me won't give you anything mediocre I want to give you the best I can because you deserve nothing less. AA I know I could have done this Zulu love letter style but that ain't me I wanted to do it this way because I am passionate about my craft and I wanted to use it to express how I feel to someone whom I share a greater sentiment towards."

13. **Image:** `13.png` (Hopeful, reaching out expectantly)
    **Text:** "In a nutshell, this me officially asking you to be my girlfriend and letting you know that I will spend every waking day of my life showing you how special you are to me, how you important you are to me and make it my mission to enable myself to be in a position where I am able to give you the best life possible one filled with joy, peace and happiness. I really hope you say yes."

---

### 📑 Phase 2: The Side Note Page (Dedicated Screen)
Once the user scrolls past speech bubble 13, completely break away from the continuous scroll layout and trigger a clean, full-page transition to a dedicated **Side Note Screen**.

* **Image:** `14.png` (Enthusiastic double thumbs-up / supportive hype-man pose)
* **Text Content (Styled beautifully as a standout dynamic card):**
  "Side note the reason why I bought the domain is that I genuinely believe in you not just as hustler but a powerhouse of a businesswoman so regardless of what you say we will transform this domain into a website that will be your step 0 into you building your business whatever you choose it to be, I will build it and help you direct traffic to it and making sure that it converts."
* **Navigation:** Include a prominent, elegantly animated button at the bottom labeled **"Read Final Message"** to transition to the final phase.

---

### 📑 Phase 3: The Final Decision Page
This is the grand finale page. It must be clean, spacious, and highly impactful.

* **Text Content:**
  "Looking forward to your response \n\n Kind regards, \n A dumb idiot that loves you"
* **Character Placement:** Re-use a highly expressive asset (like the joyful/blushing `9.png` or `14.png`) scaled beautifully alongside the text.
* **The Call to Action (The Choice):** Display two polished, high-contrast, pulsing interactive buttons placed side-by-side:
  1. Button One: **"YES!"**
  2. Button Two: **"ABSOLUTELY YES!"**
* **Click Celebration:** Clicking *either* button triggers a screen-wide, high-density cascade of heart and star particle animations (using an installed canvas-confetti tool), followed by a warm fade-in message: *"Best choice ever. ❤️ See you soon, Dutchess."*

### 💻 Technical Constraints
1. Fully responsive flex/grid layouts optimized for mobile devices.
2. Safe, dynamic image rendering that allows simple configuration changes later.
3. Fluid state machine management transitions (Scroll Section -> Side Note Page -> Decision Page).