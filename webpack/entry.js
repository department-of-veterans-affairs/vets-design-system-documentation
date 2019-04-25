//require('../node_modules/@department-of-veterans-affairs/formation/sass/core.scss');
//require('../node_modules/formation/packages/formation/sass/site/site.scss');

/* use ?url=false on css-loader if using the @ version */


import React, { Component } from 'react';
import {render} from 'react-dom';
import AdditionalInfo from '@department-of-veterans-affairs/formation-react/AdditionalInfo'
import Modal from '@department-of-veterans-affairs/formation-react/Modal'
import CollapsiblePanel from '@department-of-veterans-affairs/formation-react/CollapsiblePanel'

import MyReactComponent from './components/myReactComponent';

// Hide the modal
function hideModal(){
  console.log('hiding modal');
  el.classList.remove(visible_class);
  body.classList.remove(open_modal_body_class);
}


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

class ModalDemo extends Component {
 render() {
   return (
    <div>
      <Modal
        title="Hey"
        id="modal1"
        status="success"
        visible
        className="va-overlay va-modal"
        onClose={() => {hideModal()}}>
        <p>This is a modal</p>
      </Modal>
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

if (document.getElementById('ModalDemo')) {
  render(<ModalDemo className="foo" />, document.getElementById('ModalDemo'));



  var el = document.getElementById('modal1'),
    body = document.getElementsByTagName("BODY")[0],
      overlay_class = "va-overlay",
      visible_class = "va-overlay--open",
      open_modal_body_class = "modal-open";

  body.classList.remove(open_modal_body_class);

  if (el.classList)
    el.classList.add(overlay_class);
  else
    el.overlay_class += ' ' + overlay_class;

  function clickHandler(){
    console.log('showing modal');
    el.classList.add(visible_class);
    body.classList.add(open_modal_body_class);
  }





  var anchor = document.getElementById('demoModalButton');
  if(anchor.addEventListener) {
    anchor.addEventListener('click', clickHandler, false);
  }
  else if(anchor.attachEvent){  // this is for IE, because it doesn't support addEventListener
   anchor.attachEvent('onclick', function(){
     return clickHandler.apply(anchor, [window.event])
    });
  }



  var close_btn = document.getElementsByClassName('va-modal-close');
  if(close_btn.addEventListener) {
    close_btn.addEventListener('click', hideModal, false);
  }
  else if(close_btn.attachEvent){  // this is for IE, because it doesn't support addEventListener
   close_btn.attachEvent('onclick', function(){
     return hideModal.apply(close_btn, [window.event])
    });
  }
}

if (document.getElementById('CollapsiblePanelDemo')) {
  render(<CollapsiblePanelDemo />, document.getElementById('CollapsiblePanelDemo'));
}

