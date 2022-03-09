FROM node:14.17-alpine3.14

WORKDIR /app 
COPY package.json .
RUN npm install --legacy-peer-deps --only=prod
COPY . . 

CMD ["npm", "run", "dev"]