FROM node:latest

WORKDIR /usr/app

COPY package.json .

RUN npm install --quiet
COPY script.js .
COPY entrypoint.sh .
ENTRYPOINT ./entrypoint.sh
