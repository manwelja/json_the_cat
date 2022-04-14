const {fetchBreedDescription} = require("./breedFetcher");

//get user entered breed name
const breedName = process.argv.slice(2);

if (breedName.length > 1) {
  console.log('error: only one breed can be searched for at a time.');
  process.exit();
}
fetchBreedDescription(breedName, (error, desc) => {
  //if error or no results returned
  if (error) {
    console.log('Error fetch details:', error);
  }
  //if the body field is [], no results were found
  if (desc.body === '[]') {
    console.log('Error fetch details: breed not found');
  } else {
    //if no error, parse the result
    const data = JSON.parse(desc.body);
    console.log(data[0].description);
  }
});
