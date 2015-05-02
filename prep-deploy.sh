#!/bin/bash

set -e

ghPagesFolderPath='../mvc-tree-gh-pages'

mkdir $ghPagesFolderPath
cd $ghPagesFolderPath

git init
git remote add origin git@github.com:givanse/mvc-tree.git 
git checkout -b gh-pages
git pull origin gh-pages
