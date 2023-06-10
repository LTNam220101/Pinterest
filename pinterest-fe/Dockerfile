# build stage
FROM node:18-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
ENV REACT_APP_REST_ENDPOINT=""
RUN npm run build

# production stage
FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]