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
function myTweets() {

	// read keys file
	fs.readFile("keys.js", "utf8", function (error, data) {
		if (error) {
			return console.log(error);
		}

		// print tweets
		console.log(data);
	})
}


// global variables
// twitter
// my-tweets
var tweets = "";
var username = "LiriAnderson";

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

// twitter
if (instruct == "tweets") {
	var twitterKeys = require("./keys.js");
	var Twitter = require("twitter");
};





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
