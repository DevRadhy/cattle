FROM node:alpine AS build

LABEL name="build"

WORKDIR /usr/app

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn build

FROM node:alpine

LABEL name="production"

WORKDIR /usr/app

EXPOSE 3333

COPY package*.json ./

RUN yarn install --no-lockfile --prod && yarn cache clean --all

COPY --from=build /usr/app/dist ./dist

ENTRYPOINT [ "yarn", "start" ]