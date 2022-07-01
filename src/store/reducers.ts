import { combineReducers } from "@reduxjs/toolkit";
import pokedexReducer from "../pokedex-module/store/pokedex.reducer";

export const reducers = combineReducers({
  pokedexState: pokedexReducer,
});
