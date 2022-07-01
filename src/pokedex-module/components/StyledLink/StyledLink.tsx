import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import theme from "../../../theme";

const StyledLink = styled(Link)`
  display: flex;
  gap: ${theme.spacing(2)};
  align-items: center;
  ${theme.typography.link}
  cursor: pointer;
`;

export default StyledLink;
