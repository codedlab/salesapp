FROM node:14.17.4-alpine

WORKDIR /app
COPY package.json .
RUN npm install --legacy-peer-deps --only=prod
COPY . .

CMD ["npm", "start"]