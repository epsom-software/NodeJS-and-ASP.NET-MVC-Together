
//This file will download the player data from the fantasy site
//and save it to your file system in the ./www/Node/Data/Player/ directory.

//To call this command from node, navigate to ./
//npm install request
//npm install fs
//node ./utils/DownloadPlayer 13

var request = require('request');
var fs = require('fs');

var playerId = process.argv[2];

var url = 'http://fantasy.premierleague.com/web/api/elements/' + playerId + '/';
var file = './www/Node/Data/Player/' + playerId + '.json';

request(url).pipe(fs.createWriteStream(file))

