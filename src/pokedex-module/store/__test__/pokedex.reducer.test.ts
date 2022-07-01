import { Pokemon } from "pokenode-ts";
import reducer, {
  fetchPokemons,
  fetchPokemonsError,
  fetchPokemonsSuccess,
  INITIAL_STATE,
  PokedexState,
} from "./../pokedex.reducer";
describe("Po Reducer", () => {
  const bulbasaur = {
    id: 1,
    name: "bulbasaur",
  } as Pokemon;
  const starters = [
    bulbasaur,
    {
      name: "charmander",
      id: 4,
    },
    {
      name: "squirtle",
      id: 7,
    },
  ] as Pokemon[];
  describe("fetchPokemons", () => {
    it("should set loading true and clear error state", () => {
      const expected: PokedexState = {
        ...INITIAL_STATE,
        error: "",
        loading: true,
      };
      expect(reducer(INITIAL_STATE, fetchPokemons)).toEqual(expected);
    });
  });
  describe("fetchPokemonsError", () => {
    it("should set loading false and set payload error", () => {
      const error = "test error";
      const expected: PokedexState = {
        ...INITIAL_STATE,
        error,
        loading: false,
      };
      expect(reducer(INITIAL_STATE, fetchPokemonsError(error))).toEqual(
        expected
      );
    });
  });
  describe("fetchPokemonsSuccess", () => {
    it("should set pokemonList with the array received, increase offset and clear flags", () => {
      const expected: PokedexState = {
        ...INITIAL_STATE,
        error: "",
        loading: false,
        pagination: {
          offset: 50,
          limit: 50,
        },
        pokemonList: starters,
      };
      expect(reducer(INITIAL_STATE, fetchPokemonsSuccess(starters))).toEqual(
        expected
      );
    });
  });
});
