import React from "react";
import styled from "styled-components";
import { Flex, Icon } from "antd-mobile";

import { colors } from "../../styles/theme";

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 30px;
  padding: 4px 7px;
  background-color: ${colors.black};
  color: ${colors.white};
`;

const Button = styled(Icon)`
  cursor: pointer;
`;

const Item = styled(Flex.Item)`
  margin-left: 0;
  text-align: center;
`;

const Date = styled.p`
  font-size: 15px;
`;

const DateSelector = ({
  date,
  addWeek,
  subWeek
}: {
  date: number;
  addWeek: () => void;
  subWeek: () => void;
}) => (
  <Wrapper>
    <Flex>
      <Button type="left" onClick={subWeek} />
      <Item>
        <Date>{`Week ${date}`}</Date>
      </Item>
      <Button type="right" onClick={addWeek} />
    </Flex>
  </Wrapper>
);

export default DateSelector;
