# Parkinson's Dashboard

Parkinson's Dashboard is a web application that provides two modules:

- UPDRS[^1]
- Sensor

Each module provides a friendly screen with charts and tables that helps the user to visualize collected data by one of the methods.

## Installing

Parkinson's Dashboard needs an API[^2] and a database to work properly. This repository only contains the front-end part of the project, so make sure to first configure your API and the database locally. They can be found here:

- [API](https://github.com/infocbra/parkinson-dashboard-api)
- [Database](https://github.com/infocbra/sidabi)

The project comes with a `.env-example` file that need to be configured before initialization

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

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

[^1]: Unified Parkinson's Disease Rating Scale
[^2]: Application programming interface
