const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url =
        `http://api.weatherstack.com/current?access_key=9e29c49d0136b54a80e6d13fe4764894&query=${latitude},${longitude}&units=m`;

    request({
        // url: url, devient
        url,
        json: true
    }, (error, {
        body
    }) => { // { body } était avant response
        if (error) {
            callback("Unable to connect to weather service !", undefined);
        } else if (body.error) {
            callback("Unable to find location !", undefined);
        } else {
            callback(undefined, {
                weather: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            })
        }
    });
}

module.exports = forecast