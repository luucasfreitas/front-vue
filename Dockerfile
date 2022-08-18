FROM node:lts-alpine as build-stage

ENV VUE_APP_API_BASE_URL="YOUR_API_URL"
ENV VUE_APP_API_PORT="YOUR_API_PORT"
ENV VUE_APP_JWT_SECRET="YOUR_SECRET_KEY"

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

