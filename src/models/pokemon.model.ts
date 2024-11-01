export class PokemonModel {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public abilities: string[],
    public height: number,
    public weight: number,
    public stats: { name: string, value: number }[],
  ) { }


  static fromJson(json: any): PokemonModel {
    const abilities = json.abilities.map((ability: any) => ability.ability.name);
    const image = json.sprites.other['official-artwork'].front_default;
    const stats = json.stats.map((stat: any) => ({ name: stat.stat.name, value: stat.base_stat }));

    return new PokemonModel(json.id, json.name, image, abilities, json.height, json.weight, stats);
  }
}
