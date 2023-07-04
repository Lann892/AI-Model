#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# Initialize a new Git repository
git init

# Stage all files
git add -A

# Commit the changes
git commit -m 'deploy'

# Create the gh-pages branch
git checkout -b gh-pages

# Push the branch to the remote repository
# Replace "<YOUR_USERNAME>" with your GitHub username
# Replace "<YOUR_REPOSITORY>" with your repository name
git push -f git@github.com:Lann892/AI-Model.git gh-pages

cd -
