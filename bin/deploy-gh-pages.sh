#!/bin/bash

set -e

ember build --environment='production'

ghPagesFolderPath='../mvc-tree-gh-pages'

# create folder
rm -rf $ghPagesFolderPath;
mkdir -v $ghPagesFolderPath;

# init folder
cd $ghPagesFolderPath
git init
git remote add origin git@github.com:givanse/mvc-tree.git 
git checkout -b gh-pages

# add files
cd -
echo -e '\n>> copy new'
cp -Rv dist/* $ghPagesFolderPath 
cd -

git add -A .

git commit -m 'automated deploy' --author 'deploy-gh-pages <givanse@gmail.com>'

git push -u -f origin gh-pages
