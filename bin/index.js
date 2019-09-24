#!/usr/bin/env node


var express = require('express');
const port = process.env.PORT || 3000;
var app = express();
var Twit = require('twit');
const yargs = require("yargs");
const T = new Twit({
  consumer_key: '0XG5299e6oSESyHvLGIMGmwW3',
  consumer_secret: 'kh08Sydpo5hYYr0DCY8i7oJRAbxNkI1NKNpdStVi08ICIwBUOW',
  access_token: '3097151617-91Ayf0gu7O81oe6ae3quLPX5cxYkf7pZlkNZ09h',
  access_token_secret: 'TPnK7IgPW0TB0m9NemXiyKAlZC6rBRpqi56w7sDhVxEgl',
})
let userQuery = []

const options = yargs
  .usage("Usage: -t <name>")
  .option("t", { alias: "track", describe: "track to search for twitter feed", type: "string", demandOption: true })
  .argv;
userQuery.push(options.track)
userQuery.push('#' + options.track)
console.log(userQuery)


app.listen(port, () => {
  console.log(`server is listening in port ${port}`)
  var stream = T.stream('statuses/filter', { track: userQuery });
  stream.on('tweet', (data) => {
    console.log(data.text)
  });
})

