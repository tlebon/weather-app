# Welcome to Weather To Go

[![Netlify Status](https://api.netlify.com/api/v1/badges/bf7429c7-588e-44a3-8145-49e5ce9af33b/deploy-status)](https://app.netlify.com/sites/musing-einstein-5bf189/deploys)

![main-screen](screenshots/live.png)

This is a simple weather app made in react with Typescript using the [OpenWeatherMap API](https://openweathermap.org/api/one-call-api#how).

## Design Decisions

The app was quickly boostrapped with [Create React App](https://github.com/facebook/create-react-app), with typescript added. 

The App was originally storyboarded in Figma, you can see the designs [here](https://www.figma.com/file/UG53tJM60rPdiTw6LxFqsn/Weather-app?node-id=0%3A1) or in the [screenshots folder](screenshots)


As the open weather map api charges 40$ for a month to get the nice endpoints with longer time scales +town recognition (unless I misread), I simply chained two calls together to save time. 

It also allows options for icons for different weather. I elected to design my own simple ones instead.


The project is deployed on netlify, you can see a live instance running [here](https://musing-einstein-5bf189.netlify.app/).

Your free openweathermap APIKEY should go in your .env file if you would like to run locally, please refer to the .env.example file.

## Areas for improvement
As with any project theres several things that could be improved.

I elected to do the ui from scratch, without using a framework. While i like this decision, it could be optimised more. 



## Available Scripts

In the project directory, you can run:

### `npm install` - this will install any packages

### `npm start` - this will start the project

### `npm test` - this will run some tests

### `npm run lint` - this will lint any errors related to my linter settings

### `npm run build` - this will build for production, i dont think youll need that. 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More About CRA

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
