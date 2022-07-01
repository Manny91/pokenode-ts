import { PokedexState } from "./pokedex.reducer";
import { createSelector } from "reselect";
import { RootState } from "../../store";

const pokemonState = (state: RootState): PokedexState => state.pokedexState;

export const getPokemonsLoading = createSelector(
  pokemonState,
  (slice) => slice.loading
);

export const getPokemons = createSelector(
  pokemonState,
  (slice) => slice.pokemonList
);

export const getPokemonsError = createSelector(
  pokemonState,
  (slice) => slice.error
);

export const getPokemonPagination = createSelector(
  pokemonState,
  (slice) => slice.pagination
);

export const getTypes = createSelector(pokemonState, (slice) => slice.types);
export const getPokedex = createSelector(
  pokemonState,
  (slice) => slice.pokedex
);
export const getPokemonById = (id: number) =>
  createSelector([getPokedex, getPokemons], (pokedex, pokemons) =>
    pokedex[id] ? pokedex[id] : pokemons[Math.max(id - 1, 0)]
  );
