import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const LogoRoot = styled("span")`
  display: flex;
  align-items: center;
`;

const LogoTexter = styled("div")`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  margin-left: 12px;
`;

const LogoText = styled("span")`
  display: block;
  font-size: 14px;
  color: ${props => (props.color ? props.color : "#000")};
  font-weight: ${props => (props.bold ? 700 : 400)};
`;

const Logo = () => {
  return (
    <LogoRoot>
      <Icon name="photo" color="black" size="huge" />
      <LogoTexter>
        <LogoText bold>Yerassyl Aitkazy</LogoText>
        <LogoText>yerassyl.ad@gmail.com</LogoText>
      </LogoTexter>
    </LogoRoot>
  );
};

export default Logo;
