#!/bin/bash

# 1. Grab metadata from the last commit
LAST_COMMIT_DATE=$(git log -1 --format=%ai)
LAST_COMMIT_TEXT=$(git log -1 --format=%s)
USER_NAME=$(git log -1 --format=%an)
USER_EMAIL=$(git log -1 --format=%ae)
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "Targeting Commit Date: $LAST_COMMIT_DATE"
echo "Commit Message: $LAST_COMMIT_TEXT"
echo "Author: $USER_NAME ($USER_EMAIL)"
echo "Branch: $CURRENT_BRANCH"

# 2. Update local git config to match original author
git config --local user.name "$USER_NAME"
git config --local user.email "$USER_EMAIL"

# 3. Stage changes
git add .

# 4. Amend the commit using the old timestamp
# We use GIT_COMMITTER_DATE to ensure both Author and Committer dates match the past
GIT_AUTHOR_DATE="$LAST_COMMIT_DATE" \
GIT_COMMITTER_DATE="$LAST_COMMIT_DATE" \
git commit --amend -m "$LAST_COMMIT_TEXT" --no-verify

echo "Successfully amended last commit with original timestamp."

# 5. Force push to remote
git push -uf origin "$CURRENT_BRANCH" --no-verify
