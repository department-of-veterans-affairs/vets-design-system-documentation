var r,e={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/r=e,function(){var e={}.hasOwnProperty;function f(){for(var r=[],i=0;i<arguments.length;i++){var n=arguments[i];if(n){var o=typeof n;if("string"===o||"number"===o)r.push(n);else if(Array.isArray(n)){if(n.length){var t=f.apply(null,n);t&&r.push(t)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var a in n)e.call(n,a)&&n[a]&&r.push(a);else r.push(n.toString())}}return r.join(" ")}r.exports?(f.default=f,r.exports=f):window.classNames=f}();const f=e.exports;export{f as c}