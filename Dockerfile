FROM node:18-alpine

WORKDIR /articles-hub-frontend/

COPY public/ /articles-hub-frontend/public
COPY src/ /articles-hub-frontend/src
COPY package.json /articles-hub-frontend/
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]