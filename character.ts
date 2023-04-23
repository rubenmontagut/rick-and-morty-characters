export class Origin {
  constructor(public name: string, public url: string) {}
}

export class Location {
  constructor(public name: string, public url: string) {}
}

export class Character {
  constructor(
    public id: number,
    public name: string,
    public status: "Alive" | "Dead" | "unknown",
    public species: string,
    public type: string,
    public gender: "Female" | "Male" | "Genderless" | "unknown",
    public origin: Origin,
    public location: Location,
    public image: string,
    public episode: string[],
    public url: string,
    public created: Date
  ) {
    this.created = new Date(created);
  }
}

export const loadCharacters = async (n: number) => {
  let characters: Array<Character> = [];
  for (let i = 1; characters.length < n; i++) {
    let response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${i}`
    );
    const { results } = (await response.json()) as { results: any[] };
    for (const {
      id,
      name,
      status,
      species,
      type,
      gender,
      origin,
      location,
      image,
      episode,
      url,
      created,
    } of results) {
      characters.push(
        new Character(
          id,
          name,
          status,
          species,
          type,
          gender,
          origin,
          location,
          image,
          episode,
          url,
          created
        )
      );
    }
  }
  return characters;
};
