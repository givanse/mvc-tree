#!/bin/bash

# mkdir $ghPagesFolderPath
# cd ghPagesFolderPath
# git init
# git remote add origin git@github.com:givanse/mvc-tree.git 
# git checkout -b gh-pages
# git pull origin gh-pages

ember build --environment='production'

ghPagesFolderPath='../mvc-tree-gh-pages'

git rm -rv $ghPagesFolderPath'/assets/*' 

cp -Rv dist/* $ghPagesFolderPath 

cd $ghPagesFolderPath

git add -u .

exit

git commit -m 'update'

git push -u origin gh-pages

