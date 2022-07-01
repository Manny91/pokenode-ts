import styled from "@emotion/styled";
import { FC } from "react";

const Page: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Page;
