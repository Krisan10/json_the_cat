const request = require('request');
const args = process.argv;
const catBreed = args[2];

const breedFetcher = function(breedName, callback) { // A callback function to handle the results or errors.
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback("Error: " + error, null);
    } else {
      const data = JSON.parse(body); //The response is parsed as JSON, and if there is an error, the callback is called with an error message.

      if (data.length > 0) {
        callback(null, data[0].description);
      } else {
        callback("Breed does not exist!", null);
      }
    }
  });
};

if (catBreed) {
  breedFetcher(catBreed, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  });
} else {
  console.log("Please select a cat.");
}