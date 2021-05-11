//require('../node_modules/@department-of-veterans-affairs/formation/sass/core.scss');
//require('../node_modules/formation/packages/formation/sass/site/site.scss');

/* use ?url=false on css-loader if using the @ version */


import React, { Component } from 'react';
import {render} from 'react-dom';
import AdditionalInfo from '@department-of-veterans-affairs/formation-react/AdditionalInfo'
import CollapsiblePanel from '@department-of-veterans-affairs/formation-react/CollapsiblePanel'

import MyReactComponent from './components/myReactComponent';

class AdditionalInfoDemo extends Component {
 render() {
   return (
    <div>
      <AdditionalInfo triggerText="Example additional info">
        <ul>
          <li>info A</li>
          <li>info B</li>
          <li>info C</li>
          <li>info D</li>
        </ul>
      </AdditionalInfo>
    </div>
   )
 }
}

class AdditionalInfoDemoHintText extends Component {
 render() {
   return (
    <div>
      <AdditionalInfo triggerText="Why is this required?">
        <p>We need the Veteran’s Social Security number or tax identification number to process the application when it’s submitted online, but it’s not a requirement to apply for the program.</p>
      </AdditionalInfo>
    </div>
   )
 }
}

class CollapsiblePanelDemo extends Component {
 render() {
   return (
    <div>
      <CollapsiblePanel
        panelName="Panel 1">
        <div>This panel defaults to closed.</div>
      </CollapsiblePanel>

      <CollapsiblePanel
        panelName="Panel 2" startOpen>
        <div>This panel defaults to open.</div>
      </CollapsiblePanel>
    </div>
   )
 }
}



if (document.getElementById('reactComponentDemo')){
  render(<MyReactComponent />, document.getElementById('reactComponentDemo'));
}

if (document.getElementById('AdditionalInfoDemo')) {
  render(<AdditionalInfoDemo />, document.getElementById('AdditionalInfoDemo'));
}

if (document.getElementById('AdditionalInfoDemo-HintText')) {
  render(<AdditionalInfoDemoHintText />, document.getElementById('AdditionalInfoDemo-HintText'));
}

if (document.getElementById('CollapsiblePanelDemo')) {
  render(<CollapsiblePanelDemo />, document.getElementById('CollapsiblePanelDemo'));
}

