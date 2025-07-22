#!/bin/bash

# 1. Capture the metadata from the most recent commit
LAST_COMMIT_DATE=$(git log -1 --date=format:'%Y-%m-%d %H:%M:%S' --format="%cd")
LAST_COMMIT_TEXT=$(git log -1 --format="%s")
USER_NAME=$(git log -1 --format="%an")
USER_EMAIL=$(git log -1 --format="%ae")
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Display what we found
echo "------------------------------------------"
echo "Targeting Date: $LAST_COMMIT_DATE"
echo "Commit Message: $LAST_COMMIT_TEXT"
echo "Author: $USER_NAME ($USER_EMAIL)"
echo "Branch: $CURRENT_BRANCH"
echo "------------------------------------------"

# 2. Match the Author configuration
git config --local user.name "$USER_NAME"
git config --local user.email "$USER_EMAIL"

# 3. Stage all current changes
git add .

# 4. The "Stealth" Amend
# We use GIT_COMMITTER_DATE and GIT_AUTHOR_DATE to force Git to use the old time
echo "Amending commit to match $LAST_COMMIT_DATE..."

GIT_AUTHOR_DATE="$LAST_COMMIT_DATE" \
GIT_COMMITTER_DATE="$LAST_COMMIT_DATE" \
git commit --amend -m "$LAST_COMMIT_TEXT" --no-verify

# 5. Force Push
echo "Force pushing to $CURRENT_BRANCH..."
git push -uf origin "$CURRENT_BRANCH" --no-verify

echo "Done! The history has been rewritten."
