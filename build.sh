#! /bin/bash
export PATH=/home/buildagent/node/bin:\$PATH
if ! command -v node-sass >/dev/null 2>&1; then
    npm install node-sass -g
fi

#build
npm install

npm run build:theme
npm run build:ssr