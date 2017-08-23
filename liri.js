// command line arguments
var nodeArg = process.argv;
var action = process.argv[2];
var instruct = process.argv[3];
var num2 = process.argv[4];
var num3 = process.argv[5];

// requires
var fs = require('fs');
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('spotify');
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

/*
// spotify function
function spotifyThis () {
	var queryInput = "fade to black";

	spotify.search({ type: 'track', query: queryInput}, function (error, data) {
		if (error) {
			return console.log(error);
		};
	})

	console.log("Artist: ")
}

search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);
*/

