====================================================
COMPLETE GIT COMMANDS NOTES (WITH REAL EXAMPLE)
====================================================

SCENARIO:
You are working on main branch.
You want to create a new feature branch called:

AnjanaNewBranch

----------------------------------------------------
1) CHECK CURRENT BRANCH
----------------------------------------------------

Command:
git branch

Purpose:
Shows all branches and current branch.

Example Output:
* main

* means you are currently on main.


----------------------------------------------------
2) CREATE NEW BRANCH
----------------------------------------------------

Command:
git branch AnjanaNewBranch

Purpose:
Creates new branch but does NOT switch to it.

After this:
You are still on main.


----------------------------------------------------
3) CREATE + SWITCH (Most Common Way)
----------------------------------------------------

Command:
git checkout -b AnjanaNewBranch

OR (Modern Way):
git switch -c AnjanaNewBranch

Purpose:
Creates new branch and immediately switches to it.

Now:
You are working inside AnjanaNewBranch.


----------------------------------------------------
4) CONFIRM CURRENT BRANCH
----------------------------------------------------

Command:
git branch

Output:
main
* AnjanaNewBranch


----------------------------------------------------
5) WORK AND SAVE CHANGES
----------------------------------------------------

After editing files:

Check changes:
git status

Add files:
git add .

Commit changes:
git commit -m "Added new feature"


----------------------------------------------------
6) PUSH NEW BRANCH TO GITHUB (FIRST TIME)
----------------------------------------------------

Command:
git push -u origin AnjanaNewBranch

Purpose:
- Creates branch on GitHub
- Links local branch to remote branch
- Sets upstream tracking

After this:
You can simply use:

git push


----------------------------------------------------
7) CREATE PULL REQUEST (ON GITHUB WEBSITE)
----------------------------------------------------

Go to GitHub
Click "Compare & Pull Request"
Merge into main


----------------------------------------------------
8) SWITCH BACK TO MAIN AFTER MERGE
----------------------------------------------------

Command:
git switch main

OR
git checkout main


----------------------------------------------------
9) PULL LATEST CHANGES FROM GITHUB
----------------------------------------------------

Command:
git pull

Purpose:
Gets latest updates from remote main branch.


----------------------------------------------------
10) DELETE LOCAL BRANCH (AFTER MERGE)
----------------------------------------------------

Command:
git branch -d AnjanaNewBranch

Deletes local branch.


----------------------------------------------------
11) DELETE REMOTE BRANCH (OPTIONAL)
----------------------------------------------------

Command:
git push origin --delete AnjanaNewBranch

Deletes branch from GitHub.


====================================================
IMPORTANT ADDITIONAL COMMANDS
====================================================

git clone <url>
Used when copying a repository from GitHub for first time.

git fetch
Downloads latest changes but does NOT merge.

git log
Shows commit history.

git log --oneline
Short commit history.

git restore <file>
Discard changes in a file.

git reset --hard HEAD~1
Remove last commit completely (dangerous).

git stash
Temporarily save changes.

git stash apply
Reapply stashed changes.


====================================================
FULL WORKFLOW SUMMARY
====================================================

1) git switch main
2) git pull
3) git switch -c AnjanaNewBranch
4) Make changes
5) git add .
6) git commit -m "message"
7) git push -u origin AnjanaNewBranch
8) Create PR
9) Merge
10) git switch main
11) git pull
12) git branch -d AnjanaNewBranch

====================================================
END
====================================================
