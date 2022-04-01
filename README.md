# Getting Started with Usermaven and React

This project shows how to track events with Usermaven and React using Usermaven JS SDK.

The first thing you want to do is to install the usermaven-sdk-js library in your project - so add it using your package manager:

`yarn add @usermaven/sdk-js`

or

`npm install --save @usermaven/sdk-js`

After that see:

- [useUsermaven.tsx](src/useUsermaven.tsx)
- [App.tsx](src/App.tsx) — how those hooks are used with react-router to track pageviews.

## How to use

The app is based on a standard [create-react-app](https://create-react-app.dev/) template (with typescript support). Use
`yarn start` to preview an application

## Note

The above guide works is not compatible with React 18.0 due to breaking changes. We'll have a separate example for the React 18.0.
