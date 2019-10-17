#!/bin/bash

echo "Contentful Exporting..."
echo $CONTENTFUL_SPACE_ID
./node_modules/.bin/contentful space export --export-dir ./contentful/exports/ --space-id $CONTENTFUL_SPACE_ID
