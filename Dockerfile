FROM node:14.17.6-stretch

WORKDIR /home/back

COPY package*.json ./

RUN npm -v

RUN npm i

COPY . . 

CMD ["npm", "start"]

EXPOSE 3001