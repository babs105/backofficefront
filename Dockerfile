FROM node:18-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY package-lock.json .
RUN npm install # -g npm@9.3.1
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
	