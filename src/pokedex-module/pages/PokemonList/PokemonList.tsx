import styled from "@emotion/styled";
import { NamedAPIResource, Pokemon } from "pokenode-ts";
import { FC, useEffect, useState } from "react";
import theme from "../../../theme";
import List from "../../components/List/List";
import H1 from "../../components/Typography/H1";

export type PokemonListProps = {
  pokemons: Pokemon[];
  types: NamedAPIResource[];
  loadPokemons: () => void;
  loading: boolean;
};
const PokemonList: FC<PokemonListProps> = ({
  pokemons,
  types,
  loadPokemons,
  loading,
}) => {
  const [typeSelected, setTypeSelected] = useState<string>();
  const [pokemonListFiltered, setPokemonListFiltered] =
    useState<Pokemon[]>(pokemons);

  useEffect(() => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.types.some(
        ({ type }) => type.name.indexOf(`${typeSelected}`) > -1
      )
    );
    setPokemonListFiltered(filtered);
  }, [typeSelected, pokemons]);

  useEffect(() => {
    setPokemonListFiltered(pokemons);
  }, [pokemons]);

  const handleLoadMore = () => {
    loadPokemons();
  };

  return (
    <>
      <Header>
        <H1>Pokedex</H1>
        <Filters></Filters>
      </Header>

      <List
        loading={loading}
        loadMore={handleLoadMore}
        pokemons={pokemonListFiltered}
      />
    </>
  );
};

const Header = styled.div`
  height: ${theme.header.height}px;
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing(4)};
`;

const FilterWrapper = styled.div`
  border: 5px double;
  flex: 1;
`;
export default PokemonList;
