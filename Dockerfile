FROM php:7.4-apache

RUN docker-php-ext-install mysqli pdo pdo_mysql json \
    && a2enmod rewrite


FROM node:latest
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
