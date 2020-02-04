import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StandingsTable } from '../../components/Standings'
import DataSection from '../../components/shared/DataSection'
import * as actions from './actions'

class Standings extends React.Component {
  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    const { loading, error, standingsData } = this.props
    return (
      <DataSection>
        {loading && 'loading...'}
        {error && 'error loading standings'}
        {!loading && !error && (
          <StandingsTable data={standingsData} />
        )}
      </DataSection>
    )
  }
}

Standings.propTypes = {
  fetchData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  standingsData: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  loading: state.standings.loading,
  error: state.standings.error,
  standingsData: state.standings.standingsData
})

export default connect(
  mapStateToProps,
  actions
)(Standings)
