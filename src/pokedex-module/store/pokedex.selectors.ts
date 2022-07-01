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
