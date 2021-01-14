const request = require('request');
const process = require('process');

const breed = process.argv[2];
request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (err, res, body) => {
  if (err) {
    console.log("Error: ", err);
    return;
  }
  const data = JSON.parse(body);
  if (data[Object.keys(data)[0]] === undefined) {
    console.log("Breed not found");
  } else {
    console.log(data[Object.keys(data)[0]].description);
  }
});