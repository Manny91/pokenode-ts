import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NamedAPIResource, Pokemon } from "pokenode-ts";

type Dictionary<T> = {
  [Key: string]: T;
};

export type PokedexState = {
  pokemonList: Pokemon[];
  loading: boolean;
  error: string;
  pagination: Pagination;
  types: NamedAPIResource[];
  pokedex: Dictionary<Pokemon>;
};

export type Pagination = {
  offset: number;
  limit: number;
};
export const INITIAL_STATE: PokedexState = {
  pokemonList: [],
  loading: true,
  error: "",
  types: [],
  pagination: {
    offset: 0,
    limit: 50,
  },
  pokedex: {} as Dictionary<Pokemon>,
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
    fetchTypes: (state) => {
      state.loading = true;
      state.error = "";
    },
    fetchTypesSuccess: (
      state,
      { payload }: PayloadAction<NamedAPIResource[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.types = payload;
    },
    fetchTypesError: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
    fetchPokemonDetail: (state, _: PayloadAction<string>) => {
      state.loading = true;
      state.error = "";
    },
    fetchPokemonDetailSuccess: (state, { payload }: PayloadAction<Pokemon>) => {
      const pokedexCopy = { ...state.pokedex };
      pokedexCopy[`${payload.id}`] = payload;
      return {
        ...state,
        pokedex: pokedexCopy,
        loading: false,
        error: "",
      };
    },
    fetchPokemonDetailError: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  fetchPokemons,
  fetchPokemonsError,
  fetchPokemonsSuccess,
  fetchTypes,
  fetchTypesError,
  fetchTypesSuccess,
  fetchPokemonDetail,
  fetchPokemonDetailError,
  fetchPokemonDetailSuccess,
} = pokedexReducer.actions;

export default pokedexReducer.reducer;
