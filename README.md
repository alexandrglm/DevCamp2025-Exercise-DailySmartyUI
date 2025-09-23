# 2025 Update:

Since **DailySmarty** is not available, a fake API with the same schema needs to be used (De).  Unfortunately, the Devcamp.space API has no room for this, nor does it use the same schema as the now-defunct DailySmarty.

**json-server** seems to provide a quickest way to spin up a simple API for **GET** requests (as *DailySmarty* did). It does not replace routes, endpoints, or other mechanisms.  

The main objective is to complete the exercise; the mock API can later be refined or extended to follow standard REST API routes.

---

## FAKE API USAGE

1. Create a separate /server folder, like `server/mockDailySmartyAPI`

2. Create its own package.json, like:
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
    "json-server": "^0.17.4"
  }
}
```

3. Install json-server

```bash
npm install
```

4. Create a `db.json` file with sample data following the same schema described in the lessons for **DailySmarty**.

```json
{
    "posts": [

        {
            "id": 1,
            "title": "How to mock an API",
            "content": "Lorem Ipsum bla bla bla",
            "created_at": "2025-09-23T12:47:00Z",
            "url_for_post": "none",
            "associated_topics": ["API", "React", "Mock"],
            "post_links": [

                { "title": "React Docs", "url": "none" },
                { "title": "React Docs 2", "url": "none" }

            ]
        },
        {
            "id": 2,
            "title": "Blog post 2",
            "content": "Lorem Ipsum bla bla bla",
            "created_at": "2025-09-23T12:448:00Z",
            "url_for_post": "none",
            "associated_topics": ["JavaScript", "Refactoring", "Mock"],
            "post_links": [

                { "title": "React Docs", "url": "none" },
                { "title": "React Docs 2", "url": "none" }

            ]
        },
        {
            "id": 3,
            "title": "Another post about React",
            "content": "Lorem Ipsum bla bla bla",
            "created_at": "2025-09-23T12:48:00Z",
            "url_for_post": "none",
            "associated_topics": ["API", "React", "Mock"],
            "post_links": [

                { "title": "React Docs", "url": "none" },
                { "title": "React Docs 2", "url": "none" }

            ]
        }
    ]
}
```

5. To start DB server:
```bash
(py2env) dev@hostt:~/react-project-five/server/mockDailySmartyAPI$ npm run dev

> dailysmarty-mock-api@1.0.0 dev /react-project-five/server/mockDailySmartyAPI
> json-server --watch db.json --port 3001 --host localhost --delay 500


  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3001/posts

  Home
  http://localhost:3001

  Type s + enter at any time to create a snapshot of the database
  Watching...


```

6. Start another instance with the project server, and continue developing the interface while using a working API adapted to the required schema.

---

### API GET ENDPOINTS

#### Get ALL
GET http://localhost:3001/posts

#### Get SINGLE
GET http://localhost:3001/posts/1

#### Search Post By Title
GET http://localhost:3001/posts?title_like=React

#### Filter By Topic
GET http://localhost:3001/posts?associated_topics_like=JavaScript

---


---
# React/Redux/Router Starter Project

> Provided for the students of the [Bottega Code School](https://bottega.tech/)

*Fork from [es6-webpack2-starter](https://github.com/micooz/es6-webpack2-starter)*