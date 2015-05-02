#!/bin/bash

ember build --environment='production'

ghPagesFolderPath='../mvc-tree-gh-pages'
assets=$ghPagesFolderPath'/assets/**.*'

echo -e '\n>>remove old'
rm -vr $assets

echo -e '\n>>copy new'
cp -Rv dist/* $ghPagesFolderPath 

echo -e '\n>>add to repo'
cd $ghPagesFolderPath

git add assets
git add -u .
git status

git commit -m 'automated deploy'

git push -u origin gh-pages

