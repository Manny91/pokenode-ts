import styled from "@emotion/styled";
import { Pokemon } from "pokenode-ts";
import { FC, useRef } from "react";

import theme from "../../../theme";
import ListItem from "../ListItem/ListItem";

const List: FC<{
  pokemons: Pokemon[];
  loadMore: () => void;
  loading: boolean;
}> = ({ pokemons, loadMore, loading }) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const handleScroll = (e: React.UIEvent<HTMLUListElement, UIEvent>) => {
    const scrollYPosition = e.currentTarget?.scrollTop;
    const scrollHeight = e.currentTarget?.scrollHeight;
    const bodyOffset = e.currentTarget?.getBoundingClientRect();

    //calculate percentage
    const percentage =
      (scrollYPosition * 100) / (scrollHeight - bodyOffset.height);
    if (percentage > 82) {
      loadMore();
    }
  };
  return (
    <Container ref={ulRef} onScroll={(e) => handleScroll(e)}>
      {pokemons.map(({ name, id }) => {
        return <ListItem key={id} name={name} id={id} />;
      })}
      {loading && (
        <ListItem key={"loading..."} id={0} name="loading...."></ListItem>
      )}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  height: 70vh;
  overflow-y: auto;
`;

export default List;
