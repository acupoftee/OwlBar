const fetch = require('cross-fetch')

fetch('https://wzavfvwgfk.execute-api.us-east-2.amazonaws.com/production/owl/paginator/schedule?stage=regular_season&page=1&season=2020&season=2020&locale=en-us', {
  headers: { 'Content-Type': 'application/json', 'referer': 'https://overwatchleague.com/en-us' },
})
  .then(res => res.json())
  .then(json => console.log(JSON.stringify(json)))

