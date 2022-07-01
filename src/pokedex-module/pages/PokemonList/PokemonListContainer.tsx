import { useToast } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "../../components/Page";
import { fetchPokemons } from "../../store/pokedex.reducer";
import {
  getPokemons,
  getPokemonsError,
  getPokemonsLoading,
} from "../../store/pokedex.selectors";
import PokemonList from "./PokemonList";

const PokemonListContainer: FC = () => {
  const dispatch = useDispatch();
  const fetchPokemonsData = () => dispatch(fetchPokemons());
  const pokemons = useSelector(getPokemons);
  const loading = useSelector(getPokemonsLoading);
  const error = useSelector(getPokemonsError);
  const toast = useToast();
  useEffect(() => {
    fetchPokemonsData();
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
  }, []);

  return (
    <Page>
      <PokemonList
        pokemons={pokemons}
        loading={loading}
        types={[]}
        loadPokemons={fetchPokemonsData}
      />
    </Page>
  );
};

export default PokemonListContainer;
