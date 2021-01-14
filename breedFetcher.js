const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (err, res, body) => {
    if (err) {
      callback(err, null);
    } else {
      const data = JSON.parse(body);
      if (data[Object.keys(data)[0]] === undefined) {
        err = "Breed not found";
        callback(err, null);
      } else {
        callback(null, data[Object.keys(data)[0]].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };