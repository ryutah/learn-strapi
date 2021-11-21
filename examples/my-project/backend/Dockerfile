FROM strapi/strapi:3.6.8-node14-alpine

WORKDIR /srv/app

COPY ./ /srv/app

ENV NODE_ENV=production

RUN npm install
RUN npm run build

CMD strapi start
