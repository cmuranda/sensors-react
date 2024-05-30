FROM node:18-alpine as prod

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

CMD [ "npm", "start", "--port", "4200"]