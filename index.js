const request = require('request')
const argv = require('yargs').argv
const moment = require('moment')

let apiKey = '67bed26060d75264abe48e06694c4b76'
let city = argv.city || 'DaNang'
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, (err, res, body) => {
	if (err) {
		console.log(err)
	} else {
		let weather = JSON.parse(body)

		let location = '🌏 ' + weather.name + ', ' + weather.sys.country
		let time = '📅 ' + moment().format('dddd h:mm a')
		let description = '📒 ' + weather.weather[0].description
		let temp = '🌤️  ' + Math.round(weather.main.temp * 9/5 - 459.67) + ' °F'
		let duringTemp = '🌡️  ' + Math.round(weather.main.temp_min * 9/5 - 459.67) + ' - ' + Math.round(weather.main.temp_max * 9/5 - 459.67) + ' °F'
		let humidity = '💦 ' +  weather.main.humidity + ' %'
		let wind = '💨 ' + Math.round(parseInt(weather.wind.speed) * 2.23694) + ' mph'

		let message = location + '\n' + time + '\n' + description + '\n' + temp + '\n' + duringTemp + '\n' + humidity + '\n' + wind
		console.log(message)
	}
})