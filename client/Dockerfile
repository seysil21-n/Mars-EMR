FROM nginx:latest

WORKDIR /usr/src/client

RUN apt-get update -y && apt-get upgrade -y

RUN apt-get install systemctl -y

COPY ./build ./

COPY ./nginxConfig/client.conf /etc/nginx/conf.d

RUN systemctl reload nginx

RUN nginx -t

EXPOSE 80

