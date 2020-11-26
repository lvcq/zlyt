#! /bin/bash
export PATH=/home/buildagent/node/bin:$PATH
if ! command -v node-sass >/dev/null 2>&1; then
    npm install node-sass -g
fi

#build
echo $(npm install)

echo $(npm run build:theme)
echo $(npm run build:ssr)
node dist/zlyt-web/server/main.js
