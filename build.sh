#!/bin/bash

rm src/modules-expose.ts
cp src/modules-expose.txt src/modules-expose.ts

yarn build:rspack

echo "import './main';" > dist/index.js

echo "# .gitignore
node_modules/
package-lock.json" > dist/.gitignore

node generate-dist-json.js

cp dist.json dist/package.json
