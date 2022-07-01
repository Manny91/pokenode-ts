import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "pokenode-ts";

export type PokedexState = {
  pokemonList: Pokemon[];
  loading: boolean;
  error: string;
  pagination: Pagination;
};

export type Pagination = {
  offset: number;
  limit: number;
};
export const INITIAL_STATE: PokedexState = {
  pokemonList: [],
  loading: true,
  error: "",
  pagination: {
    offset: 0,
    limit: 50,
  },
};
const pokedexReducer = createSlice({
  name: "pokedex",
  initialState: INITIAL_STATE,
  reducers: {
    fetchPokemons: (state) => {
      state.loading = true;
      state.error = "";
    },
    fetchPokemonsSuccess: (state, { payload }: PayloadAction<Pokemon[]>) => {
      const { offset, limit } = state.pagination;
      return {
        ...state,
        pokemonList: [...state.pokemonList, ...payload],
        loading: false,
        error: "",
        pagination: {
          limit,
          offset: offset + limit,
        },
      };
    },
    fetchPokemonsError: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { fetchPokemons, fetchPokemonsError, fetchPokemonsSuccess } =
  pokedexReducer.actions;

export default pokedexReducer.reducer;
