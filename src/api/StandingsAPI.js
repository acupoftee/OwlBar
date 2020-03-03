// const rp = require("request-promise");
const fetch = require('cross-fetch')
const $ = require('cheerio')

const getStandings = async () => {
  let table
  rp(
    'https://salty-eyrie-03841.herokuapp.com/' +
      'https://overwatchleague.com/en-us/standings',
    {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
    }
  )
    .then(html => {
      const standingsText = $('#__NEXT_DATA__', html)[0].children[0].data
      const standingsData = JSON.parse(standingsText)
      const standings =
        standingsData.props.pageProps.blocks[1].standings.tabs[0].tables[0]
          .teams
      table = standings
    })
    .catch(err => console.error(err))
  return table
}

export default getStandings
