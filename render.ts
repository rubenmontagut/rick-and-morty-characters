import { Character } from "./character.js";

const head = (title: string) => `
  <html>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #121212;
        }
        h1{
          text-align: center;
          font-family: sans-serif;
          font-size: 4rem;
          margin: 4rem 0;
          color: white;
        }
        a{
          text-decoration: none;
        }
        .character-list {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin: 2rem auto;
          max-width: 80%;
          justify-content: center;
        }

        .character {
          font-family: sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.4rem;
          width: calc((100% - 10rem) / 6);
          margin-left: 1rem;
        }
        .character img {
          width: 10rem;
          height: 10rem;
          border-radius: 30%;
          margin-right: 0.7rem;
          margin-bottom: 1rem;
          border: 2px solid white;
        }
        .character .name {
          font-weight: bold;
          color: white;
        }
        .character .gender {
          font-family: monospace;
          color: white;
        }
      </style>
    </head>`;

const renderCharacters = (characters: Array<Character>) => {
  let html = `<div class="character-list">`;
  for (const character of characters) {
    html += `<div class="character">
      <a href="/${character.id}.html">
        <img src="${character.image}" />
        <div class="data">
          <div class="name">${character.name}</div>
          <div class="gender">${character.gender}</div>
        </div>
      </a>
    </div>`;
  }
  html += "</div>";
  return html;
};

export const render = (characters: Array<Character>) => {
  return `
<html>
  ${head("Character List")}characters
  <body>
    <h1>Rick and Morty Characters</h1>
    ${renderCharacters(characters)}
  </body>
</html>`;
};

export const renderCharacter = (character: Character) => {
  return `
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${character.name}</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #121212;
      }
      .character {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 2rem auto 0 auto;
        max-width: 80%;
      }
      .character img {
        width: 20rem;
        height: 20rem;
        border-radius: 30%;
        margin-bottom: 2rem;
        border: 2px solid white;
      }
      .character .name {
        font-family: sans-serif;
        font-size: 3rem;
        font-weight: bold;
        color: white;
        margin-bottom: 2rem;
        margin-top: 0;
      }
      .character .data {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
      }
      .character .data p {
        font-family: monospace;
        font-size: 2rem;
        color: white;
        margin: 0;
      }
      .character .data .label {
        font-weight: bold;
        color:green;
        margin-right: 0.5rem;
      }
    </style>
  </head>
  <body>
    <div class="character">
      <img src="${character.image}" />
      <h1 class="name">${character.name}</h1>
      <div class="data">
        <p><span class="label">Status:</span> ${character.status}</p>
        <p><span class="label">Species:</span> ${character.species}</p>
        <p><span class="label">Gender:</span> ${character.gender}</p>
        <p><span class="label">Origin:</span> ${character.origin.name}</p>
        <p><span class="label">Location:</span> ${character.location.name}</p>
        <p><span class="label">Episodes:</span> ${character.episode.length}</p>
        <p><span class="label">Created:</span> ${character.created.toDateString()}</p>
      </div>
    </div>
  </body>
</html>`;
};
