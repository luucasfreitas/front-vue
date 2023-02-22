FROM node:lts-alpine as build-stage

ENV VUE_APP_API_BASE_URL="http://localhost"
ENV VUE_APP_API_PORT="5000"
ENV VUE_APP_JWT_SECRET="admin"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ .

RUN npm run build

FROM nginx as production-stage

RUN mkdir /app

COPY --from=build-stage /app/dist /app

COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]

