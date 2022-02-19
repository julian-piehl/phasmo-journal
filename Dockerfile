FROM node:16 AS builder

WORKDIR /usr/app
COPY . .

RUN npm install && \
	npm run build


FROM httpd:2.4

WORKDIR /usr/local/apache2/htdocs
COPY --from=builder /usr/app/dist .

VOLUME /usr/local/apache2/htdocs
