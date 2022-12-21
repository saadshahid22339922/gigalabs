# eFuse

## _Gigalabs development task_

[![N|Javascript](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodejs.org/en/)

E-Fuse is a minor replica of a twitter.

## Features

- You could create your users
- Each user have access to do multiple tweets
- React or comment on others post

## Tech

E-Fuse uses a number of open source projects to work properly:

- [ReactJS] - HTML enhanced for web apps!
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Docker] - To virtualize your whole project
- [Redis] - An in memory data structure store

And of course Dillinger itself is open source with a [public repository][efuse]

## Installation

The E-Fuse has been divided into 2 projects Backend and Frontend

Clone Repository:

```sh
git clone https://github.com/saadshahid22339922/gigalab_temp.git
```

**FrontEnd!**

Here is the link for deployed frontend [Click Here][frontend]

The default port for frontend project will be 3000. To run project locally

```sh
cd frontend
npm start
```

To build project:

```sh
npm run build
```

**BackEnd!**

The default port for frontend project will be 5000. To run project locally

```sh
cd backend
```

Running using Docker Compose. This will run up 3 containers, Express, Redis and MongoDB. If the images aren't there it will build.

```sh
npm run dev
```

To Run project locally first create and [.env]. List down these env with your local service paths and then run

- REDIS_URL=redis://redis
- NODE_ENV=development
- PORT=5000
- DB_CONNECTION_STRING=mongodb://mongodb:27017/labs

```sh
npm start
```

_Please find below the link to our published **Public Postman Collection**_
[Postman Collection][collection]

## Enhancements and Optimizations (Notes)

**FrontEnd**

For frontend the implemetation is till UI level. There are no working functionalities due to multiple reasons

- Our UI doesn't sync-up with our backend endpoints. Like to manage comments and likes
- Temporary way to implement was using browser local storage, but was time taking process

To deploy frontend [Netlify] was used because in [Vercel] pakistan is listed as restricted country.
All APIS structure has been implemented on frontend but isn't synced with the UI

Material UI has been used for fast development.

**BackEnd**

Endpoints for backend are as listed below

| API | Endpoint |
| ------ | ------ |
| User/GET | user/:id |
| User/POST | user/ |
| User/PATCH | user/:id |
| User/GETALL | user/ |
| Post/GET | post/:id |
| Post/POST | post/ |
| Post/PATCH | post/:id |
| Post/GETALL | post/ |

To Enhance backend [Redis] has been used and all GET request are managed by it.

There are further enhancements for backend

- Request JSON validator
- Routes and Services Versioning
- Creted Redis as Middleware
- Seprated server and app config file

## License

MIT

[reactjs]: https://reactjs.org/
[frontend]: https://63a293103f0aa226bf00f329--capable-marigold-04d79b.netlify.app/
[express]: http://expressjs.com
[node.js]: http://nodejs.org
[redis]: https://redis.io/
[docker]: https://www.docker.com/
[efuse]: https://github.com/saadshahid22339922/gigalab_temp
[collection]: https://www.postman.com/restless-capsule-838874/workspace/gigalabs/collection/17093993-434b0919-ae94-4873-872b-268a68e8d4ce?ctx=documentation
