FROM bitnami/nginx
COPY ./dist /app
EXPOSE 8080
