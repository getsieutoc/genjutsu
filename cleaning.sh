#!/usr/bin/env bash

rm -rf node_modules
npm cache clean --force
npm install
watchman watch-del-all
rm -fr $TMPDIR/haste-map-*
rm -rf $TMPDIR/metro-cache
