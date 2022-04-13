const request = require('request');

//get user entered breed name
const searchBreed = process.argv.slice(2);
if (searchBreed.length > 1) {
  console.log('error: only one breed can be searched for at a time.');
  process.exit();
}
//send request to the catapi
request(`https://api.thecatapi.com/v1/breeds/search?q=${searchBreed}`, (error, response, body) => {
  
  //if there was an error with the API request, log it and exit
  if (error) {
    console.log('error:', error);
    process.exit();
  }
  //if no error, parse the result
  const data = JSON.parse(body);

  //if the resulting object is empty display breed not found, otherwise print description
  if (data.length === 0) {
    console.log('error: the requested breed was not found');
    process.exit();
  } else {
    console.log(data[0].description);
  }
});
