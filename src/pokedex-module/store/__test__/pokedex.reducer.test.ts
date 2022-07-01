import { Pokemon } from "pokenode-ts";
import reducer, {
  fetchPokemonDetail,
  fetchPokemonDetailError,
  fetchPokemonDetailSuccess,
  fetchPokemons,
  fetchPokemonsError,
  fetchPokemonsSuccess,
  fetchTypes,
  fetchTypesError,
  fetchTypesSuccess,
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

  describe("fetchTypes", () => {
    it("should set loading true and clear error state", () => {
      const expected: PokedexState = {
        ...INITIAL_STATE,
        error: "",
        loading: true,
      };
      expect(reducer(INITIAL_STATE, fetchTypes)).toEqual(expected);
    });
  });

  describe("fetchTypesError", () => {
    it("should set loading false and set payload error", () => {
      const error = "test fetch types error";
      const expected: PokedexState = {
        ...INITIAL_STATE,
        error,
        loading: false,
      };
      expect(reducer(INITIAL_STATE, fetchTypesError(error))).toEqual(expected);
    });
  });
  describe("fetchTypesSuccess", () => {
    it("should set loading false and set the payload into the pokedex object", () => {
      const types = [
        {
          name: "fire",
          url: "test/url/fire",
        },
        {
          name: "water",
          url: "test/url/water",
        },
        {
          name: "grass",
          url: "test/url/grass",
        },
      ];
      const payload = types;
      const expected: PokedexState = {
        ...INITIAL_STATE,
        error: "",
        loading: false,
        types,
      };
      expect(reducer(INITIAL_STATE, fetchTypesSuccess(payload))).toEqual(
        expected
      );
    });
  });
  describe("fetchPokemonDetail", () => {
    it("should set loading true and clear error state", () => {
      const expected: PokedexState = {
        ...INITIAL_STATE,
        error: "",
        loading: true,
      };
      expect(reducer(INITIAL_STATE, fetchPokemonDetail)).toEqual(expected);
    });
  });
  describe("fetchPokemonDetailError", () => {
    it("should set loading false and set payload error", () => {
      const error = "test fetch details error";
      const expected: PokedexState = {
        ...INITIAL_STATE,
        error,
        loading: false,
      };
      expect(reducer(INITIAL_STATE, fetchPokemonDetailError(error))).toEqual(
        expected
      );
    });
  });
  describe("fetchPokemonDetailSuccess", () => {
    it("should set loading false and set the payload into the pokedex object", () => {
      const payload = bulbasaur;
      const expected: PokedexState = {
        ...INITIAL_STATE,
        error: "",
        loading: false,
        pokedex: {
          1: bulbasaur,
        },
      };
      expect(
        reducer(INITIAL_STATE, fetchPokemonDetailSuccess(payload))
      ).toEqual(expected);
    });
  });
});
