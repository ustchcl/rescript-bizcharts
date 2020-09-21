'use strict';

var React = require("react");
var Example1$ReasonReactBizcharts = require("./examples/Example1.bs.js");
var Example2$ReasonReactBizcharts = require("./examples/Example2.bs.js");

function App(Props) {
  var style = {
    display: "flex",
    flexDirection: "column"
  };
  return React.createElement("div", {
              style: style
            }, React.createElement(Example1$ReasonReactBizcharts.make, {}), React.createElement(Example2$ReasonReactBizcharts.make, {}));
}

var make = App;

exports.make = make;
/* react Not a pure module */
