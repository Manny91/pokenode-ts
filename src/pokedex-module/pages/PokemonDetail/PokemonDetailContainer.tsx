import { useToast } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Page from "../../components/Page";
import { fetchPokemonDetail } from "../../store/pokedex.reducer";
import {
  getPokemonById,
  getPokemonsError,
  getPokemonsLoading,
} from "../../store/pokedex.selectors";
import PokemonDetail from "./PokemonDetail";

const PokemonDetailContainer: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const fetchPokemonDetailData = (id: string) =>
    dispatch(fetchPokemonDetail(id));
  const idToNumber = Number.parseInt(`${id}`, 10) || 1;
  const pokemonDetail = useSelector(getPokemonById(idToNumber));
  const pokemonLoading = useSelector(getPokemonsLoading);
  const error = useSelector(getPokemonsError);
  const toast = useToast();
  useEffect(() => {
    fetchPokemonDetailData(`${id}`);
  }, [id]);

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
      <PokemonDetail loading={pokemonLoading} pokemon={pokemonDetail} />
    </Page>
  );
};

export default PokemonDetailContainer;
