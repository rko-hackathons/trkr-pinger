# TRKR-Pinger

[![Build Status](https://secure.travis-ci.org/shapeshed/weatherme.png)](http://travis-ci.org/shapeshed/weatherme)
[![Code Climate](https://codeclimate.com/repos/52813f607e00a4097e0f98de/badges/a9ac9377fa3fb672affa/gpa.png)](https://codeclimate.com/repos/52813f607e00a4097e0f98de/feed)

Pinger is a simple command line tool to generate pings to TRKR

## Installation

    npm install -g pinger

## Options

    --help    # show help
    -u uid    # set user id
    -d mins   # delay between steps in minutes
    -r        # move randomly between steps
    -n n      # run N steps
    -s status # set status string
    -l latlon # the initial lat-long co-ordinates for the location. This may also be set by the PINGER_LATLON environment variable

## Usage

Get the [lat-long co-ordinates][1] for the location you want.

    ♣ pinger -u 17b1e3cae7b68e290654b43 -l 51.8498698,-0.6637842

Will send a sing ping for uid to TRKR at location.  Location can also be set before the pinger call:

    ♣ export PINGER_LATLON=51.8498698,-0.6637842
    ♣ pinger -n 5 -u 17b1e3cae7b68e290654b43 
lat = 20 lon = 30
step=5
delaying 1 minutes
step=4
delaying 1 minutes
step=3
delaying 1 minutes
step=2
delaying 1 minutes
step=1
delaying 1 minutes
got to end
generating random movement
generating random movement
generating random movement
generating random movement
generating random movement
{"pid":"563900998833a98ef8dd63c9","source":null,
"uid":"17b1e3cae7b68e290654b43","oid":"01","tid":"01","createDate":null,
"loc":{"lat":52.8498698,"lon":-1.6637842,"source":"pinger"},"status"

{"pid":"563900998833a98ef8dd63c8","source":null,
"uid":"17b1e3cae7b68e290654b43","oid":"01","tid":"01","createDate":null,
"loc":{"lat":51.8498698,"lon":-0.6637842,"source":"pinger"},"status"

{"pid":"563900998833a98ef8dd63ca","source":null,
"uid":"17b1e3cae7b68e290654b43","oid":"01","tid":"01","createDate":null,
"loc":{"lat":53.8498698,"lon":-2.6637842,"source":"pinger"},"status"

{"pid":"563900998833a98ef8dd63cc","source":null,
"uid":"17b1e3cae7b68e290654b43","oid":"01","tid":"01","createDate":null,
"loc":{"lat":55.8498698,"lon":-3.6637842,"source":"pinger"},"status"

{"pid":"563900998833a98ef8dd63cb","source":null,
"uid":"17b1e3cae7b68e290654b43","oid":"01","tid":"01","createDate":null,
"loc":{"lat":54.8498698,"lon":-4.6637842,"source":"pinger"},"status"

## Examples

These examples assume the environment variable PINGER_LATLON has been set.

### Run a single ping

    ♣ pinger -u 17b1e3cae7b68e290654b43
    Ping from 51.8498698,-0.6637842 with status of OK sent at date

### Ping 8 times with a delay of 60 minutes and random movement

    ♣  pinger -u 17b1e3cae7b68e290654b43 -n 8 -d 60 -r 

[1]: http://dbsgeo.com/latlon/
[2]: http://linux.die.net/man/1/column
