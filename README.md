# Personal website

*showcase both your technical skills and your ability to design functional, attractive websites.*
Internet is permanent. The thing you post or send to someone will always exist forever. So, be mindful of it and use it as a weapon to upgrade and create your personal desired brand.

# What I want
70% work/tech background. 30% personal life

1. Technical background - Very much like a resume

Keep it clean and high-utility.

- **The Interactive Resume:** Instead of a static PDF, use a clean list with expandable sections.
- **Skill Tags:** Use "pill" designs for languages or tools (e.g., Python, Figma, AWS) so they are skimmable.
- **The "Case Study" Approach:** For your best work, don't just list the role. List: **The Challenge → Your Action → The Result.**

Off the Clock:

- Personal story: the about evolution.

**Design Tip:** Use a "Timeline" layout to show your growth, mixing professional milestones with personal ones.

- Philosophy

Use a "Card" layout. Each card has a short title (e.g., *"Draft Fast, Edit Ruthlessly"*) and a two-sentence explanation of why you believe it.

- Memories

Volunteering, hackathon, philosophy related.

- Hobbies

Rather than just a list, show the **artifact** of the hobby.


# Structure

1. **Home Page** - engaging introduction, who and what you do, what they can expect fromt he website - About me page basically 
2. **Tech side/ Portfolio** - Showcasing projects you’ve worked on. Include screenshots and brief case studies that explain the problem, your solution, and the technologies used.
3. **Off the clock**: 
- Personal story(about me evolution)
- philosophy, memories,
- hobbies
1. **Resources**
- **Downloads**: Provide useful resources such as guides, templates, or e-books.
- **Links**: Share links to websites, articles, or tools that you find valuable.
1. **Blog** - tech trends, project updates, and tutorials
2. **Contact page** - easy for recruiters and clients to contact


**Home Page:**
To build this **Editorial Architectural** design, you are moving away from standard web components and toward a "print-media" layout. This design relies on high-quality typography, intentional "negative space," and a muted, sophisticated color palette.

Here are the precise technical instructions to create:


## 1. The Architectural Color Palette

The goal is "warm professional." Avoid pure blacks or pure whites.

* **Primary Background:** `#F2F0E9` (Off-white / Architectural paper)
* **Primary Text:** `#1A1A1A` (Deep Charcoal, softer than black)
* **Accent Color (Teal):** `#0D7A70` (Muted Teal for headings and CTAs)
* **Placard 1 (Mint):** `#C5DED2`
* **Placard 2 (Sky):** `#B9D1DC`
* **Placard 3 (Oat):** `#EBD5B3`


## 2. Typography Strategy (The "Hybrid" Look)

The boldness comes from the contrast between a sharp **Sans-Serif** and a classic **Serif**.

* **Headings (H1):** Use **"Inter"** (Bold, 800 weight) or **"Neue Haas Grotesk"**. Set `letter-spacing: -0.04em` for that tight, editorial feel.
* **Bio Text:** Use a high-end Serif like **"Playfair Display"** or **"Source Serif 4"**.
* **Nav & Small Details:** Use a Monospace font like **"JetBrains Mono"** or **"Roboto Mono"** at 12px for technical data points.


## 3. Structural Layout Instructions

### **A. The Navigation Bar**

* **Style:** Fixed at the top.
* **Background:** `rgba(242, 240, 233, 0.8)` with a `backdrop-filter: blur(10px)`.
* **Border:** A subtle `1px solid rgba(0,0,0,0.1)` on the bottom.
* **CTA Button:** The "Hire Me" button should be a solid block of the **Teal Accent (#0D7A70)** with white text.

### **B. The Hero Section (Above the Fold)**

* **Photo:** Use a grayscale or "washed-out" professional portrait. Position it on the left, but allow it to "bleed" off the edge of the container for a modern look.
* **Heading Placement:** The H1 should overlap the space between the photo and the background. Should be my name and Bio should be - Building digital experiences with a balance of technical precision and creative soul. 


1. The Three-Act Hero

Act I: The Greeting (Personal)
Text: Hi! I’m Subriti Pradhan.
Style: Small, elegant Serif Italic (e.g., Source Serif Pro).
Logic: It sits at the top left, acting as the human entry point before the professional weight hits.

Act II: The Manifesto (Formal)
Text: BUILDING DIGITAL EXPERIENCES WITH A BALANCE OF TECHNICAL PRECISION AND CREATIVE SOUL.
Style: Ultra-bold, oversized Sans-Serif (e.g., Inter Bold).
Logic: This is your "Statement of Intent." The sheer scale makes it impossible to ignore.

Act III: The Invitation (Direct Conversation)
Text: Welcome to my digital garden. I invite you to explore my portfolio, leverage my resources, and follow the trajectory of my journey.
Style: Clean, readable Monospace (e.g., JetBrains Mono).

Logic: It talks directly to the viewer, turning the manifesto into an interactive reality.


### **C. The Scrollable Placards**

Instead of small cards, build these as **Large Vertical Rectangles** that appear as you scroll.

As the user scrolls, the Hero fades slightly, and the Oversized Placards rise from the bottom of the screen.
The Design: Each placard (The Architect, The Core, The Inventory) is a massive, solid-colored block with a large "Watermark Number" (01, 02, 03).
The Logic: Instead of tiny boxes, these feel like floors of a building. They give the user "room" to read your professional philosophy.

Implementation Checklist for Gemini Pro 3:
Typography Contrast: Ensure the H1 (Act II) is at least 5x the size of the greeting (Act I).
Staggered Margins: Use a "hanging indent" style. Start the Greeting at 5vw, the Statement at 10vw, and the Invitation back at 5vw.
The "Teal" Pop: Use your #0D7A70 Teal sparingly—only for the "Hire Me" button in the nav and the word "Garden" in the invitation.



## 4. Visual "Me" Qualities

To ensure it doesn't feel corporate:

* **Texture:** Apply a very faint **Noise/Grain overlay** (roughly 3% opacity) over the entire site. This makes the background look like real paper rather than a digital screen.
* **Motion:** Use a "Staggered Reveal." When the page loads, the photo should fade in first, followed by the text, then the navigation.
