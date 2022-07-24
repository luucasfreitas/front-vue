# Parkinson's Dashboard

Parkinson's Dashboard is a web application that provides two modules:

- UPDRS[^1]
- Sensor

Each module provides a friendly screen with charts and tables that helps the user to visualize collected data by one of the methods.

## Installing

Parkinson's Dashboard needs an API[^2] and a database to work properly. This repository only contains the front-end part of the project, so make sure to first configure your API and the database locally. They can be found here:

- [API](https://github.com/infocbra/parkinson-dashboard-api)
- [Database](https://github.com/infocbra/sidabi)

The project comes with a `.env-example` file that need to be configured
before initialization:

```Shell
VUE_APP_API_BASE_URL=<your_api_host>
VUE_APP_API_PORT=<your_api_port>

VUE_APP_JWT_SECRET=your_secret
```
After changing the variables values to your current configurations make sure to rename the file to `.env`.

Also make sure to install the dependencies running:

```
npm install
```
> Note that to run this command you need `npm` installed on your machine.
Make sure to check their configurations on [npm Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

> If you want to check another alternative to use `npm` take a look at the 'Using NVM' section.
### Running

---

Let's start by compiling the project and hot-reloading for development:

```
npm run serve
```

Then, the server should be available at http://localhost:8080/.

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

[^1]: Unified Parkinson's Disease Rating Scale
[^2]: Application programming interface
