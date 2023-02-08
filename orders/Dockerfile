FROM node:14.17.4-alpine

WORKDIR /app
COPY package.json .
RUN rm -f package-lock.json && npm install --legacy-peer-deps --only=prod
COPY . .

CMD ["npm", "start"]