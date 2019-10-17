#!/bin/bash

echo "Contentful Importing latest..."
echo $CONTENTFUL_SPACE_ID
lastest_file=$(ls ./contentful/exports/* | sort -n -t _ -k 2 | tail -1)
echo $lastest_file
./node_modules/.bin/contentful space import --content-file $lastest_file --space-id $CONTENTFUL_SPACE_ID
