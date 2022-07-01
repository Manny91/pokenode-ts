import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "pokenode-ts";

export type PokedexState = {
  pokemonList: Pokemon[];
  loading: boolean;
  error: string;
};

export const INITIAL_STATE: PokedexState = {
  pokemonList: [],
  loading: true,
  error: "",
};
const pokedexReducer = createSlice({
  name: "pokedex",
  initialState: INITIAL_STATE,
  reducers: {},
});

export const {} = pokedexReducer.actions;

export default pokedexReducer.reducer;
