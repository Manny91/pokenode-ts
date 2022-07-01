import styled from "@emotion/styled";
import { PokemonType } from "pokenode-ts";
import { FC } from "react";
import theme from "../../../theme";

const TypeDisplayer: FC<{ types: PokemonType[] }> = ({ types }) => {
  return types ? (
    <TypeWrapper>
      {types.map((pokeType: PokemonType, index: number) => (
        <PokemonTypeBanner className={pokeType.type.name} key={index}>
          {pokeType.type.name}
        </PokemonTypeBanner>
      ))}
    </TypeWrapper>
  ) : null;
};
const TypeWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: ${theme.spacing(2)};
`;
const PokemonTypeBannerHeader = styled.div`
  height: 35px;
  text-transform: uppercase;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const PokemonTypeBanner = styled(PokemonTypeBannerHeader)`
  border-radius: ${theme.spacing(2)};
  padding: ${theme.spacing(2)};
  ${theme.spacing(3)};
  width: 60px;
  border: 1px solid;
  cursor: pointer;
  &.normal {
    background: ${theme.palette.pokemonTypes.normal};
  }
  &.fighting {
    background: ${theme.palette.pokemonTypes.fighting};
  }
  &.flying {
    background: ${theme.palette.pokemonTypes.flying};
  }
  &.poison {
    background: ${theme.palette.pokemonTypes.poison};
  }
  &.ground {
    background: ${theme.palette.pokemonTypes.ground};
  }
  &.rock {
    background: ${theme.palette.pokemonTypes.rock};
  }
  &.bug {
    background: ${theme.palette.pokemonTypes.bug};
  }
  &.ghost {
    background: ${theme.palette.pokemonTypes.ghost};
  }
  &.steel {
    background: ${theme.palette.pokemonTypes.steel};
  }
  &.fire {
    background: ${theme.palette.pokemonTypes.fire};
  }
  &.water {
    background: ${theme.palette.pokemonTypes.water};
  }
  &.grass {
    background: ${theme.palette.pokemonTypes.grass};
  }
  &.electric {
    background: ${theme.palette.pokemonTypes.electric};
  }
  &.psychic {
    background: ${theme.palette.pokemonTypes.psychic};
  }
  &.ice {
    background: ${theme.palette.pokemonTypes.ice};
  }
  &.dragon {
    background: ${theme.palette.pokemonTypes.dragon};
  }
  &.dark {
    background: ${theme.palette.pokemonTypes.dark};
  }
  &.fairy {
    background: ${theme.palette.pokemonTypes.fairy};
  }
  &.unknown {
    background: ${theme.palette.pokemonTypes.unknown};
  }
  &.shadow {
    background: ${theme.palette.pokemonTypes.shadow};
  }
`;

export default TypeDisplayer;
