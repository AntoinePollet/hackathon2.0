FROM node:18-alpine

WORKDIR /back/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run start:dev