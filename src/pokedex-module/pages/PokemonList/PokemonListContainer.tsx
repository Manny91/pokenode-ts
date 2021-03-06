import { useToast } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "../../components/Page";
import { fetchPokemons, fetchTypes } from "../../store/pokedex.reducer";
import {
  getPokemons,
  getPokemonsError,
  getPokemonsLoading,
  getTypes,
} from "../../store/pokedex.selectors";
import PokemonList from "./PokemonList";

const PokemonListContainer: FC = () => {
  const dispatch = useDispatch();
  const fetchPokemonsData = () => dispatch(fetchPokemons());
  const fetchPokemonsTypes = () => dispatch(fetchTypes());
  const pokemons = useSelector(getPokemons);
  const types = useSelector(getTypes);
  const loading = useSelector(getPokemonsLoading);
  const error = useSelector(getPokemonsError);
  const toast = useToast();

  useEffect(() => {
    fetchPokemonsData();
    fetchPokemonsTypes();
  }, [useDispatch]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Oops!",
        status: "error",
        position: "top-right",
        description: error,
      });
    }
  }, [error]);

  return (
    <Page>
      <PokemonList
        pokemons={pokemons}
        loading={loading}
        types={types}
        loadPokemons={fetchPokemonsData}
      />
    </Page>
  );
};

export default PokemonListContainer;
