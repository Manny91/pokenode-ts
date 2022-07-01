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

  const onChangeHandler = (name: string) => {
    setPokemonListFiltered(
      pokemons.filter((value) => value.name.indexOf(name) > -1)
    );
  };
  return (
    <>
      <Header>
        <H1>Pokedex</H1>
        <Filters>
          <FilterWrapper>
            <InputSearch
              placeholder="Filter by name"
              onChange={(e) => onChangeHandler(e.target.value)}
            />
          </FilterWrapper>
          <FilterWrapper>
            <Select
              onChange={(e) => setTypeSelected(e.target.value)}
              placeholder="Select a type"
              defaultValue={0}
            >
              <option disabled value="0">
                Filter by type
              </option>

              <option key={"any"} value="">
                any
              </option>
              {types.map((type) => {
                return (
                  <option key={type.name} value={type.name}>
                    {type.name}
                  </option>
                );
              })}
            </Select>
          </FilterWrapper>
        </Filters>
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

const InputSearch = styled.input`
  ${theme.input};

  padding: 7px 12px;
  width: 100%;
  ::placeholder {
    color: black;
  }
`;
const Select = styled.select`
  ${theme.input};
`;

export default PokemonList;
