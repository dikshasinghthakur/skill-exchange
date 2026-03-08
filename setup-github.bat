@echo off
echo Setting up GitHub connection for Skill Exchange project...
echo.
echo Please make sure you've created a repository on GitHub first!
echo Repository name should be: skill-exchange
echo.
set /p GITHUB_USERNAME="Enter your GitHub username: "
set /p REPO_NAME="Enter your repository name (default: skill-exchange): "

if "%REPO_NAME%"=="" set REPO_NAME=skill-exchange

echo.
echo Adding GitHub remote...
"C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git

echo.
echo Pushing to GitHub...
"C:\Program Files\Git\bin\git.exe" branch -M main
"C:\Program Files\Git\bin\git.exe" push -u origin main

echo.
echo Great! Your project is now on GitHub.
echo.
echo Next steps for GitHub Pages deployment:
echo 1. Go to your repository on GitHub
echo 2. Click Settings tab
echo 3. Scroll down to Pages section
echo 4. Under Source, select "Deploy from a branch"
echo 5. Select "main" branch and "/ (root)" folder
echo 6. Click Save
echo.
echo Your site will be live at: https://%GITHUB_USERNAME%.github.io/%REPO_NAME%/
echo.
pause