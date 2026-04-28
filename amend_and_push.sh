#!/bin/bash

set -e

# 1. Extract metadata from the most recent commit
LAST_COMMIT_DATE=$(git log -1 --date=format-local:"%Y-%m-%d" --format="%cd")
LAST_COMMIT_TIME=$(git log -1 --date=format-local:"%H:%M:%S" --format="%cd")
LAST_COMMIT_TEXT=$(git log -1 --format="%s")
USER_NAME=$(git log -1 --format="%an")
USER_EMAIL=$(git log -1 --format="%ae")
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# 2. Display captured information
echo "$LAST_COMMIT_DATE $LAST_COMMIT_TIME"
echo "$LAST_COMMIT_TEXT"
echo "$USER_NAME ($USER_EMAIL)"
echo "Branch: $CURRENT_BRANCH"

# 3. Save current system time
CURRENT_DATE=$(date +"%Y-%m-%d")
CURRENT_TIME=$(date +"%H:%M:%S")

echo "Current system time: $CURRENT_DATE $CURRENT_TIME"

# ⚠️ NOTE: Changing system time requires sudo privileges
echo "Changing system time temporarily..."
sudo date -s "$LAST_COMMIT_DATE $LAST_COMMIT_TIME"

# 4. Reconfigure local Git identity and amend the commit
git config --local user.name "$USER_NAME"
git config --local user.email "$USER_EMAIL"

git add .
git commit --amend -m "$LAST_COMMIT_TEXT" --no-verify

# 5. Restore original system time
echo "Restoring original system time..."
sudo date -s "$CURRENT_DATE $CURRENT_TIME"

echo "Date restored to $CURRENT_DATE $CURRENT_TIME"

# 6. Force push the rewritten history to the server
git push -uf origin "$CURRENT_BRANCH" --no-verify

echo "Amend and push completed."
