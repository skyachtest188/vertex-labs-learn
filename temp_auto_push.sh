#!/bin/bash

# 1. Grab metadata from the last commit (for name/email/message)
LAST_COMMIT_TEXT=$(git log -1 --format=%s)
USER_NAME=$(git log -1 --format=%an)
USER_EMAIL=$(git log -1 --format=%ae)
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "------------------------------------------"
echo "Targeting Branch: $CURRENT_BRANCH"
echo "Updating Commit Message: $LAST_COMMIT_TEXT"
echo "------------------------------------------"

# 2. Ensure identity matches
git config --local user.name "$USER_NAME"
git config --local user.email "$USER_EMAIL"

# 3. Stage changes
git add .

# 4. Amend the commit WITHOUT forcing an old date
# Removing the environment variables forces Git to use CURRENT time.
git commit --amend -m "$LAST_COMMIT_TEXT" --no-verify

echo "Commit amended with CURRENT timestamp."

# 5. Force push to remote
# This is still required because we are changing the Hash of an existing commit.
git push -uf origin "$CURRENT_BRANCH" --no-verify

echo "Pushed to GitHub. It should now show as 'Just now' or 'Today'."
