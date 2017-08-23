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




// global variables
// twitter
// my-tweets

// spotify
// spotify-this-song
var artist = "";
var songName = "";
var link = "";
var album = "";

// movie
// movie-this
var title = ""
var year = 0;
var rating = 0;
var plot = "";
var actors = "";

// do what it says
var doThis = "";

// what these commands do
// this will show the last 20 tweets
// and when they were created in terminal

// store the following in variables
// or just do the following below:

/*
At the top of the liri.js file, write the code you need to grab the data from keys.js. 
Then store the keys in a variable.
Make it so liri.js can take in one of the following commands:

my-tweets
spotify-this-song
movie-this
do-what-it-says
*/
