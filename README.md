# Cómo crear aplicaciones web inclusivas con React
En este taller aprenderemos cómo crear aplicaciones de una sola página (SPA por sus siglas en inglés), 
que incluyan principios y recomendaciones de accesibilidad web. 

Nos enfocaremos en ejemplos prácticos con React que ejemplifiquen cómo hacer que nuestras aplicaciones 
sean accesibles y comprensibles para la mayor cantidad de usuarios.

## Pre-requisitos
- Instalar [NodeJS](https://nodejs.org/en/download/)
- Instalar algún IDE o editor de código. Recomendados: [WebStorm](https://www.jetbrains.com/webstorm/), [Visual Studio Code](https://code.visualstudio.com/)/
- (Preferentemente) Instalar [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## Creación de aplicación

Primero que nada, vamos a crear una aplicación utilizando [Create React App](https://github.com/facebook/create-react-app).
```
npx create-react-app fepro-2021-react-app
cd fepro-2021-react-app
yarn install
yarn start
```

## Estructura básica

```
.
├── node_modules        # Dependencias de nuestra aplicación
├── package.json        # Archivo principal para administración de dependencias y "scripts"
├── public              # Archivos listo para "deployment" en Internet de nuestra aplicación
├── src                 # Código fuente de nuestra aplicación
└── yarn.lock           # Registro de dependencias administradas con Yarn
```


## Compilación y "previsualización" de nuestra aplicación

Iniciaremos nuestra apliación con:
```
yarn start
```
Y ahora estamos listos para visitar: [http://localhost:3000](http://localhost:3000).

----

Las notas y enlaces de las secciones siguientes corresponden a material de referencia extra.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
