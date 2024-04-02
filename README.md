# web_services_ae2
 a full-stack web application that will be used on an intranet by local authorities to manage a programme of energy efficiency upgrades for domestic homes.

# git workflow 
- to clone this repository onto your computer (i.e to have this current git repo and be able to push changes to it run `git clone https://github.com/tolusolaadeyemi/web_services_ae2.git`
- by default we will always be on the `main` branch, any features to be worked should involve checking out to a different branch, ideally each of the tasks outlined for the day for each person counts as a feature. so first make sure you are on the main branch by running `git branch` (the highlighted branch is your current branch). then **create** and **checkout** to a new branch by running `git checkout -b new_branch_name`.
- for any changes you makes while working on the new branch you can run `git status` to see an **committed** and **uncommitted** changes, you can also see these (with a bit more clarity) in the **source control** tab built into vscode.
- to commit a change, you first run `git add name_of_files_to_be_committed` or simply `git add .` if you want to commit all the files you made changes to and then run `git commit -m commit_message`. commit messages should be as clear but concise as possible. i.e what did you add to the project with this commit.
- finally after committing, you then want to **push** your changes from the local to the origin (i.e from your computer to this repo on git), for this you run `git push`
- after working on the changes, making sure that everything is working, committing, and pushing, you will then create a `pull request` against the main branch (we can always have a call to do the first one), github will check that there are no merge conflicts (i.e there's no clashing code between the main/working branch, and the branch you created) and then allow you to merge the two branches. for accountability's sake, **we should both review each other's pull requests before merging**
- after the branch is merged, on your local computer, you will then switch back to the main branch `git checkout main` and run `git pull` to ensure that your local copy is at the same state as the origin (where you just merged your changes from a feature branch to the main branch)
- this will typcially be repeated a few more times for each feature, until the end.
