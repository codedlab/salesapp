FROM node:14.17.4-alpine:3.14.2

WORKDIR /app 
COPY package.json .
RUN npm install --legacy-peer-deps --only=prod
COPY . . 

CMD ["npm", "run", "dev"]