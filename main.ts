import { writeFile } from "fs/promises";
import { render, renderCharacter } from "./render.js";
import { loadCharacters } from "./character.js";

const characters = await loadCharacters(100);
const html = render(characters);
await writeFile("characters.html", html);

const main = async () => {
  const characters = await loadCharacters(100);
  const html = render(characters);

  for (const character of characters) {
    const characterHtml = renderCharacter(character);
    await writeFile(`${character.id}.html`, characterHtml);
  }
};

main();
