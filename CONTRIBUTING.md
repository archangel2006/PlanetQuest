# Contributor Task Document

---

## 1. Project Overview

### Description
PlanetQuest is a visually engaging web platform designed to promote sustainability awareness through interactive quizzes, fact cards, and educational resources in a calm, aesthetic UI.

### Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** None (Static Project)
- **Database:** None
- **Other Tools:** Netlify (deployment)

### Current Features
PlanetQuest currently supports:
- Interactive quiz popup with scoring system
- Static resource cards for sustainability topics
- Smooth UI navigation across pages
- Aesthetic, calming UI design
- Basic page routing using JavaScript

### Target Users
This project is built for students and casual users who want to explore sustainability topics in a simple, engaging, and visually pleasing way.

---

## 2. Architecture / Key Modules

### Module Overview

| Module/Component | Location | Purpose |
|------------------|----------|---------|
| **Main UI Pages** | `/` | Core pages like home and resources |
| **Quiz Logic** | `/script.js` | Handles quiz popup, answer selection, and scoring |
| **Styling** | `/style.css` | Manages layout, colors, and UI design |
| **Assets** | `/Images/` | Stores images and visual content |

---

## 3. New Feature Ideas

### Feature 1: Persistent Quiz Progress

**Problem it solves:**  
Users lose quiz progress if they accidentally close the popup.

- **Difficulty Level:** Beginner
- **Estimated Effort:** 3-5 hours
- **Modules Affected:**
  - `script.js` - Store progress using localStorage

---

### Feature 2: Dynamic Content Rendering

**Problem it solves:**  
Current fact cards and content are static and limited.

- **Difficulty Level:** Intermediate
- **Estimated Effort:** 6-10 hours
- **Modules Affected:**
  - `script.js` - Fetch/render content dynamically
  - `resources.html` - Update structure for dynamic loading

---

### Feature 3: Quiz Question Randomization

**Problem it solves:**  
Quiz becomes predictable after one attempt.

- **Difficulty Level:** Beginner
- **Estimated Effort:** 2-4 hours
- **Modules Affected:**
  - `script.js` - Shuffle questions logic

---

### Feature 4: Score Tracking System (No Login)

**Problem it solves:**  
Users cannot track improvement over time.

- **Difficulty Level:** Intermediate
- **Estimated Effort:** 5-8 hours
- **Modules Affected:**
  - `script.js` - Store scores locally
  - UI updates for displaying past scores

---

### Feature 5: Improved Mobile Responsiveness

**Problem it solves:**  
UI may not adapt perfectly across all devices.

- **Difficulty Level:** Intermediate
- **Estimated Effort:** 8-12 hours
- **Modules Affected:**
  - `style.css` - Responsive design improvements

---

### Feature 6: Resource Filtering System

**Problem it solves:**  
Users cannot easily navigate or filter content.

- **Difficulty Level:** Intermediate
- **Estimated Effort:** 6-9 hours
- **Modules Affected:**
  - `script.js` - Filtering logic
  - `resources.html` - UI for filters

---

## 4. Feature Implementation Pipeline

### Pipeline for Feature 1: Persistent Quiz Progress

1. Store current question index in localStorage  
2. Store selected answers  
3. Restore state when popup reopens  
4. Add reset option when quiz completes  
5. Test edge cases (refresh, accidental close)

---

### Pipeline for Feature 2: Dynamic Content Rendering

1. Create JSON structure for content  
2. Load JSON using JavaScript  
3. Render cards dynamically  
4. Replace static HTML cards  
5. Test for scalability  

---

### Pipeline for Feature 3: Quiz Randomization

1. Store questions in array  
2. Shuffle using Fisher-Yates algorithm  
3. Ensure no repetition  
4. Test randomness across sessions  

---

### Pipeline for Feature 4: Score Tracking

1. Save scores in localStorage  
2. Display previous scores  
3. Add simple UI for history  
4. Optional: best score highlight  

---

### Pipeline for Feature 5: Mobile Responsiveness

1. Add media queries  
2. Adjust layout spacing  
3. Fix overflow issues  
4. Test across screen sizes  

---

### Pipeline for Feature 6: Filtering System

1. Add category tags to resources  
2. Create filter UI (buttons/dropdown)  
3. Implement filtering logic  
4. Animate transitions (optional)  

---

## 5. Good First Issues

### Issue 1: Add Quiz Restart Button

**Description:**  
Allow users to restart quiz without refreshing the page.

**Relevant Files:**
- `script.js`

---

### Issue 2: Improve Button Feedback

**Description:**  
Add hover and click feedback to buttons.

**Relevant Files:**
- `style.css`

---

### Issue 3: Add Smooth Scroll

**Description:**  
Improve navigation with smooth scrolling.

**Relevant Files:**
- `style.css`
- `script.js`

---

### Issue 4: Fix Layout Spacing

**Description:**  
Improve spacing consistency across pages.

**Relevant Files:**
- `style.css`

---

### Issue 5: Add Basic Animations

**Description:**  
Enhance UI with subtle animations.

**Relevant Files:**
- `style.css`

---

## 6. Contributor Notes

### Getting Started

#### Prerequisites
- Basic knowledge of HTML, CSS, JavaScript
- Git

#### Setup Steps

```bash
git clone https://github.com/archangel2006/PlanetQuest.git
cd PlanetQuest
```
Open index.html in browser.
