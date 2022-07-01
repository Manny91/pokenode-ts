import styled from "@emotion/styled";
import { FC } from "react";

import theme from "../../../theme";
import H6 from "../Typography/H6";

const ListItem: FC<{ name: string; id: number }> = ({ name, id }) => {
  return (
    <Container>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <Name>{name}</Name>
    </Container>
  );
};

const Container = styled.li`
  padding: ${theme.spacing(2)};
  border: 3px inset ${theme.palette.green.border};
  background-color: ${theme.palette.green.background};
  list-style: none;
  &:hover {
    background-color: ${theme.palette.green.backgroundHover};
  }
`;

const Name = styled(H6)`
  text-transform: capitalize;
`;

export default ListItem;
