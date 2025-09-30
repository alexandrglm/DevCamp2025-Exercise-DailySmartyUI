# 2025 Update

**DailySmarty** API is defunct. This project uses `json-server` to mock the original schema for GET requests only.

## Differences between Development vs Production

**Development:**
- Local json-server on `localhost:3001`
- Run `npm run dev:api` and `npm run dev:app` in separate terminals (or use `npm run dev:full` with npm-run-all)
- Uses `.env.local` with `REACT_APP_API_URL=http://localhost:3001`

**Production (Heroku):**
- Separate Heroku app running json-server
- Environment variable `REACT_APP_API_URL` set via `heroku config:set` using a separate API URL.

---

## Mock API Setup (Separate Heroku App)

### Local Development
```bash
mkdir dailysmarty-mock-api && cd dailysmarty-mock-api
npm init -y
npm install json-server cors
```

### server.js for mockDailySmartyAPI
```js
// DailySmarty MockAPI for HEROKU

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults({
    static: './public'
});

// CORS dolor de cabeza
server.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    next();
});

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {

    console.log(`JSON Server running on port ${PORT}`);

});
```

### packages.json
```json
{
  "name": "dailysmarty-mock-api",
  "version": "1.0.0",
  "description": "DevCamp -> Mock DailySmarty API",
  "main": "server.js",
  "scripts": {
    "start": "json-server --watch db.json --port 3001 --host localhost",
    "dev": "json-server --watch db.json --port 3001 --host localhost --delay 500"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "json-server": "^0.17.4"
  }
}

```
### Procfile
```js
web: node server.js
```
---

### Deploy 
```
git init && git add . && git commit -m "API setup"
heroku create <NAME_FOR_API_PROJECT_ON_HEROKU>
git push heroku main
```

---

### Modifications on this project

#### 1. Creating an .env
```
REACT_APP_API_URL=<URL_FOR_API_PROJECT_ON_HEROKU> # Avoid using final / slash here
```

#### 2. Add `**/.env` to `.gitignore`

#### 3. Add .env var into `./scr/actions/index.js`
```js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
...
axios.get(`${API_URL}/posts`)
...
axios.get(`${API_URL}/posts?title_like=${query}`)

```

#### 4. For OLD REact version, git commit  first, then add .env vars
```bash
git push heroku main
```

### 5. Once heroku has sucessfully deployed
```bash
heroku config:set REACT_APP_API_URL=<API_URL_FROM_HEROKU> -a <DAILYSMART_UI_HEROKU_PROJECT>
```
---

# Heroku Deploy Issues (2025)

## node-sass incompatibility with Node 22:
> As seen in other projects like the react-portfolio, replace `node-sass` with sass.

## Redux dependency conflicts
> Enable LEGACY PEER DEPS on Heroku's npm config
```bash
heroku config:set npm_config_legacy_peer_deps=true
```

---

# Available API ENDPOINTS

#### Get ALL
GET http://localhost:3001/posts

#### Get SINGLE
GET http://localhost:3001/posts/1

#### Search Post By Title
GET http://localhost:3001/posts?title_like=React

#### Filter By Topic
GET http://localhost:3001/posts?associated_topics_like=JavaScript

---

# Self-Evaluation

### Self-Detected Errors

* **Spelling/typing**: Misspelled variables (`resulst`), function names (`handleSearchbarSubmit` vs. `handleSearchbarSubmitQuery`), props (`osSubmit`), and even `constructor`. These caused rendering failures, runtime errors, and cryptic messages.
* **Config mistakes**: Heroku env var typo (`npm_config_legacy_peer_deeps` instead of `deps`) wasted multiple deploys.
* **Conceptual gaps**: Wrong parameter names, incorrect Redux state mapping, missing `return` in JSX, and forgetting to import `ResultsPosts`.
* **CSS issue**: Universal selector (`*::before`) broke FontAwesome icons.


### Patterns

* Majority of problems came from **typos**.
* Config errors persisted because changes weren’t verified.
* Some bugs showed an incomplete grasp of data flow (e.g. Redux mapping).
* Most time lost: Heroku variable typo (slow deploy cycle).
* Hardest to trace: CSS selector breaking icons.

### How to Avoid These Errors

* Double-checking config vars immediately after setting.
* Using linters to catch undefined variables/functions.
* Testing  components in isolation before integration.
* Validating assumptions about data structures (Redux state shape).


---
# React/Redux/Router Starter Project

> Provided for the students of the [Bottega Code School](https://bottega.tech/)

*Fork from [es6-webpack2-starter](https://github.com/micooz/es6-webpack2-starter)*
