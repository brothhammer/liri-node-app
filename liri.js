var keys = require("./keys.js");
var Twitter = require('twitter');
var request = require('request');
var fs = require('fs');

console.log(keys);
 
var client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_secret
});
 
var params = {screen_name: 'LearningNPM', limit:20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});