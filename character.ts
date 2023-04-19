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
  ) {}
}
