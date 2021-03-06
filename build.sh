#! /bin/bash
export PATH=/home/buildagent/node/bin:$PATH
if ! command -v node-sass >/dev/null 2>&1; then
    npm install node-sass -g
fi

if ! command -v pm2 >/dev/null 2>&1;then
    echo "安装PM2"
    npm install -g pm2
fi

echo $(pm2 stop ecosystem.config.js)
#build
echo "安装依赖"
echo $(npm install)

echo "打包应用"
echo $(npm run build:theme)
echo $(npm run build:ssr)

echo "运行"
echo $(pm2 link i0uhsccaeccgzfd abvdhu82390b09k)
echo $(pm2 start ecosystem.config.js)

