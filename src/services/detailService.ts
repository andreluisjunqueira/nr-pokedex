import { HttpService } from "./httpService";

export class DetailService {

  constructor(private httpService: HttpService) { }


  async getDetail(pokemonId: string) {
    let response = await this.httpService.get(`pokemon-species/${pokemonId}`);
    return response;
  };

  async getStats(pokemonId: string) {
    let response = await this.httpService.get(`stat/${pokemonId}`);
    return response;
  };

  async getEvolution(chainUrl: string) {
    let response = await this.httpService.get('', chainUrl);

    const evolutions = this.findEvolutions(response.chain);

    const evolutionChainImages = await Promise.all(evolutions.map(async (evolution: string) => {
      const pokemonResponse = await this.httpService.get(`pokemon/${evolution}`);
      return {
        name: evolution,
        image: pokemonResponse.sprites.other['official-artwork'].front_default
      }
    }));

    return evolutionChainImages;
  };

  findEvolutions(evolution: any): string[] {
    const evolutions: string[] = [];

    // Add current species name
    if (evolution.species?.name) {
      evolutions.push(evolution.species.name);
    }

    // Recursively check evolves_to array
    if (evolution.evolves_to && evolution.evolves_to.length > 0) {
      evolution.evolves_to.forEach((evo: any) => {
        evolutions.push(...this.findEvolutions(evo));
      });
    }

    return evolutions;
  }
}
