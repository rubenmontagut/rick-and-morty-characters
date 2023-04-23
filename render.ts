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
    </style>
  </head>
  <body>
    <div class="character">
      <img src="${character.image}" />
      <div class="data">
        <div class="name">${character.name}</div>
        <div class="gender">${character.gender}</div>
      </div>
    </div>
  </body>
</html>`;
};
