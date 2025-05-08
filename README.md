# Step-by-Step Guide to Publish Your Personal Website

This guide walks you through creating and deploying your personal React-based website using GitHub Pages.

## 1. Set Up Your Local Development Environment

```bash
# Create a new React project
npx create-react-app personal-website

# Navigate to the project folder
cd personal-website

# Install required dependencies
npm install lucide-react
npm install -D tailwindcss
npx tailwindcss init
```

## 2. Configure Tailwind CSS

### 1. Replace the content in `tailwind.config.js` with:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. Edit src/index.css to include:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. Add Your Code and Assets

- Replace the content of `src/App.js` with the code you copied
- Place your resume file (`Working Resume.docx`) in the `public` folder
- Add your profile picture to the `public` folder (or update the image path in the code)

## 4. Test Locally

```bash
npm start
```

This will launch your site at http://localhost:3000 for testing.

## 5. Prepare for Deployment

```bash
# Create an optimized production build
npm run build
```

This creates a `build` folder with all files needed for deployment.

## 6. Choose a Hosting Platform

Deploy to GitHub pages.

### 1. Create a GitHub repository for your website
### 2. Install GitHub Pages package:
```bash
npm install --save gh-pages
```
### 3. Add these lines to your `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
  // Other scripts...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 4. Deploy your site:
```bash
npm run deploy
```

## 7. Set Up Your Custom Domain

### 1. First purchase a custom domian. I use Namecheap, it cost 9.98$ per year for using a customize domain.
### 2. Go to your GitHub repository → Settings → Pages
### 3. Under Custom domain, enter your domain (e.g., yourname.com)
### 4. Click Save

GitHub will create a `CNAME` file in your `public/` folder automatically (or you can manually create it with your domain inside).

## 8. Configure DNS at Your Domain Registrar

At your registrar (e.g., Namecheap), go to DNS Settings and add the following:

✅ A Records (for apex/root domain like yourname.com)
| Type | Host | Value           | TTL  |
| ---- | ---- | --------------- | ---- |
| A    | @    | 185.199.108.153 | Auto |
| A    | @    | 185.199.109.153 | Auto |
| A    | @    | 185.199.110.153 | Auto |
| A    | @    | 185.199.111.153 | Auto |


✅ CNAME Record (for www.yourname.com)
| Type  | Host | Value                  | TTL  |
| ----- | ---- | ---------------------- | ---- |
| CNAME | www  | yourusername.github.io | Auto |

Replace `yourusername.github.io` with your actual GitHub Pages domain.

## 9. Wait for DNS to Propagate
- It can take a few minutes to a few hours.
- Refresh the GitHub Pages settings page to see if DNS is successful.

## 10. Enforce HTTPS (Recommended)
Once DNS is verified:

- Check the box for "Enforce HTTPS" in the GitHub Pages settings.
- This secures your site with a lock icon 🔒

Now your site should be live at https://yourname.com.