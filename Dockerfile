#FROM alpine
#
#CMD ["echo", "hello world"]

#FROM alpine
#
#WORKDIR /
#
#ADD . /
#
#CMD ['npm', 'start']
#
#EXPOSE 8080
FROM node:slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN cd /usr/src/app/

RUN npm install

COPY . /usr/src/app

CMD ['npm', 'start']

EXPOSE 8080



