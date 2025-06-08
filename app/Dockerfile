# app/Dockerfile
FROM node:18

WORKDIR /workspaces/plathorm/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8081

CMD ["npm", "run", "dev"]