FROM node:18-alpine3.18

WORKDIR /myapp
COPY . .
RUN npm install

COPY . .
RUN npm run tsc
CMD npm start
