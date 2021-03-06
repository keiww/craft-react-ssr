# Craft React SSR

> Add server side rendering base on `create-react-app` structure

## Steps

```
create-react-app project
cd project
yarn eject
yarn add react-router-dom redux react-redux redux-thunk
```

Create a basic web app using router and redux.

```
src
├── App.jsx
├── components
│   └── Header.jsx
├── index.js
├── pages
│   ├── About.jsx
│   └── Home.jsx
├── registerServiceWorker.js
├── routes.js
├── store
│   ├── actions.js
│   ├── index.js
│   └── reducers.js
├── styles
│   └── main.css
└── utils
    └── api.js
```

See https://github.com/keiww/craft-react-ssr/tree/basic-web-app form source code.

## Add Koa Server

```
yarn global add babel-cli
yarn add koa nodemon babel-preset-env isomorphic-fetch babel-register ignore-styles
mkdir server
```

```
server
├── assets.js
├── helpers.js
├── index.js
├── render.js
└── template.html
```

See https://github.com/keiww/craft-react-ssr/tree/add-koa-server form source code.
