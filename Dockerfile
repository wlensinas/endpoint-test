FROM node:12.19.0-alpine3.10

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 3009

CMD ["npm", "run", "start"]