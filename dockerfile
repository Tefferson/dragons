FROM node:12.13.0-alpine as build
ARG BUILD_MODE
COPY . .
RUN yarn install
RUN npm run "build:${BUILD_MODE}"

FROM nginx:1.17.5-alpine
COPY --from=build /build /usr/share/nginx/www
COPY --from=build /nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]