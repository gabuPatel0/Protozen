@echo off
REM GitHub Pages Deployment Script for Protozen (Windows)
REM This script builds and deploys the app to GitHub Pages

echo 🚀 Starting GitHub Pages deployment...

REM Check if we're in a git repository
if not exist ".git" (
    echo ❌ Error: Not in a git repository. Please initialize git first.
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install --legacy-peer-deps
)

REM Build the project for GitHub Pages
echo 🔨 Building project for GitHub Pages...
set GITHUB_PAGES=true

REM Get repository name from git remote
for /f "tokens=*" %%i in ('git config --get remote.origin.url') do set REPO_URL=%%i
for /f "tokens=4 delims=/" %%i in ("%REPO_URL%") do set REPO_NAME=%%i
set REPO_NAME=%REPO_NAME:.git=%

set GITHUB_REPOSITORY=%REPO_NAME%

npm run build

REM Deploy to GitHub Pages
echo 🚀 Deploying to GitHub Pages...
npm run deploy:gh-pages

echo ✅ Deployment complete!
echo 🌐 Your site will be available at: https://yourusername.github.io/%REPO_NAME%/
