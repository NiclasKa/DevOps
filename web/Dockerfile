FROM node:12
WORKDIR /usr/src/web
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3001
CMD ["node", "./bin/www"]