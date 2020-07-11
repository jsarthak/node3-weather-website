const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4e9927d082f8d0b899d490302f33e7f8`;

    request({  url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (body.message) {
            callback('Unable to find location', undefined);
        }
        else {
            callback(undefined, `Current temperature is ${body.main.temp}`);

        }
    });

}

module.exports = forecast;