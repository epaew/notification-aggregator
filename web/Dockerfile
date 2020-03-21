FROM node:12-alpine

WORKDIR /app/web
COPY web/package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile
CMD ["yarn", "start:watch"]
