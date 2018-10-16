import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';



var Loader = require('halogen/PulseLoader');

class MyReactComponent extends Component {
 render() {
 return (
 <div>

 <h3>This is a React component!</h3>

 <div id='sampleDatepicker'>
   This is a datepicker:
   <DatePicker showTimeSelect />
 </div>

<div id='sampleLoader'>
  This is a loading spinner:
  <Loader color="#AAA" size="50px" margin="4px"/>
  <a href="https://github.com/yuanyan/halogen">halogen on github</a>
</div>

 </div>



 )
 }
}
export default MyReactComponent;