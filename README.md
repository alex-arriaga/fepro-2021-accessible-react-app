# Cómo crear aplicaciones web inclusivas con React

En este taller aprenderemos cómo crear aplicaciones de una sola página (SPA por sus siglas en inglés), que incluyan
principios y recomendaciones de accesibilidad web.

Nos enfocaremos en ejemplos prácticos con React que ejemplifiquen cómo hacer que nuestras aplicaciones sean accesibles y
comprensibles para la mayor cantidad de usuarios.

- Demo usando [Vercel](https://vercel.com/)
  - [https://fepro-2021-accessible-react-app.vercel.app/](https://fepro-2021-accessible-react-app.vercel.app/)
- [Diapositivas del taller](https://github.com/alex-arriaga/fepro-2021-accessible-react-app/blob/main/slides/A.Arriaga-Inclusive-Applications-with-React.pdf)

## Pre-requisitos

- Instalar [NodeJS](https://nodejs.org/en/download/)
- Instalar algún IDE o editor de código. Recomendados: [WebStorm](https://www.jetbrains.com/webstorm/)
  , [Visual Studio Code](https://code.visualstudio.com/)/
- (Preferentemente) Instalar [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- Tener algún navegador moderno como Firefox o Google Chrome

## Creación de aplicación

Primero que nada, vamos a crear una aplicación
utilizando [Create React App](https://github.com/facebook/create-react-app).

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

## Conceptos

- [Introduction to Web Accessibility](https://webaim.org/intro/)
- [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/)
- [Web Content Accessibility Guidelines](https://webaim.org/standards/wcag/)
- [Making the Web Accessible](https://www.w3.org/WAI/)

## Explicaciones prácticas
- [WebAIM's WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist)
- [Section 508 Checklist (USA)](https://webaim.org/standards/508/checklist)

## Auditoría de Accessibilidad

Instalar extensión Axe

- [Firefox: Axe Dev Tools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)
- [Chrome: Axe Dev Tools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)

## Simulación de discapacidades visuales

- [NoCoffee for Firefox](https://addons.mozilla.org/en-US/firefox/addon/nocoffee/)

## ARIA (Accessible Rich Internet Applications)
- [Introduction to ARIA - Accessible Rich Internet Applications](https://webaim.org/techniques/aria/)
- [An overview of accessible web applications and widgets](https://developer.mozilla.org/en-US/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets#aria)
- [Using ARIA](https://w3c.github.io/using-aria/)

----

Las notas y enlaces de las secciones siguientes corresponden a material de referencia extra.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
