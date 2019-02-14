const request = require('request')
const moment = require('moment')
const chalk = require('chalk')

const unit = require('./unit')
const icon = require('./icon')

const argv = require('yargs').argv
const log = console.log

let apiKey = '67bed26060d75264abe48e06694c4b76'
let city = argv.city || 'DaNang'
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, (err, res, body) => {
	if (err) {
		log(err)
	} else {
		let weather = JSON.parse(body)

		let location = '🌏 ' + weather.name + ', ' + weather.sys.country
		let time = '📅 ' + moment().format('dddd h:mm a')
		let description = icon.weather(weather.weather[0].icon) + ' ' + 
		weather.weather[0].description
		let temp = '🌡️  ' + unit.toFahrenheit(weather.main.temp) + ' °F'
		let duringTemp = '🌡️  ' + unit.toFahrenheit(weather.main.temp_min) + 
		' - ' + unit.toFahrenheit(weather.main.temp_max) + ' °F'
		let humidity = '💦 ' +  weather.main.humidity + ' %'
		let wind = '💨 ' + unit.toMph(weather.wind.speed) + ' mph'

		let message = `
			${chalk.blueBright(location)}

			${chalk.greenBright(time)}

			${chalk.yellowBright(description)}

			${chalk.redBright(temp)}

			${chalk.magentaBright(duringTemp)}

			${chalk.cyanBright(humidity)}

			${chalk.whiteBright(wind)}
		`
		log(message)
	}
})