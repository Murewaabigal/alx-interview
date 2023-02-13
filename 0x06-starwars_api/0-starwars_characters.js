#!/usr/bin/node
/* Write a JavasScript script that prints all characters of a
Star Wars movie using the request module
*/

const request = require('request');
const filmId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${filmId}`;

request(url, async (err, response, body) => {
  if (err) {
    console.log(err);
  }
  for (const characterId of JSON.parse(body).characters) {
    await new Promise((resolve, reject) => {
      request(characterId, (err, _, character) => {
        if (err) {
          console.log(err);
        }
        console.log(JSON.parse(character).name);
        resolve();
      });
    });
  }
});
