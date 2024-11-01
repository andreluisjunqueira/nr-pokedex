export class PokemonDetailModel {
  constructor(
    public color: string,
    public egg_groups: string,
    public evolution_chain: { name: string, image: string }[],
  ) { }

  static fromJson(json: any, evolutionJson: any): PokemonDetailModel {
    const egg_groups = json.egg_groups?.map((egg: any) => egg.name).join(', ');

    return new PokemonDetailModel(json.color?.name, egg_groups, evolutionJson);
  }
}
