const request = require('request');

const geocode = (address, callback) => {
    const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoianNhcnRoYWsiLCJhIjoiY2tjZ2N0aHZqMHF0dzJ5cGJsN3FvZ2xyNyJ9.DGgyzgiakw9HJPtg9fJZGw`;

    request({  url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to location services.", undefined)
        } else if (body.features.length === 0) {
            callback("Could not find the location, try another search", undefined)
        } else {
            const data = {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name,
            }
            callback(undefined, data);



        }
    });


}

module.exports = geocode;