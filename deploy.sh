#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# Replace "<YOUR_USERNAME>" with your GitHub username
# Replace "<YOUR_REPOSITORY>" with your repository name
git push -f git@github.com:Lann892/AI-Model.git main:gh-pages

cd -
