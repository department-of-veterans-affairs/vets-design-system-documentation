console.log("hi from the webpack/entry.js!");

require('../src/_sass/app.scss');


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