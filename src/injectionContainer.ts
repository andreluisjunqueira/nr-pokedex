import 'reflect-metadata';
import { POKE_API_URL } from 'appConstants';
import { HttpService } from 'services/httpService';

import { container } from 'tsyringe';
import { PokemonService } from 'services/pokemonService';
import { DetailService } from 'services/detailService';

container.registerInstance('HttpService', new HttpService(POKE_API_URL));
container.registerInstance('PokemonService', new PokemonService(container.resolve('HttpService')));
container.registerInstance('DetailService', new DetailService(container.resolve('HttpService')));

export const sl = container;
