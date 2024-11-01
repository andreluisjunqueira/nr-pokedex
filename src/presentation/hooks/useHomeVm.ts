import { useInfiniteQuery } from "@tanstack/react-query";
import { sl } from "injectionContainer";
import { PokemonModel } from "models/pokemon.model";
import { useState } from "react";
import { PokemonService } from "services/pokemonService";

const pokemonService = sl.resolve<PokemonService>('PokemonService');
const getPokemons = async ({ pageParam, queryKey }: { pageParam: number, queryKey: string[] }) => {
  let pokemons = await pokemonService.getPokemons({ pageParam, queryKey })
  return pokemons;
};

export const useHomeVm = <T extends any[]>(dependency?: T) => {
  const [searchName, setSearchName] = useState("");
  const { data, fetchNextPage, isFetching, error } = useInfiniteQuery({
    queryKey: ["pokemons", searchName],
    queryFn: getPokemons,
    getNextPageParam: (lastPage, pages) => lastPage.length * pages.length,
    initialPageParam: 0,
  });

  const loadMore = async () => {
    if (searchName !== '' || isFetching || error) {
      return;
    }

    fetchNextPage();
  };

  const searchByName = async (name: string) => {
    setSearchName(name.toLowerCase());
  };

  const clearSearch = () => {
    setSearchName("");
  };

  const getPokemonsCorrectShape = () => {
    return data?.pages.flatMap<PokemonModel>((page) => {
      return Array.isArray(page) ? page.map(PokemonModel.fromJson) : [PokemonModel.fromJson(page)];
    }) ?? []
  }

  return {
    pokemons: getPokemonsCorrectShape(),
    loadMore,
    error,
    searchByName,
    clearSearch,
    isLoading: isFetching,
  };
};
