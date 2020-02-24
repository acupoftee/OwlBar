const fetch = require('cross-fetch')

const getSchedule = async week => {
  let schedule
  fetch("https://salty-eyrie-03841.herokuapp.com/" + `https://owl-bar-api.herokuapp.com/schedule/week/${week}`, {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "http://localhost:3000"
  })
    .then(json => {
      console.log(json)
    })
  return schedule
}

export default getSchedule
