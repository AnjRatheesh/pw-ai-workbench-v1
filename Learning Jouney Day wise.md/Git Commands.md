
BEST BEGINNER FLOW
------------------------------------------------

1) git status
2) git add .
3) git commit -m "message"
4) git push




=========================================
GIT COMMANDS REFERENCE TABLE
=========================================

BASIC SETUP
-----------------------------------------------

Command                         | Purpose
----------------------------------------------------------------
git --version                   | Check installed Git version
git config --global user.name "Your Name" | Set username
git config --global user.email "you@email.com" | Set email
git config --list               | Show Git configuration


------------------------------------------------

REPOSITORY COMMANDS
------------------------------------------------

Command                         | Purpose
----------------------------------------------------------------
git init                        | Initialize new Git repository
git clone <repo_url>            | Copy repository from GitHub
git remote -v                   | Show connected remote repo
git remote add origin <url>     | Connect local repo to remote


------------------------------------------------

FILE TRACKING COMMANDS
------------------------------------------------

Command                         | Purpose
----------------------------------------------------------------
git status                      | Show file status
git add <file>                  | Stage specific file
git add .                       | Stage all changes
git restore <file>              | Discard changes in file
git rm <file>                   | Remove file


------------------------------------------------

COMMIT COMMANDS
------------------------------------------------

Command                         | Purpose
----------------------------------------------------------------
git commit -m "message"         | Commit staged changes
git commit -am "message"        | Add + commit (tracked files)
git log                         | Show commit history
git log --oneline               | Short commit history


------------------------------------------------

BRANCH COMMANDS
------------------------------------------------

Command                         | Purpose
----------------------------------------------------------------
git branch                      | Show branches
git branch <name>               | Create new branch
git checkout <branch>           | Switch branch
git checkout -b <branch>        | Create + switch branch
git switch <branch>             | Switch branch (modern way)
git branch -d <branch>          | Delete branch


------------------------------------------------

PUSH & PULL COMMANDS
------------------------------------------------

Command                         | Purpose
----------------------------------------------------------------
git push                        | Push changes to remote
git push origin <branch>        | Push specific branch
git pull                        | Pull latest changes
git fetch                       | Download changes (no merge)


------------------------------------------------

MERGE & REBASE
------------------------------------------------

Command                         | Purpose
----------------------------------------------------------------
git merge <branch>              | Merge branch into current
git rebase <branch>             | Reapply commits on top
git merge --abort               | Cancel merge


------------------------------------------------

UNDO COMMANDS
------------------------------------------------

Command                         | Purpose
----------------------------------------------------------------
git reset --soft HEAD~1         | Undo last commit (keep changes)
git reset --hard HEAD~1         | Undo commit (delete changes)
git revert <commit_id>          | Undo specific commit safely


------------------------------------------------

STASH COMMANDS
------------------------------------------------

Command                         | Purpose
----------------------------------------------------------------
git stash                       | Temporarily save changes
git stash list                  | Show stashed items
git stash apply                 | Reapply stashed changes
git stash drop                  | Delete stash


------------------------------------------------

=========================================
END
=========================================
