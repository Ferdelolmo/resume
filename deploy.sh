#!/bin/bash

# Exit immediately if any command fails
set -e

# Use the first argument as the commit message, or default to "deploying updates"
COMMIT_MSG=${1:-"deploying updates"}

echo "🚀 Building project..."
npm run build

echo "📂 Preparing docs directory..."
cp dist/index.html dist/404.html
rm -rf docs
cp -r dist docs 

echo "💾 Committing changes..."
git add .
# We use || true so the script doesn't fail if there's nothing new to commit
git commit -m "$COMMIT_MSG" || true

echo "⬆️ Pushing changes to remote (local prevails)..."
# Using --force since you mentioned local changes should prevail
# We push to the remote named 'main' and the branch 'main'
git push --force main main

echo "✅ Deployment complete!"
