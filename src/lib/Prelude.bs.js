'use strict';


var y = {
  contents: 5
};

y.contents = y.contents + 1 | 0;

var x = 5;

exports.x = x;
exports.y = y;
/*  Not a pure module */
