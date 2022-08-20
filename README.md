# LucidLink Frontend Demo

This application covers the frontend part of the task. It is built with Vue.js v2, vuetify and a few plugins for validation, API requests, etc.
For more information, please see the sections on the left side.

<h3>Settings:</h3>
<p>Please see .env file and configure the backend URL in case you want to play around</p>

## Project setup
If you want to play around 
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

<h2>If you want to use the dockerfile:</h2>
<code>docker build -t lulife .</code>
<code>docker run -p8888:80 lulife</code>
<p>Note that .env file is being compiled into the source code and is NOT loaded on the fly here, so if you need to override API URL from .env, you need to rebuild the docker image as well</p>
