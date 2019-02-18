# weather-cli

![](https://img.shields.io/david/jade28/weather-cli.svg?style=flat-square)
![](https://img.shields.io/github/license/jade28/weather-cli.svg?style=flat-square)
![](https://img.shields.io/badge/awesome-yes-brightgreen.svg?style=flat-square)

> 🚀 Awesome ☀️ weather for terminal.

![weather](https://user-images.githubusercontent.com/34389409/51784661-ee5a4500-217e-11e9-9373-e67bab6ce32c.gif)

## Installation

```
$ npm install
```

You need 3 API Keys to run app:
* [OpenWeatherMap](https://openweathermap.org/api)
* [ipfind](https://ipfind.com/)
* [World Weather Online](https://www.worldweatheronline.com/developer/)

Create `.env` file:

```
API_KEY_WEATHER=*************************
API_KEY_LOCATION=*************************
API_KEY_TIME=*************************
```

## Usage

### Default

Get weather at your location.

```
$ node index.js
```

### Option

```
$ node index.js --city city-name
```

Example: `$ node index.js --city DaNang`

Enjoy 😜

## License

MIT
