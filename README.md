# Netflix Clone

This is a Netflix clone made using an API from [TMDB](https://themoviedb.org). This was made using the `React Framework`.

## Getting Started

### Setup

1. Git clone this project to your computer.
2. In the terminal run `npm install`.
   - If you don't have npm, then install [npm](https://www.npmjs.com/get-npm).
3. The above step should have installed all the dependencies.
4. The setup is now complete.

### Available Scripts

### `npm start`

This script start the program and opens the Netflix clone on the default browser.

### `npm build`

This script takes the code and builds it into a program that can be used to deploy it on a server.

### `npm eject`

This script un-abstracts the modules to enable the user to achieve complex things.

### API Key

The API Key has to be fetched from [TMDB](https://api.themoviedb.org).

> create an account in TMDB.
>
> The API key can be found under the profile settings.

Create a file `API_KEY.js` under the `src` folder.

Paste the code below into the `API_KEY.js` file:

    const API_KEY = "<API Key>";
    export default API_KEY

Replace the `<API KEY>` with the API key copied from [TMDB](https://api.themoviedb.org).

## Features

- The user is shown rows of movie posters from different genres on the screen.
- The user can click on any movie to know more about it. A pop-up windows display more information about the selected movie.
- After the pop-up window shows up, clicking anywhere will hide the pop-up window.

The clone can be displayed on any device as it is `responsive`.

## Copyright

All the images used are fetched from the TMDB API.

The Netflix logo and favicon is downloaded from [Google](https://google.com).
