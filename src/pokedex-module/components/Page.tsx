import styled from "@emotion/styled";
import { FC } from "react";
import theme from "../../theme";

const Page: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout>
      <Container>{children}</Container>
    </Layout>
  );
};

const Layout = styled.div`
  font-family: "VT323";
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  background-color: ${theme.palette.red.background};
  padding: ${theme.spacing(5)};
  border: 5px double;
  border-radius: ${theme.spacing(3)};
  margin: ${theme.spacing(4)};
  height: calc(100% - ${theme.spacing(5)});
  width: 60%;
  ${theme.tablet} {
    width: 100%;
  }
`;

export default Page;
