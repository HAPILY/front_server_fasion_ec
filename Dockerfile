FROM node:12.8.0

WORKDIR /app/front_server_fasion_ec

ENV PATH /app/front_server_fasion_ec/node_modules/.bin:$PATH

ENV PATH /app/frontend/node_modules/.bin:$PATH

RUN apt-get update -qq  \
  && rm -rf /var/lib/apt/lists/*

COPY package.json /app/front_server_fasion_ec/package.json
COPY yarn.lock /app/front_server_fasion_ec/yarn.lock

RUN yarn install

ENV HOST 0.0.0.0
EXPOSE 3000