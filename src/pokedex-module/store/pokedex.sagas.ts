import {
  NamedAPIResource,
  NamedAPIResourceList,
  Pokemon,
  PokemonClient,
} from "pokenode-ts";
import { all, put, select, takeLatest } from "redux-saga/effects";
import getErrorFromException from "../helpers/getErrorFromException";
import {
  fetchPokemons,
  fetchPokemonsError,
  fetchPokemonsSuccess,
  fetchTypes,
  fetchTypesError,
  fetchTypesSuccess,
  Pagination,
} from "./pokedex.reducer";
import { getPokemonPagination } from "./pokedex.selectors";

export function* pokedexSagas() {
  yield all([
    takeLatest(fetchPokemons.type, fetchPokemonsSaga),
    takeLatest(fetchTypes.type, fetchPokemonTypesSaga),
  ]);
}

export function* fetchPokemonsSaga() {
  try {
    const { offset, limit }: Pagination = yield select(getPokemonPagination);
    const api = new PokemonClient();
    const response: NamedAPIResourceList = yield api.listPokemons(
      offset,
      limit
    );
    const pokemonResults: Pokemon[] = yield all(
      response.results.map(({ name }: NamedAPIResource) => {
        return getPokemonByName(name);
      })
    );

    yield put({
      type: fetchPokemonsSuccess.type,
      payload: pokemonResults,
    });
  } catch (e) {
    const errorMessage = getErrorFromException(e);

    yield put({
      type: fetchPokemonsError.type,
      payload: errorMessage,
    });
  }
}
function* getPokemonByName(name: string) {
  try {
    const api = new PokemonClient();
    const response: Pokemon = yield api.getPokemonByName(name);
    return response;
  } catch (e) {
    const errorMessage = getErrorFromException(e);

    yield put({
      type: fetchPokemonsError.type,
      payload: errorMessage,
    });
  }
}

export function* fetchPokemonTypesSaga() {
  try {
    const api = new PokemonClient();
    const response: NamedAPIResourceList = yield api.listTypes();
    yield put({
      type: fetchTypesSuccess.type,
      payload: response.results,
    });
  } catch (e) {
    const errorMessage = getErrorFromException(e);
    yield put({
      type: fetchTypesError.type,
      payload: errorMessage,
    });
  }
}
