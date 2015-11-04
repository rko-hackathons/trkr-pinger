var request = require('request'), default_headers, site_root = 'http://localhost:8080';
require('request-debug')(request);

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

request({
  url: site_root + '/pings',
  headers: default_headers,
  method: 'POST',
  qs: {uid: '1', did: '0'},
  //json: true,
  //body: JSON.stringify({ user:'my_user', password:'my_pass' })
  body: JSON.stringify({source: 'pinger', uid: '1', oid: '01', tid: '01', loc: { lat: 10, lon: 20, source: 'pinger' }})
}, function (err, res, body) {
  if (!err && res.statusCode == 201) {
    console.log(body);
  }
});

