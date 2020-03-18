import React from 'react'

const WeekLabel = ({ week }: { week: number }) => (
  <>
    <p
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '4px',
        width: '100vw',
        marginTop: '30px',
        textAlign: 'center',
        marginBottom: '0',
        borderBottom: '2px solid gray',
        borderTop: '2px solid gray',
      }}
    >{`Week ${week}`}</p>
  </>
)
export default WeekLabel
