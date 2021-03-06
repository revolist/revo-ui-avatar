![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

<img src="./preview-avatar.png"/>

[Demo sample](https://jsfiddle.net/m2a2x/p237fom9/11/)

# Revo ui avatar

This is an avatar webcomponent to generate avatars through out all frameworks.

It displays an avatar image and if none it generate avatar based on name or initials if any provided. 
Works in any major framework or with no framework at all.

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.


## Getting Started

```bash
npm i @revolist/revo-ui-avatar  --save
```

```bash
<revo-ui-avatar name="Dodge" is-light="false" background-color-opacity="0.5"></revo-ui-avatar>
```
## Using this component

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/@revolist/revo-ui-avatar@latest/dist/revo-ui-avatar/revo-ui-avatar.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Put a script tag similar to this `<script src='node_modules/@revolist/revo-ui-avatar/dist/revo-ui-avatar.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Webpack or Modules
`import { applyPolyfills, defineCustomElements } from '@revolist/revo-ui-avatar/loader';`

`applyPolyfills` if headed to IE11 support.
// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

### Framework webcomponent integration
Read more about per framework webcomponent integration [here](https://stenciljs.com/docs/overview).


# Revo-ui-avatar



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                  | Description                                                                           | Type      | Default     |
| ------------------------ | -------------------------- | ------------------------------------------------------------------------------------- | --------- | ----------- |
| `backgroundColor`        | `background-color`         | The background color to use. If none and @randomColor = true, generate automatically. | `string`  | `undefined` |
| `backgroundColorOpacity` | `background-color-opacity` | The background color opacity.                                                         | `number`  | `undefined` |
| `circle`                 | `circle`                   | Is circle                                                                             | `boolean` | `true`      |
| `color`                  | `color`                    | The font color to use if no image is provided.                                        | `string`  | `'white'`   |
| `initials`               | `initials`                 | Force the displayed initials by overriding the computed ones.                         | `string`  | `undefined` |
| `inline`                 | `inline`                   | Uses inline-flex instead of flex                                                      | `boolean` | `false`     |
| `isLight`                | `is-light`                 | Is main background is light                                                           | `boolean` | `true`      |
| `letters`                | `letters`                  | Letters count per avatar                                                              | `number`  | `2`         |
| `name`                   | `name`                     | The title that will be used to compute user initial.                                  | `string`  | `'?'`       |
| `randomColor`            | `random-color`             | Generate random color                                                                 | `boolean` | `true`      |
| `size`                   | `size`                     | Rectangle size                                                                        | `number`  | `40`        |
| `src`                    | `src`                      | Path to the avatar image to display.                                                  | `string`  | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
