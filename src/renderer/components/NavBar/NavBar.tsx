import React from "react";
import styled from "styled-components";
import { NavBar as AntNavBar, Icon } from "antd-mobile";

import { colors } from "../../styles/theme";

const Wrapper = styled.div`
  width: 100vh;
  height: 30px;
`;

const Title = styled.p`
  color: ${colors.white};
  font-size: 15px;
`;

const NavBar = ({ page }: { page: string }) => (
  <Wrapper>
    <AntNavBar
      leftContent={
        <Icon
          type="left"
          color={colors.white}
          style={{
            position: "absolute",
            left: "7px",
            height: "30px",
            cursor: "pointer"
          }}
        />
      }
      style={{ height: "100%", background: colors.orange }}
    >
      <Title>{page}</Title>
    </AntNavBar>
  </Wrapper>
);

export default React.memo(NavBar);
