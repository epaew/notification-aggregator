FROM node:12-alpine

WORKDIR /app/packages/api

ADD packages/api/package.json .
ADD yarn.lock .

RUN yarn install

CMD ["yarn", "run", "start"]
