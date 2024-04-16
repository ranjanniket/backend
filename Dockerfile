FROM node:slim

WORKDIR /app

COPY . .

RUN npm i && \
    npm i nodemon

<<<<<<< HEAD:code/server/Dockerfile
=======
run cd client/ && \
	npm i
#backend
>>>>>>> origin/dev:code/Dockerfile
EXPOSE 8080

CMD ["npm", "run", "dev"]

