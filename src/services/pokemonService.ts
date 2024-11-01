import { HttpService } from "./httpService";

export class PokemonService {

  constructor(private httpService: HttpService) { }

  async getPokemons({ pageParam, queryKey }: { pageParam: number, queryKey: string[] }) {
    const searchName = queryKey[1] ?? '';
    let response = await this.httpService.get(`pokemon/${searchName}?offset=${pageParam}&limit=20`)
    if (searchName) {
      return response;
    }

    const pokemons = await Promise.all(response.results.map(async (pokemon: any) => {
      const pokemonResponse = await this.httpService.get('', pokemon.url);
      return pokemonResponse;
    }));

    return pokemons;
  };
}