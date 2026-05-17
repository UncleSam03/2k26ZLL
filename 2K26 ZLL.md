You are an expert frontend developer specializing in interactive user experiences and React animations. Your task is to build the first three pages of a unique, humorous girlfriend proposal website for the user's partner, Zinhle Mndzebele.

### 🛠️ Tech Stack & Dependencies
* Use React (Vite) as the framework.
* Use Tailwind CSS for rapid styling.
* Use Framer Motion for high-quality, smooth state transitions and animations.
* Before writing code, ensure you download/install all required dependencies (e.g., `framer-motion`).

### 🎨 Character Assets & Expression Map
The user has provided three specific character assets. It is CRITICAL that you map these correctly and handle their integration.

* **Mapping:**
    * **Image Name:** "Fides Waiving" (`image_1.png`): Character is waving, smiling.
    * **Image Name:** "Page 2 Image 1" (`image_2.png`): Character has an overconfident smirk, hands in pockets.
    * **Image Name:** "Let's Go" (`image_7.png`): Character is pointing.
* **Background Handling:** The provided character images (e.g., `image_1.png`) are on a light off-white background. You MUST programmatically remove this background (or design the website with an identical background color) so the character integrates seamlessly with the clean website design and animations, as explicitly requested by the user.

### 🎨 Design & Aesthetic
* Modern, playful, and charming.
* Use a warm, pleasing color palette (e.g., soft cream, deep red/blush pink accents). The typography should be friendly.

---

### 📑 Project Requirements & Flow (First 3 Pages)

#### Step 1: The Landing Page (The Envelope)
* **Content:** A closed, stylized digital letter or envelope central on the screen. It is addressed to "**Zinhle Mndzebele**".
* **Interactivity:** The envelope must look clickable (hover effects, perhaps a pulsing glow).
* **Animation:** When clicked, trigger a complex, "cool unfolding animation" (using Framer Motion). The envelope should physically open, and a stylized letter should slide out or expand. The screen must transition smoothly into the next page content, rather than a hard reload.

#### Step 2: Page 1 (The Wave/Setup)
* **Character Image:** Display the character asset "**Fides Waiving**" (`image_1.png`) with the background integrated seamlessly. Position the character naturally, perhaps central-left.
* **Speech Bubble:** Position a comic-style speech bubble near the character's head with the following text:
    > "Hi Dutchess. The first time I tried this you said I was scripted"
* **Navigation:** At the bottom right or center, place a sleek, animated "**Next Page**" button that transitions smoothly to the next section.

#### Step 3: Page 2 (The Punchline & Compliment)
* **Character Image:** The character transitions from the waving pose to the "**Page 2 Image 1**" asset (the overconfident smirk/hands in pockets pose, `image_2.png`). Ensure background matching.
* **Speech Bubble 1 (Main):** A main speech bubble saying:
    > "....well this time type I certainly am"
* **Speech Bubble 2 (Compliment):** A second, smaller, playful speech bubble near the character or the button saying:
    > "You look great BTW"
* **Interaction:** This page serves as the setup for the final point, but we need the "Pointing" asset to lead to the actual choice. So, this page ends with a "Next Page" or "Go" button, or an automatic timer transition to Page 3. (User preference is unclear on transition type, make it a button labelled "Next").

#### Step 4: Page 3 (The Point & CTA)
* **Character Image:** The character transitions to the "**Let's Go**" asset (the pointing pose, `image_7.png`). Ensure background matching.
* **Pointing Reconciliation:** Position the character and the pointing hand so it directs attention specifically toward the main action button.
* **Speech Bubble:** Use a subtle speech bubble cue, or keep the focus on the button itself.
* **Call to Action Button:** A prominent, highly interactive button labeled "**Let's Go**". The character points *at* this button. This button currently leads to nowhere (the 'Actual Letter' phase is in the future). When clicked, it should trigger a simple confetti burst (if possible) or console log success.

---

### 💻 Implementation Instructions
1. Automatically initialize the project and install the necessary npm packages (`framer-motion`).
2. Ensure the state management smoothly handles transitioning between the Envelope -> Page 1 -> Page 2 -> Page 3, updating the character images, speech bubbles, and buttons with pleasant fade-in/fade-out or motion effects.
3. Keep the layout fully responsive so it looks perfect on both mobile and desktop screens.
4. Use Tailwind CSS for a modern look. Ensure the character background matches the container background.
5. Deliver clean, modular, and well-commented code.