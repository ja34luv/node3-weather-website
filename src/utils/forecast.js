const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=82c6f48ca0a47bc43d6465a7300a165b&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          '. It is currently ' +
          body.current.temperature +
          ' degress out. It feels like ' +
          body.current.feelslike +
          ' degress out. Last Updated: ' +
          body.current.observation_time
      );
      console.log(body);
    }
  });
};

module.exports = forecast;
