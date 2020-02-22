FROM node:12-alpine

WORKDIR /app/api

ADD api/package.json .
ADD yarn.lock .

RUN yarn install

CMD ["yarn", "run", "start"]
