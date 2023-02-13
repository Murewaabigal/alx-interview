#!/usr/bin/node
/**
 * This is a script that prints all characters
 * of a Star Wars movie:
 */

const request = require('request');
const filmId = process.argv[2];
if (!filmId || isNaN(filmId)) {
  process.exit(1);
}
const url = `https://swapi-api.alx-tools.com/api/films/${filmId}`;
let characters = [];
const characterList = []; // empty list to hold the characters

// get the list of characters from the endpoint param
const getAllCharacters = async () => {
  await new Promise(resolve => request(url, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const json = JSON.parse(body);
    characters = json.characters; // get the character param
    resolve();
  }));
};

// get the name of characters using it endpoint
const getNameFromCharacter = async () => {
  if (characters.length <= 0) {
    console.error('Error: Oops, there is no characters available');
  } else {
    for (const ch of characters) {
      await new Promise((resolve, reject) => {
        request(ch, (error, response, body) => {
          if (error) {
            reject(error); // reject promise
          } else {
            const json = JSON.parse(body);
            characterList.push(json.name); // resolve promise
            resolve(); // resolve promise
          }
        });
      });
    }
  }
};

const displayNameCharacter = async () => {
  await getAllCharacters();
  await getNameFromCharacter();

  for (const cl of characterList) {
    if (cl === characterList[characterList.length - 1]) {
      process.stdout.write(cl);
    } else {
      process.stdout.write(cl + '\n');
    }
  }
};

displayNameCharacter();
