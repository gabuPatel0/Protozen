#!/bin/bash

# GitHub Pages Deployment Script for Protozen
# This script builds and deploys the app to GitHub Pages

set -e

echo "🚀 Starting GitHub Pages deployment..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Please initialize git first."
    exit 1
fi

# Check if gh-pages branch exists, create if not
if ! git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "📝 Creating gh-pages branch..."
    git checkout --orphan gh-pages
    git rm -rf .
    git commit --allow-empty -m "Initial gh-pages commit"
    git checkout main 2>/dev/null || git checkout master
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --legacy-peer-deps
fi

# Build the project for GitHub Pages
echo "🔨 Building project for GitHub Pages..."
export GITHUB_PAGES=true
export GITHUB_REPOSITORY=$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^/]*\/[^/]*\).*/\1/' | sed 's/\.git$//')

npm run build

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy:gh-pages

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://$(echo $GITHUB_REPOSITORY | cut -d'/' -f1).github.io/$(echo $GITHUB_REPOSITORY | cut -d'/' -f2)/"
