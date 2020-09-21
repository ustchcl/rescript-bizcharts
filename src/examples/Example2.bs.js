'use strict';

var React = require("react");
var Bizcharts = require("bizcharts");

var phData = [
  {
    date: "20 De",
    ph: 4.57
  },
  {
    date: "25-26 De",
    ph: 5.62
  },
  {
    date: "30 Dec-1Ja",
    ph: 4.12
  },
  {
    date: "9 Ja",
    ph: 5.29
  },
  {
    date: "18-19 Ja",
    ph: 4.64
  },
  {
    date: "21 Ja",
    ph: 4.31
  },
  {
    date: "26-27 Ja",
    ph: 4.30
  },
  {
    date: "28 Ja",
    ph: 4.39
  },
  {
    date: "6-7 Fe",
    ph: 4.45
  },
  {
    date: "9-11 Fe",
    ph: 5.67
  },
  {
    date: "16-17 Fe",
    ph: 4.39
  },
  {
    date: "23-24 Fe",
    ph: 4.52
  },
  {
    date: "24-25 Fe",
    ph: 4.26
  },
  {
    date: "28 Feb-1Ma",
    ph: 4.26
  },
  {
    date: "8 Ma",
    ph: 4.40
  },
  {
    date: "9 Ma",
    ph: 5.78
  },
  {
    date: "15-16 Ma",
    ph: 4.73
  },
  {
    date: "21 Ma",
    ph: 4.56
  },
  {
    date: "29-31 Ma",
    ph: 5.08
  },
  {
    date: "3-4 Ap",
    ph: 4.41
  },
  {
    date: "7-9 Ap",
    ph: 4.12
  },
  {
    date: "14 Ap",
    ph: 5.51
  },
  {
    date: "25-26 Ap",
    ph: 4.82
  },
  {
    date: "11-12 Ma",
    ph: 4.63
  },
  {
    date: "17 Ma",
    ph: 4.29
  },
  {
    date: "23 Ma",
    ph: 4.60
  }
];

function Example2(Props) {
  return React.createElement(Bizcharts.Chart, {
              data: phData,
              autoFit: true,
              height: 300.0,
              scale: {
                ph: {
                  min: 3,
                  nice: true
                },
                date: {
                  range: [
                    0,
                    1
                  ]
                }
              },
              children: null
            }, React.createElement(Bizcharts.Area, {
                  position: "date*ph"
                }), React.createElement(Bizcharts.Line, {
                  position: "date*ph"
                }));
}

var make = Example2;

exports.phData = phData;
exports.make = make;
/* react Not a pure module */
