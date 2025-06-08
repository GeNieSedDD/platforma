# api/Dockerfile
FROM node:20

WORKDIR /workspaces/plathorm/api

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["tail", "-f", "/dev/null"]