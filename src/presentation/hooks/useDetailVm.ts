import { useQuery } from "@tanstack/react-query";
import { PokemonDetailModel } from "models/pokeminDetail.model";
import { sl } from "injectionContainer";
import { DetailService } from "services/detailService";

const detailService = sl.resolve<DetailService>('DetailService');

type GetDetailParams = {
  pokemonId: string;
};

export const useDetailVm = ({ pokemonId }: GetDetailParams) => {
  const { data: species } = useQuery({
    queryKey: ['pokemon-species', pokemonId],
    queryFn: () => detailService.getDetail(pokemonId),
    enabled: !!pokemonId,
  });

  const { data: stats } = useQuery({
    queryKey: ['pokemon-stats', pokemonId],
    queryFn: () => detailService.getStats(pokemonId),
    enabled: !!pokemonId,
  });

  const { data: evolution } = useQuery({
    queryKey: ['pokemon-evolution', species?.evolution_chain.url],
    queryFn: () => detailService.getEvolution(species?.evolution_chain.url),
    enabled: !!pokemonId,
  });

  const pokemonSpecies = PokemonDetailModel.fromJson(species ?? {}, evolution ?? []);
  return {
    pokemonSpecies,
    pokeminStats: stats
  };
};
