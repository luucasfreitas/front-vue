# Parkinson's Dashboard

Languages:

- [Portuguese](README.pt-br.md)

---

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

The `Dockerfile` also needs some changes in the environment variables.

```Docker
ENV VUE_APP_API_BASE_URL="YOUR_API_URL"       <------ Change to your API url
ENV VUE_APP_API_PORT="YOUR_API_PORT"          <------ Change to your API port
ENV VUE_APP_JWT_SECRET="YOUR_SECRET_KEY"      <------ Change to your Secret Key
```

> It's important to note that the secret key configured in this repository needs to be the same in the API configs.
> You can check out [RandomKeygen](https://randomkeygen.com/) to generate a secret key, or create your own.

If you want to use the `docker-compose.yml` you will also need to change some settings.

```yaml
dashboard-api:
  image: sensor-dashboard/sensor-dashboard-api:latest
  depends_on:
    - sidabi
  ports:
    - "5000:5000"
  networks:
    - dashboard-network
  volumes:
    - dashboard-volume:/var/files:ro
  environment:
    - DATABASE_URL=<YOUR_DB_URL>              <------ Change to your DB url
    - SECRET_KEY=<YOUR_SECRET_KEY>            <------ Change to your Secret Key
    - FILE_LOCATION=/var/files/
```

If you have problems using the `Dockerfile` container or the `docker-compose.yml` check your environment variables, probably the container it's not recognizing the IPs or DNS provided in the urls.

Finally, make sure to install the dependencies running:

```
npm install
```

> Note that to run this command you need `npm` installed on your machine.
> Make sure to check their configurations on [npm Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

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

[^1]: Unified Parkinson's Disease Rating Scale
[^2]: Application programming interface
