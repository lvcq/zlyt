#! /bin/bash
export PATH=/home/buildagent/node/bin:$PATH
if ! command -v node-sass >/dev/null 2>&1; then
    npm install node-sass -g
fi

if ! command -v pm2 >/dev/null 2>&1;then
    npm install -g pm2
fi

#build
echo $(npm install)

echo $(npm run build:theme)
echo $(npm run build:ssr)
pm2 start ecosystem.config.js
pm2 plus
