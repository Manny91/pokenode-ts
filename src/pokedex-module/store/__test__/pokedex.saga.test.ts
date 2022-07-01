import { getPokemonPagination } from "./../pokedex.selectors";
import { fetchPokemonsSuccess, Pagination } from "./../pokedex.reducer";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchPokemonDetail,
  fetchPokemons,
  fetchTypes,
} from "../pokedex.reducer";
import {
  pokedexSagas,
  fetchPokemonDetailSaga,
  fetchPokemonTypesSaga,
  fetchPokemonsSaga,
} from "../pokedex.sagas";

describe("Pokedex Sagas", () => {
  it("Watches the expected actions types", () => {
    const generator = pokedexSagas();
    const expectedYield = all([
      takeLatest(fetchPokemons.type, fetchPokemonsSaga),
      takeLatest(fetchTypes.type, fetchPokemonTypesSaga),
      takeLatest(fetchPokemonDetail.type, fetchPokemonDetailSaga),
    ]);
    const actualYield = generator.next().value;
    expect(actualYield).toEqual(expectedYield);
  });

  describe("fetch Pokemons Sagas", () => {
    const generator = fetchPokemonsSaga();

    it("should get the pagination before sending request correctly", () => {
      const actualYield = generator.next().value;
      const expectedYield = select(getPokemonPagination);

      expect(actualYield).toEqual(expectedYield);
    });
    // if I had more time will carry on testing sagas
    // to be continued
  });
});
