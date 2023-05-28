FROM node:16.18.1-alpine

WORKDIR /usr/src/app
USER root
COPY package.json ./
COPY ./ ./
RUN npm install 
EXPOSE 5173

# start app
CMD ["npm","run","dev"]
