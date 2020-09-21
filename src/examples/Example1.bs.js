'use strict';

var React = require("react");
var Bizcharts = require("bizcharts");
var Coordinate$ReasonReactBizcharts = require("../base/Coordinate.bs.js");

var data = [
  {
    year: "1991",
    rainFall: 11.47
  },
  {
    year: "1992",
    rainFall: 21.0
  },
  {
    year: "1993",
    rainFall: 27.36
  },
  {
    year: "1994",
    rainFall: 8.11
  },
  {
    year: "1995",
    rainFall: 24.35
  },
  {
    year: "1996",
    rainFall: 12.46
  },
  {
    year: "1997",
    rainFall: 12.4
  },
  {
    year: "1998",
    rainFall: 31.01
  },
  {
    year: "1999",
    rainFall: 9.09
  },
  {
    year: "2000",
    rainFall: 11.57
  },
  {
    year: "2001",
    rainFall: 17.94
  },
  {
    year: "2002",
    rainFall: 4.42
  },
  {
    year: "2003",
    rainFall: 16.49
  },
  {
    year: "2004",
    rainFall: 9.24
  },
  {
    year: "2005",
    rainFall: 37.25
  },
  {
    year: "2006",
    rainFall: 13.19
  },
  {
    year: "2007",
    rainFall: 3.21
  },
  {
    year: "2008",
    rainFall: 13.53
  },
  {
    year: "2009",
    rainFall: 9.08
  },
  {
    year: "2010",
    rainFall: 16.36
  },
  {
    year: "2011",
    rainFall: 20.2
  },
  {
    year: "2012",
    rainFall: 8.69
  },
  {
    year: "2013",
    rainFall: 5.85
  },
  {
    year: "2014",
    rainFall: 6.08
  },
  {
    year: "2015",
    rainFall: 8.52
  },
  {
    year: "2016",
    rainFall: 9.65
  },
  {
    year: "2017",
    rainFall: 19.0
  },
  {
    year: "2018",
    rainFall: 4.79
  }
];

function Example1(Props) {
  return React.createElement(Bizcharts.Chart, {
              data: data,
              autoFit: true,
              width: 500.0,
              height: 300.0,
              padding: "auto",
              interactions: ["active-region"],
              children: null
            }, React.createElement(Bizcharts.Interval, {
                  position: "year*rainFall",
                  color: "year"
                }), React.createElement(Coordinate$ReasonReactBizcharts.make, {
                  type_: "polar"
                }));
}

var make = Example1;

exports.data = data;
exports.make = make;
/* react Not a pure module */
