// const rp = require("request-promise");
const fetch = require('cross-fetch')
const $ = require("cheerio");
const url = "https://overwatchleague.com/en-us/standings";

const getStandings = async () => {
  let table
  rp(url)
    .then(html => {
      const standingsText = $("#__NEXT_DATA__", html)[0].children[0].data;
      const standingsData = JSON.parse(standingsText);
      const standings =
        standingsData.props.pageProps.blocks[1].standings.tabs[0].tables[0]
          .teams;
      table = standings;
    })
    .catch(err => console.error(err));
  return table;
};

export default getStandings;
