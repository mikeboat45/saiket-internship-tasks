#!/bin/bash
# This script updates the gh-pages branch with the latest content from the main branch.

# 1. Switch to the gh-pages branch
git checkout gh-pages

# 2. Pull the latest files from the main branch
# This command overwrites the current files with the ones from 'main'
git checkout main -- .

# 3. Stage all the updated files
git add .

# 4. Commit the changes
# The -m flag provides the commit message.
# Using [skip ci] to prevent CI/CD loops if any are set up.
git commit -m "Update website [skip ci]"

# 5. Push the changes to the remote gh-pages branch on GitHub
git push origin gh-pages

# 6. Switch back to the main branch for development
git checkout main

# 7. Print a confirmation message
echo "Website deployment successful!"
