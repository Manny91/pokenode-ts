import { Pokemon } from "pokenode-ts";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Page from "../../components/Page";

import { getPokemonsLoading } from "../../store/pokedex.selectors";

const PokemonDetailContainer: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const idToNumber = Number.parseInt(`${id}`, 10) || 1;

  const pokemonLoading = useSelector(getPokemonsLoading);

  return <Page>{id}</Page>;
};

export default PokemonDetailContainer;
