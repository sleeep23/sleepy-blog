FROM node:18-slim

WORKDIR /src/app
COPY package.json ./

RUN npm install

COPY . ./

RUN npm run compile

CMD ["npm", "start"]
