const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      //we expect no error for thie scenerio
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      
      const data = JSON.parse(desc.body);
      //compare returned description
      assert.equal(expectedDesc, data[0].description.trim());

      done();
    });
  });
  it('returns an error for an invalid/non existent breed', (done) => {
    fetchBreedDescription('', (err, desc) => {
      //we expect an empty body array as the item was not found
      assert.equal(desc.body, '[]');
      done();
    });
  });
});
