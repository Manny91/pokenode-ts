import styled from "@emotion/styled";
import theme from "../../../theme";

const H3 = styled.h3`
  ${theme.typography.h3};
  margin: 0px;
  ${theme.mobile} {
    font-size: 24px;
  }
`;

export default H3;
