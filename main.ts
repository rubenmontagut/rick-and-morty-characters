import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadCharacters } from "./character.js";

const characters = await loadCharacters(100);
const html = render(characters);
await writeFile("users.html", html);
