const axios = require('axios');
const { getSongFroSpotify } = require('./getSongFroSpotify');

module.exports.postChannel = async () => {
  var randomSpotifySongUrl = await getSongFroSpotify();
  const url = 'https://slack.com/api/chat.postMessage';
  const res = await axios.post(url, { channel: '#channelName', text: randomSpotifySongUrl }, { headers: { authorization: `Bearer ${process.env.SLACK_TOKEN}` } });
  console.log(res.data);
};