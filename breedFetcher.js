const fetchBreedDescription = function(breedName, callback) {

  const request = require('request');

  //send request to the catapi
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) callback(error, null);
    
    if (response.statusCode !== 200) {
      callback(Error(`error: Status Code ${response.statusCode} when fetching ${breedName}`), null);
      return;
    }
    if (body === '[]') {
      callback(`error: ${breedName} not found`, null);
      return;
    }
    
    //if no error, parse the result
    const data = JSON.parse(body);
    callback(null, data[0].description);
  });
};

module.exports = {fetchBreedDescription};