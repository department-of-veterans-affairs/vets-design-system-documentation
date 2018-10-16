console.log("hi from the webpack/entry.js!");

//require('../node_modules/@department-of-veterans-affairs/formation/sass/core.scss');
require('../node_modules/formation/src/sass/site/site.scss');


import React, { Component } from 'react';
import {render} from 'react-dom';

import MyReactComponent from './components/myReactComponent';
class App extends Component {
 render() {
 return (
 <MyReactComponent />
 )
 }
}

render(<App />, document.getElementById('reactComponentDemo'));


