// command line arguments
var nodeArg = process.argv;
var action = process.argv[2];
var instruct = process.argv[3];
var perform = process.argv[4];
// var num2 = process.argv[4];
// var num3 = process.argv[5];

// requires
var fs = require('fs');
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var omdbApi = require('omdb-client');
var keys = require ('./keys.js');

// switch case basically if/then from probank
switch (action) {
	case "my-tweets":
	myTweets();
	break;

	case "spotify-this-song":
	spotifyThis();
	break;

	case "movie-this":
	movieThis();
	break;

	case "do-what-it-says":
	doWhatItSays();
	break;

	default:
		console.log(instruct + " : command is not part of the matrix");
}

// the my tweets function
function myTweets () {

var client = new Twitter ({
	consumer_key: keys.twitterKeys.consumer_key,
	consumer_secret: keys.twitterKeys.consumer_secret,
	access_token_key: keys.twitterKeys.access_token_key,
	access_token_secret: keys.twitterKeys.access_token_secret
});

var user = 'LiriAnderson';
var params = {count: 20};

client.get('statuses/user_timeline', params, function (error, tweets, response) {
	if (!error) {
		// need to include the following after .text + " Created on: " + tweets[i].created_at
		for (var i = 0; i < tweets.length; i++) {
			console.log(tweets[i].text);
		};
	}else{
		console.log(error);
	}
});
}

// spotify
// default is fade to black by metallica
// sorry ace of base by someone....
function spotifyThis () {

var spotify = new Spotify ({
	id: keys.spotifyKeys.client_id,
	secret: keys.spotifyKeys.client_secret
});

var queryInput = "fade to black";

if (instruct !== undefined) {
	queryInput = instruct;
};

spotify.search({ type: 'track', query: queryInput}, function (error, data) {
	if (error) {
		return console.log(error);
	};
	console.log("Artist: " + data.tracks.items[0].artists[0].name);
	console.log("Song Name: " + data.tracks.items[0].name);
	console.log("Preview Link: " + data.tracks.items[0].external_urls.spotify);
	console.log("Album: " + data.tracks.items[0].album.name);
	// console.log(data);
});
}

// omdb 

function movieThis (movie) {

	var request = require('request');

	var movie = "mr. nobody";

	if (instruct !== undefined) {
		movie = instruct;
	};

	var queryUrl = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=40e9cece';

	request(queryUrl, function (error, response, body) {
		if (error) {
			return console.log('Error:', error);
		};
		console.log('--------------------');
		console.log('Title:', JSON.parse(body).Title);
		console.log('Year:', JSON.parse(body).Year);
		console.log('IMDB Rating:', JSON.parse(body).imdbRating);
		console.log('Rotten Tomatoes:', JSON.parse(body).tomatoRating);
		console.log('Country:', JSON.parse(body).Country);
		console.log('Language:', JSON.parse(body).Language);
		console.log('Plot:', JSON.parse(body).Plot);
		console.log('Actors:', JSON.parse(body).Actors);	
		console.log('--------------------');
	})

}
// still need to setup defaul search
// parse int not working with tomato rating

function doWhatItSays () {

	var fs = require('fs');

	fs.readFile('random.txt', 'utf8', function (error, data) {

		console.log(data);
	})

}




