# 🚀 GitHub Pages Deployment Guide

This guide explains how to deploy the Protozen app to GitHub Pages using two different methods: automatic deployment via GitHub Actions and manual deployment.

## 📋 Prerequisites

1. **GitHub Repository**: Your project must be in a GitHub repository
2. **Node.js**: Version 16 or higher installed locally
3. **Git**: Properly configured with your GitHub account

## 🤖 Method 1: Automatic Deployment (Recommended)

### Setup Steps:

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically trigger on the next push

3. **Configure Repository Settings**:
   - Ensure your repository has **Actions** enabled
   - The workflow requires **Pages** and **Contents** permissions

### How it Works:
- Automatically triggers on pushes to `main` or `master` branch
- Builds the project with proper GitHub Pages configuration
- Deploys to the `gh-pages` branch
- Your site will be available at: `https://yourusername.github.io/repository-name/`

## 🔧 Method 2: Manual Deployment

### Setup Steps:

1. **Install additional dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Run deployment script**:
   
   **On Windows:**
   ```bash
   deploy.bat
   ```
   
   **On macOS/Linux:**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

3. **Or use npm commands directly**:
   ```bash
   npm run build:gh-pages
   npm run deploy:gh-pages
   ```

## 🛠️ Configuration Details

### Vite Configuration
The `vite.config.ts` has been updated to handle GitHub Pages deployment:
- Automatically sets the correct `base` path for GitHub Pages
- Detects when building for GitHub Pages via environment variables
- Configures proper asset paths

### Environment Variables
- `GITHUB_PAGES=true`: Enables GitHub Pages mode
- `GITHUB_REPOSITORY`: Used to determine the correct base path

### Build Scripts
- `npm run build`: Standard build for local/other deployments
- `npm run build:gh-pages`: Build specifically for GitHub Pages
- `npm run deploy:gh-pages`: Build and deploy to GitHub Pages
- `npm run preview`: Preview the built site locally

## 🔍 Troubleshooting

### Common Issues:

1. **404 Error on GitHub Pages**:
   - Ensure the repository name matches the base path
   - Check that GitHub Pages is enabled in repository settings
   - Verify the `gh-pages` branch exists and has content

2. **Assets Not Loading**:
   - The Vite config automatically handles asset paths
   - Ensure `GITHUB_PAGES=true` is set during build

3. **Build Failures**:
   - Check that all dependencies are installed: `npm install --legacy-peer-deps`
   - Verify TypeScript compilation: `npm run lint`
   - Check the GitHub Actions logs for detailed error messages

4. **Permission Errors**:
   - Ensure the repository has proper permissions for GitHub Actions
   - Check that the `GITHUB_TOKEN` has sufficient permissions

### Manual Troubleshooting:

```bash
# Clear build cache
rm -rf dist node_modules/.vite

# Reinstall dependencies
npm install --legacy-peer-deps

# Test local build
npm run build:gh-pages

# Preview locally
npm run preview
```

## 📁 File Structure After Setup

```
Protozen/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── dist/                       # Build output (auto-generated)
├── deploy.sh                   # Unix deployment script
├── deploy.bat                  # Windows deployment script
├── vite.config.ts             # Updated with GitHub Pages config
├── package.json               # Updated with deployment scripts
└── DEPLOYMENT.md              # This file
```

## 🌐 Accessing Your Deployed Site

Once deployed, your site will be available at:
```
https://[your-github-username].github.io/[repository-name]/
```

For example:
- Repository: `https://github.com/johndoe/protozen`
- Deployed site: `https://johndoe.github.io/protozen/`

## 🔄 Updating Your Deployment

### Automatic Updates:
Simply push changes to your main branch:
```bash
git add .
git commit -m "Update content"
git push origin main
```

### Manual Updates:
Run the deployment script again:
```bash
# Windows
deploy.bat

# macOS/Linux
./deploy.sh
```

## 📞 Support

If you encounter issues with deployment:
1. Check the GitHub Actions logs in your repository
2. Verify all prerequisites are met
3. Review the troubleshooting section above
4. Contact: contact@protozenai.com
