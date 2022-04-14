const fetchBreedDescription = function(breedName, callback) {

  const request = require('request');

  //send request to the catapi
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, callback);
};

module.exports = {fetchBreedDescription};