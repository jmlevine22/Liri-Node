require("dotenv").config();

var keys = require(./keys.js);
var fs = require("fs");
var request = require("request");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var omdb = require('omdb');

var argTwo = process.argv[2];
var argThree = process.argv[3];


//Spotify Search 


function spotifyThisSong (){
	if (argTwo == "spotify-this-song") {

	var songName = argThree;
	

	spotify.search({ type: 'track', query: songName }, function(err, data) {
  	if (err) {
    return console.log('Error occurred: ' + err);
  	}
 
	console.log("Tracks: " + data.track); 
	console.log("Artist " + data.artist); 
	console.log("Album " + data.album);
	console.log("Preview " + data.preview_url);
	});

	else if (argThree = undefined) {
		songName = "The Sign Ace of Base";

		spotify.search({ type: 'track', query: songName  }, function(err, data) {
  	if (err) {
    return console.log('Error occurred: ' + err);
  	}
 
	console.log("Tracks: " + data.track); 
	console.log("Artist " + data.artist); 
	console.log("Album " + data.album);
	console.log("Preview " + data.preview_url);
	});
	}
}  
spotifyThisSong();



//random.txt Search 

function randomTxt (){
	if (argTwo == "do-what-it-says") {

		fs.read('random.txt', "utf8", function (err, file) {
  			if (err) throw err;

	spotify.search({ type: 'track', query: fs }, function(err, data) {
  	if (err) {
    return console.log('Error occurred: ' + err);
  	}
 
	console.log("Tracks: " + data.track); 
	console.log("Artist " + data.artist); 
	console.log("Album " + data.album);
	console.log("Preview " + data.preview_url);
	});

	}
} 
randomTxt();





//omdb Movie Search 

function movie (){
	if (argTwo == "movie-this") {

		var movieName = argThree;
	}

omdb.search(movieName, function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 
    movies.forEach(function(movie) {
  
  	console.log("Movie Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Rating " + JSON.parse(body).Rating);
    console.log("Plot " + JSON.parse(body).Plot);
    console.log("Actors " + JSON.parse(body).Actors);

  }
});

else if (argThree == undefined) {

	movieName = "Mr. Nobody";

	omdb.search(movieName, function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 
    movies.forEach(function(movie) {
  
  	console.log("Movie Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Rating " + JSON.parse(body).Rating);
    console.log("Plot " + JSON.parse(body).Plot);
    console.log("Actors " + JSON.parse(body).Actors);

  }
});
}
movie();
