import React, { Component } from "react";
import { connect } from "react-redux";
import { StandingsTable } from "../../components/Standings";
import DataSection from "../../components/shared/DataSection";
import * as actions from "./actions";
import { StandingsAction } from "./actions";
import { StandingsState } from "./types";

export interface Props {
  fetchData?: () => Promise<StandingsAction>;
  loading: boolean;
  error: boolean;
  standingsData: Object[];
}

class Standings extends Component<Props, StandingsState> {
  componentDidMount() {
    this.props.fetchData && this.props.fetchData();
  }

  render() {
    const { loading, error, standingsData } = this.props;
    return (
      <DataSection>
        {loading && "loading..."}
        {error && "error loading standings"}
        {!loading && !error && <StandingsTable data={standingsData} />}
      </DataSection>
    );
  }
}

const mapStateToProps = ({
  standings
}: {
  standings: StandingsState;
}): Props => ({
  loading: standings.loading,
  error: standings.error,
  standingsData: standings.standingsData
});

export default connect<StandingsState, Props>(
  // @ts-ignore
  mapStateToProps,
  actions
)(Standings);
