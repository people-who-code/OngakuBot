const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();
const fs = require('fs');
const titlesJson = JSON.parse(fs.readFileSync('titles.json'));
console.log(Math.round(Math.random() * (titlesJson.titles.length - 1) + 1));
var spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    accessToken: process.env.SPOTIFY_ACCESS_TOKEN,
    redirectUri: 'http://www.example.com/callback',
});

module.exports.getSongFroSpotify = async () => {
    var titleToPickRandomlyIndex = Math.round(Math.random() * (titlesJson.titles.length - 1) + 1)
    var requestToSpotify = await spotifyApi.searchTracks(titlesJson.titles[titleToPickRandomlyIndex]);
    var pickIndex = Math.round(Math.random() * (requestToSpotify.body.tracks.items.length - 1) + 1);
    console.log(pickIndex);
    console.log(requestToSpotify.body.tracks.items[pickIndex - 1].external_urls.spotify)
    return requestToSpotify.body.tracks.items[pickIndex - 1].external_urls.spotify;
};
