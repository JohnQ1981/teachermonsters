FROM node:16.17.0

WORKDIR /code1

#COPY package.json package.json
#COPY package-lock.json package-lock.json


RUN npm install

COPY . .

CMD ["npm","run","start"]
