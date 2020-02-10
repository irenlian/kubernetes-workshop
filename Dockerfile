FROM node:12-alpine

ADD . ./build
WORKDIR /build

ARG ENVIRONMENT=development
RUN npm ci && npm run build

EXPOSE 3000
CMD npm run server
