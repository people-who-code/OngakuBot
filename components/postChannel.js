const axios = require('axios');

const slackToken = 'xoxb-YOUR-TOKEN_HERE';

function postChannel() {

run().catch(err => console.log(err));


async function run() {
  const url = 'https://slack.com/api/chat.postMessage';
  const res = await axios.post(url, {
    channel: '#test',
    text: getSpotifySong
  }, { headers: { authorization: `Bearer ${slackToken}` } });

  console.log('Done', res.data);
}


function getSpotifySong() {

// spotify get logic here

return songlink;
}

}

module.exports = postChannel;

// this from https://thecodebarbarian.com/working-with-the-slack-api-in-node-js.html

// refer here for spotify https://www.npmjs.com/package/spotify-web-api-node