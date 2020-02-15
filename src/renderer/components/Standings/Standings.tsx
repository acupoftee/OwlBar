import React from "react";
import { Flex } from "antd-mobile";
import { Table as VirtualizedTable } from "react-virtualized";
import styled from "styled-components";

const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  overflow-y: scroll !important;
`;

const HeaderCell = styled.div<{
  width: string;
}>`
  width: ${props => props.width}px;
  padding: 8px 14px;
  display: inline-block;
  background-color: #4a4c4e;
  color: #fff;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
`;

const Cell = styled.div<{
  width: string;
  align?: "left" | "right";
  backgroundColor?: string;
}>`
  display: inline-block;
  width: ${props => props.width}px;
  padding: 6px 14px;
  border-bottom: 2px solid #f3f3f3;
  text-align: ${props => props.align || "center"};
  background-color: ${props => props.backgroundColor || "transparent"};
`;

const TeamLogo = styled.img`
  width: 28px;
  padding-right: 10px;
`;

const Conference = styled.h4`
  padding: 10px 0;
  margin: 0;
  background: #141114;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
`;

const headerRowRenderer = ({
  className,
  style
}: {
  className: string;
  style: React.CSSProperties;
}) => (
  <Flex className={className} style={style}>
    <HeaderCell key="team" width="120">
      teams
    </HeaderCell>
    <HeaderCell key="division" width="50">
      DIV
    </HeaderCell>
    <HeaderCell key="win" width="40">
      w
    </HeaderCell>
    <HeaderCell key="loss" width="40">
      l
    </HeaderCell>
    <HeaderCell key="loss" width="40">
      l
    </HeaderCell>
  </Flex>
);

const getLogo = (rowData: any): string => {
  let logo;
  if (rowData.abbreviatedName === "HZS") {
    logo = rowData.logo.alt.svg;
  } else if (rowData.abbreviatedName === "ATL") {
    logo = rowData.logo.main.svg;
  } else {
    logo = rowData.logo.altDark
      ? rowData.logo.altDark.svg
      : rowData.logo.main.svg;
  }
  return logo;
};

const rowRenderer = ({
  rowData,
  style
}: {
  rowData: any;
  style: React.CSSProperties;
}) => (
  <Flex key={rowData.id} style={style}>
    <Cell
      key="name"
      align="left"
      style={{
        color: "#fff",
        fontWeight: 500,
        display: "flex",
        alignItems: "center"
      }}
      width="120"
      backgroundColor={rowData.colors.primary.color}
    >
      <TeamLogo src={getLogo(rowData)} />
      {rowData.abbreviatedName}
    </Cell>
    <Cell key="division" width="50">
      {rowData.divisionId === 80 ? "PAC" : "ATL"}
    </Cell>
    <Cell key="win" width="40">
      {rowData.league.matchWin}
    </Cell>
    <Cell key="loss" width="40">
      {rowData.league.matchLoss}
    </Cell>
  </Flex>
);

const standingsTable = (teams: any) => (
  <div style={{ width: "100%" }}>
    <Conference>Standings</Conference>
    <VirtualizedTable
      width={300}
      height={357}
      headerHeight={30}
      rowHeight={30}
      rowCount={teams.data.length}
      rowGetter={({ index }: { index: number }) => teams.data[index]}
      headerRowRenderer={headerRowRenderer}
      rowRenderer={rowRenderer}
    />
  </div>
);

const StandingsTable = (teams: any) => (
  <Wrapper direction="column" align="center">
    {standingsTable(teams.data)}
  </Wrapper>
);

export default StandingsTable;
