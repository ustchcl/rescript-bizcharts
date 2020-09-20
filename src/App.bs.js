'use strict';

var React = require("react");
var Example1$ReasonReactBizcharts = require("./examples/Example1.bs.js");

function App(Props) {
  var style = {
    display: "flex",
    flexDirection: "column"
  };
  return React.createElement("div", {
              style: style
            }, React.createElement(Example1$ReasonReactBizcharts.make, {}));
}

var make = App;

exports.make = make;
/* react Not a pure module */
