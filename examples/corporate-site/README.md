# corporate-site

samples of corporate site

## Project creation

### Start PostgreSQL

```console
make db/up
```

### execute command

```console
npx create-strapi-starter corporate-site gatsby-corporate
# Enter connection information
```

### Install Google Cloud Storage Plugin

```console
cd ./backend
npm i --save strapi-provider-upload-google-cloud-storage
```

## Deploy to Google Cloud

### Create Google Cloud Resources

```console
make terraform/apply
```
