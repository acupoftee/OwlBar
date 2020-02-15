import React, { Fragment, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { StandingsTable } from "../../components/Standings";
import DataSection from "../../components/shared/DataSection";
import * as actions from "./actions";
import { StandingsAction } from "./actions";
import { StandingsState } from "./types";
import { PageBar } from "../../components/TabBar";

export interface Props {
  fetchData: () => Promise<StandingsAction>;
  loading: boolean;
  error: boolean;
  standingsData: Object[];
}

const Standings = ({
  fetchData,
  error,
  loading,
  standingsData
}: {
  fetchData: () => Promise<StandingsAction>;
  loading: boolean;
  error: boolean;
  standingsData: Object[];
}) => {
  useLayoutEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <PageBar currentTab={2}>
      <DataSection>
        {loading && "loading..."}
        {error && "error loading standings"}
        {!loading && !error && <StandingsTable data={standingsData} />}
      </DataSection>
    </PageBar>
  );
};

const mapStateToProps = ({
  standings
}: {
  standings: StandingsState;
}): any => ({
  loading: standings.loading,
  error: standings.error,
  standingsData: standings.standingsData
});

export default connect<StandingsState, Props>(
  // @ts-ignore
  mapStateToProps,
  actions
)(Standings);
