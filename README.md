# Swagger UI

[![NPM version](https://badge.fury.io/js/swagger-ui.svg)](http://badge.fury.io/js/swagger-ui)

* [swagger-ui](https://www.npmjs.com/package/swagger-ui) is a traditional npm module intended for use in JavaScript web application projects that are capable of resolving dependencies (via Webpack, Browserify, etc).
* [swagger-ui-dist](https://www.npmjs.com/package/swagger-ui-dist) is a dependency-free module that includes everything you need to serve Swagger-UI in a server-side project, or a web project that can't resolve npm module dependencies.

For the older version of swagger-ui, refer to the [*2.x branch*](https://github.com/swagger-api/swagger-ui/tree/2.x).


## Import ALC Swagger S3 files
- git clone https://github.com/WPMedia/alc-swagger-ui.git
- run `npm install`
- run `npm run build`
- The following files will be generated in `/dist`:
    * swagger-ui-bundle.js
    * swagger-ui-bundle.js.map
    * swagger-ui-standalone-preset.js
    * swagger-ui-standalone-preset.js.map
    * swagger-ui.css
    * swagger-ui.css.map
    * swagger-ui.js
    * swagger-ui.js.map
- Log into WP-Arc AWS console and visit this url https://s3.console.aws.amazon.com/s3/buckets/arc-learning-center-static/docs/swagger/?region=us-east-1&tab=overview
- Replace the files above in this S3 directory and make files public

#### Usage
- [Installation](docs/usage/installation.md)
- [Configuration](docs/usage/configuration.md)
- [CORS](docs/usage/cors.md)
- [OAuth2](docs/usage/oauth2.md)
- [Deep Linking](docs/usage/deep-linking.md)
- [Limitations](docs/usage/limitations.md)
- [Version detection](docs/usage/version-detection.md)

#### Customization
- [Overview](docs/customization/overview.md)
- [Plugin API](docs/customization/plugin-api.md)
- [Custom layout](docs/customization/custom-layout.md)

#### Development
- [Setting up](docs/development/setting-up.md)
- [Scripts](docs/development/scripts.md)

