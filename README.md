# Ranita Mandal — Premium Editorial Portfolio

A stunning, professional, and responsive single-page web portfolio for **Ranita Mandal** (Digital Media & Learning Strategist). Designed around a luxury executive aesthetic of **gold & warm cream**, with subtle paper background textures, premium typography, and smooth, lightweight animations.

## Key Features

- **Premium Gold & Cream Aesthetic**: A high-end editorial palette featuring ivory-cream paper background textures (`#FAF6F0`), charcoal-bronze text, and polished champagne gold accents.
- **Subtle Background Textures**: An ultra-clean, elegant, responsive CSS dotted grid background that gives a luxury textured journal finish.
- **Sophisticated Typography**: Imports Google Fonts **Cormorant Garamond** (exquisite serif for elite headings) and **Plus Jakarta Sans** (crisp geometric sans-serif for comfortable reading).
- **Smooth Interaction & Scroll Reveals**: Custom timeline transitions and scroll reveals that animate components smoothly as you read down, plus active section highlighting in the navigation header.
- **Instant Email Quick-Copy**: Click the email panel to automatically copy `ranitam093094@gmail.com` with a sleek dynamic success toast overlay.
- **Zero-Dependency & Fast Load Times**: Built natively in pure HTML5, CSS3, and ES6 JavaScript. Scores near-perfect lighthouse performance, SEO, and accessibility audits. Fully ready to host for **free** on GitHub Pages.

---

## Directory Structure

```
ranita-portfolio/
├── index.html          # Semantic structure, SEO meta-tags & main portfolio content
├── style.css           # Premium HSL design system, responsive layout & custom components
├── script.js          # Interactive features, Intersection Observer reveals & clipboard toast
└── assets/
    └── hero_abstract.png  # High-fidelity custom generated abstract visual branding graphic
```

---

## How to Host for Free on GitHub Pages (Less than 5 Minutes)

GitHub Pages allows you to host static websites for absolutely free. Here are the two easiest ways to deploy your portfolio.

### Option A: The Easy Drag-and-Drop Web Method (No terminal or command line required!)

1. Go to [GitHub](https://github.com/) and sign in (or sign up for a free account).
2. Click the green **New** button (or **Create Repository**) in the top left.
3. Set **Repository name** to: `ranita-portfolio` (or any name you prefer).
4. Set the repository to **Public** (required for free hosting).
5. Leave all checkboxes (README, .gitignore, license) unchecked, and click **Create repository**.
6. On the quick-setup screen, look for the line: *"Get started by creating a new file or **uploading an existing file**."* Click **uploading an existing file**.
7. Drag and drop all files and folders inside your local `ranita-portfolio` folder directly into your browser window:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/` folder (containing `hero_abstract.png`)
8. Let the upload finish, then click the green **Commit changes** button at the bottom.
9. Go to the **Settings** tab in your repository toolbar.
10. On the left sidebar, click **Pages**.
11. Under **Build and deployment** -> **Branch**, change "None" to **main** (or `master`), leave the folder as `/ (root)`, and click **Save**.
12. Wait about 30 seconds, refresh the page, and you will see a banner at the top saying: 
    *“Your site is live at: `https://your-username.github.io/ranita-portfolio/`”*

---

### Option B: The Git Command Line Method

If you have Git installed on your local computer, open your terminal inside the `ranita-portfolio` folder and execute the following commands:

```bash
# 1. Initialize git
git init

# 2. Stage and commit files
git add .
git commit -m "Deploy Ranita Mandal premium editorial portfolio"

# 3. Create a blank repository on GitHub named "ranita-portfolio" and link it
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ranita-portfolio.git

# 4. Rename default branch to main and push
git branch -M main
git push -u origin main
```

After pushing:
1. Go to **Settings** -> **Pages** in your GitHub repository.
2. Select **main** branch, `/ (root)` folder, and click **Save**.
3. Your portfolio is now online!

---

## Local Development & Preview

To run the site locally:
- Simply double-click `index.html` to open it in any web browser, OR
- Run a local static server if you are using an IDE:
  - If you use VS Code, click **Go Live** via the Live Server extension.
  - Or run `npx serve` or `python -m http.server` in your terminal.
