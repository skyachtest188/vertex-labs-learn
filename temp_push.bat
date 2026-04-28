@echo off

:: 1. Extract metadata from the most recent commit
for /f "delims=" %%A in ('cmd /c "git log -1 --date=format-local:%%Y-%%m-%%d --format=%%cd"') do set LAST_COMMIT_DATE=%%A
for /f "delims=" %%A in ('cmd /c "git log -1 --date=format-local:%%H:%%M:%%S --format=%%cd"') do set LAST_COMMIT_TIME=%%A
for /f "delims=" %%A in ('cmd /c "git log -1 --format=%%s"') do set LAST_COMMIT_TEXT=%%A
for /f "delims=" %%A in ('cmd /c "git log -1 --format=%%an"') do set USER_NAME=%%A
for /f "delims=" %%A in ('cmd /c "git log -1 --format=%%ae"') do set USER_EMAIL=%%A
for /f "delims=" %%A in ('git rev-parse --abbrev-ref HEAD') do set CURRENT_BRANCH=%%A

:: 2. Display captured information
echo %LAST_COMMIT_DATE% %LAST_COMMIT_TIME%
echo %LAST_COMMIT_TEXT%
echo %USER_NAME% (%USER_EMAIL%)
echo Branch: %CURRENT_BRANCH%

:: 3. Save current system time and temporarily change it to the old commit time
set CURRENT_DATE=%date%
set CURRENT_TIME=%time%
date %LAST_COMMIT_DATE%
time %LAST_COMMIT_TIME%

echo Date temporarily changed to %LAST_COMMIT_DATE% %LAST_COMMIT_TIME%

:: 4. Reconfigure local Git identity and amend the commit
git config --local user.name %USER_NAME%
git config --local user.email %USER_EMAIL%
git add .
git commit --amend -m "%LAST_COMMIT_TEXT%" --no-verify

:: 5. Restore original system time
date %CURRENT_DATE%
time %CURRENT_TIME%

echo Date restored to %CURRENT_DATE% %CURRENT_TIME% and complete amend last commit!

:: 6. Force push the rewritten history to the server
git push -uf origin %CURRENT_BRANCH% --no-verify

@echo on