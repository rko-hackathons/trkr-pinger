// test2.js
// from: https://gist.github.com/alessioalex/1360979
//
var request = require('request'), default_headers, 
    //site_root = 'http://104.236.230.185:8080', //URL to hit
    //site_root = 'http://findtrkr.com:8080'
    site_root = 'http://localhost:8080';


var argv = require('optimist').argv,
//  parser = require('./lib/parser'),
  latLon = argv.l || process.env.PINGER_LATLON || null,
  uid = argv.u || null,
  delay = argv.d || 1,
  steps = argv.n || 1,
  stat = argv.s || "ok";

if (argv.v) {
	require('request-debug')(request);
	//request.stopDebugging();
}

default_headers = {
  'User-Agent': 'Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1',
  'Accept': 'text/html,application/json,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-us,en;q=0.5',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.7',
  // 'Connection': 'keep-alive',
  'Cache-Control': 'max-age=0',
  'Content-Type': 'application/json'
};

var help = "Usage: pinger [OPTION]\n\
Send ping(s) to TRKR based on [OPTION].\n\
  -u=uid\t\tSet user ID\n\
  -d=delay\t\tset delay in minutes\n\
  -r\t\t\tMove randomly between steps\n\
  -v\t\t\t(Verbose) show raw requests and responses to TRKR\n\
  -n=steps\t\tRun N steps\n\
  -s=status\t\tSet status string\n\
  -l=latlon\t\tThe latitude,longitude co-ordinates for the location";

if (argv.help) {
  console.log(help);
  process.exit(0);
}

if (uid === null) {
  console.error('Missing required user id');
  console.error(help);
  process.exit(1);
}
if (latLon === null)  {
  console.error('Missing required lat/lon co-ordinates');
  console.error(help);
  process.exit(1);
}

// break lat lon out to two variables
var comma = latLon.indexOf(",");
var lat = latLon.substr(0,comma);
var lon = latLon.substr(comma+1,latLon.length);
console.log("lat = " + lat + " lon = " + lon);

// now start loop
while (steps > 0){
	console.log("step="+steps);

	//console.log(options)

	// delay for 'delay' minutes
	console.log("delaying "+ delay + " minutes");
  	var t = setTimeout(function(){
	// all of this is delayed by delay minutes ----------------------
    console.log("Ping from user="+uid+" at "+lat+","+lon+ " with a status of ["+stat+ "] sent at "+new Date());
request({
  url: site_root + '/pings',
  headers: default_headers,
  method: 'POST',
  qs: {uid: uid, did: '0'},
  //json: true,
  //body: JSON.stringify({ user:'my_user', password:'my_pass' })
  body: JSON.stringify({source: 'pinger', uid: uid, state: stat, loc: { lat: lat, lon: lon, source: 'pinger' }})
}, function (err, res, body) {
  if (err) {
     console.log(err);
     //process.exit(1);
  }
  if (!err && res.statusCode == 201) {
    //console.log("ping response received => "+body);
    console.log("ping response received at ["+new Date()+"] => "+body);
    //console.log(body);
  } else {
     console.error('Unexpected status code from TRKR -> ' + 
	response.statusCode);
     //process.exit(1);
  }
});
	// if random then modify here
	if (argv.r) {
		console.log("generating random movement");
  		lat++;
		lon++;
	}
}, delay*2000*60);
	steps --;
}

console.log("got to end");
//process.exit(0);
//EOF
