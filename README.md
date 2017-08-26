# esioci-ui

> esioCI user interface

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev or node server.js

# build for production with minification
npm run build

# lint all *.js and *.vue files
npm run lint

# run unit tests
npm test
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).

## Build dockr container with esioci-ui
1. Build application: `npm run build`
1. Build docker container `docker build -t esioci-ui:version .`
