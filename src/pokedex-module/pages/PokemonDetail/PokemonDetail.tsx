import {
  Box,
  Button,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Pokemon } from "pokenode-ts";
import { FC } from "react";
import theme from "../../../theme";
import PokeImage from "../../components/PokeImage/PokeImage";
import { parseHeight, parseWeight } from "../../helpers/parsePokemonSize";
import StyledLink from "../../components/StyledLink/StyledLink";
import H3 from "../../components/Typography/H3";
import H5 from "../../components/Typography/H5";
import statToString from "../../helpers/statToString";
import TypeDisplayer from "../../components/TypeDisplayer/TypeDisplayer";

const PokemonDetail: FC<{ pokemon: Pokemon; loading: boolean }> = ({
  pokemon,
  loading,
}) => {
  const loadingView = () => {
    return (
      <>
        <Header>
          <Skeleton height="20px" width="160px" />
          <SkeletonCircle size="110px" />
        </Header>
        <Body>
          <Box width="100%">
            <SkeletonText mt="12" noOfLines={5} spacing="4" />
          </Box>
        </Body>
      </>
    );
  };

  const showPokemonData = ({
    name,
    weight,
    sprites,
    height,
    types,
    stats,
    id,
    moves,
  }: Pokemon) => {
    return (
      <Wrapper>
        <Header>
          <Column>
            <Flex>
              <H3>#{id}</H3> <Name>{name}</Name>
            </Flex>
            <TypeDisplayer types={types} />
          </Column>
          <Column>
            <ImageContainer>
              <PokemonImage src={`${sprites.front_default}`} />
            </ImageContainer>
          </Column>
        </Header>
        <Body>
          <BasicInfo>
            <Stats>
              <H5>Stats:</H5>
              {stats.map((stat, index) => {
                return <Text key={index}>{statToString(stat)}</Text>;
              })}
            </Stats>
            <Size>
              <H5>Size:</H5>
              <Text>Height: {parseHeight(height)}</Text>
              <Text>Weight: {parseWeight(weight)}</Text>
            </Size>
          </BasicInfo>

          <H5>Moveset:</H5>
          <Moves>
            {moves
              .slice(0)
              .map(({ move }) => move.name)
              .join(", ")}
          </Moves>
        </Body>
        <div style={{ width: "100%" }}>
          <StyledLink to="/">
            <BackButton>Go Back to List</BackButton>
          </StyledLink>
        </div>
      </Wrapper>
    );
  };
  return (
    <>
      {pokemon && showPokemonData(pokemon)}
      {!pokemon && loading && loadingView()}
    </>
  );
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled(Flex)`
  flex-direction: row;
  gap: ${theme.spacing(4)};
  width: 100%;
`;

const Column = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
`;
const Wrapper = styled(Column)`
  height: 100%;
  width: 100%;
`;
const Body = styled(Column)`
  margin-top: ${theme.spacing(4)};
  background: ${theme.palette.green.background};
  border: 5px double;
  border-radius: 10px;
  padding: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(5)};
  width: 100%;
`;
const BasicInfo = styled(Flex)`
  align-items: flex-start;
  width: 100%;
`;

const ImageContainer = styled.div`
  border: 5px double;
  border-radius: 50%;
`;

const PokemonImage = styled(PokeImage)`
  height: 160px;
  border-radius: 50%;
  background-color: ${theme.palette.green.background};
`;

const Name = styled(H3)`
  text-transform: capitalize;
  margin-left: ${theme.spacing(2)};
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  align-items: flex-start;
  white-space: pre-wrap;
`;
const Size = styled(Flex)`
  flex-direction: column;
  flex: 1;
  align-items: end;
`;
const Stats = styled(Size)`
  align-items: flex-start;
`;

const Moves = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow-y: scroll;
`;

const BackButton = styled(Button)`
  width: 100%;
  color: white;
  cursor: pointer;
  background-color: ${theme.palette.black.background};
  &:hover {
    background-color: ${theme.palette.black.backgroundHover};
  }
`;

export default PokemonDetail;
