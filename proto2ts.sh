#!/bin/bash
./node_modules/.bin/pbjs -t static-module -w es6 --keep-case --no-verify --no-delimited --es6 -o src/service/api/defines.js proto/*.proto
./node_modules/.bin/pbts -o src/service/api/defines.d.ts src/service/api/defines.js
./node_modules/.bin/prettier --ignore-path ./.prettierignore-none --write src/service/api/defines.js
./node_modules/.bin/prettier --ignore-path ./.prettierignore-none --write src/service/api/defines.d.ts
