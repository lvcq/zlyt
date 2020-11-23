FROM node:latest

WORKDIR /work

COPY dist/zlyt-web /work/

EXPOSE 4000

ENTRYPOINT ["node","/work/server/main.js"]

