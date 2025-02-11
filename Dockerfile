FROM node:18-slim

RUN apt update && apt install -y curl

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /app

USER node

EXPOSE 3000 5173

CMD ["npm", "run", "dev"]
