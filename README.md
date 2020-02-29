# Online service

## Docs - Swagger / OpenAPI

Swagger

```
http://localhost:6001/api/
```

OpenAPI Schema

```
http://localhost:6001/api-json
```

## Installation

```bash
$ yarn
```

## Configuration

```bash
$ cp .env.example .env
```

then edit `.env` file as you want

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docker/Docker Compose

```bash
$ .postgres.env.example .postgres.env
```

Set appropriate keys in `.env`, and then

```bash
$ docker-compose up --build
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
