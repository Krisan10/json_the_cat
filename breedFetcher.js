const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback("Error: " + error, null);
    } else {
      const data = JSON.parse(body);

      if (data.length > 0) {
        callback(null, data[0].description);
      } else {
        callback("Breed does not exist!", null);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription
};