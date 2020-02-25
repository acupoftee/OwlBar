import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { EventCard, DateSelector } from "../../components/Schedule";
import DataSection from "../../components/shared/DataSection";
import * as actions from "./actions";
import { ScheduleAction } from "./actions";
import { ScheduleState } from "./types";
import { PageBar } from "../../components/TabBar";
import { HexLoader } from "../../components/Loaders";
export interface Props {
  fetchScheduleData: (week: number) => Promise<ScheduleAction>;
  loading: boolean;
  error: boolean;
  scheduleData: any;
}

const Schedule = ({
  fetchScheduleData,
  error,
  loading,
  scheduleData
}: {
  fetchScheduleData: (week: number) => Promise<ScheduleAction>;
  loading: boolean;
  error: boolean;
  scheduleData: any;
}) => {
  useLayoutEffect(() => {
    fetchScheduleData(1);
  }, []);

  const [week, setWeek] = useState(1);

  const addWeek = (week: number) => {
    const newWeek = week < 27 ? week++ : 27;
    return week;
  };

  const subWeek = (week: number) => {
    const newWeek = week > 1 ? week-- : 1;
    return week;
  };

  return (
    <PageBar currentTab={1}>
      <>
        <DateSelector
          date={week}
          addWeek={() => {
            const newWeek = addWeek(week);
            fetchScheduleData(newWeek);
            setWeek(newWeek);
          }}
          subWeek={() => {
            const newWeek = subWeek(week);
            fetchScheduleData(newWeek);
            setWeek(newWeek);
          }}
        />
        <DataSection
          style={{
            height: "auto",
            marginTop: "30px"
          }}
        >
          {loading && <HexLoader />}
          {error && "error loading schedule"}
          {!loading && !error && (
            <div style={{ overflowY: "scroll" }}>
              {scheduleData.tableData.events.map((event: any, idx: number) => {
                return (
                  <EventCard
                    key={idx}
                    bannerBackground={
                      event.eventBanner === null
                        ? ""
                        : event.eventBanner.backgroundImageUrl
                    }
                    bannerLogo={
                      event.eventBanner === null
                        ? ""
                        : event.eventBanner.featuredImage
                    }
                    host={
                      event.eventBanner === null
                        ? ""
                        : event.eventBanner.hostingTeam.shortName
                    }
                    hostId={
                      event.eventBanner === null
                        ? ""
                        : event.eventBanner.hostingTeam.teamId
                    }
                    location={
                      event.eventBanner === null
                        ? ""
                        : event.eventBanner.venue.title
                    }
                    matches={event.matches}
                  />
                );
              })}
            </div>
          )}
        </DataSection>
      </>
    </PageBar>
  );
};

const mapStateToProps = ({ schedule }: { schedule: ScheduleState }): any => ({
  loading: schedule.loading,
  error: schedule.error,
  scheduleData: schedule.scheduleData
});

export default connect<ScheduleState, Props>(
  // @ts-ignore
  mapStateToProps,
  actions
)(Schedule);
