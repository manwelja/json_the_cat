const {fetchBreedDescription} = require("./breedFetcher");

//get user entered breed name
const breedName = process.argv.slice(2);

if (breedName.length > 1) {
  console.log('error: only one breed can be searched for at a time.');
  process.exit();
}
if (breedName.length === 0) {
  console.log('error: please enter a breed name.');
  process.exit();
}
fetchBreedDescription(breedName, (error, desc) => {
  //if error or no results returned
  if (error) {
    console.log(error);
    return;
  }
  console.log(desc);
  
});
