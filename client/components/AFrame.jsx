import 'aframe';
// import 'aframe-animation-component';
// import 'aframe-text-component';
import React from 'react';
import ReactDOM from 'react-dom';
// import Aframe from 'aframe';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import Camera from './Camera.jsx';
// import Text from './components/Text';
// import Sky from './components/Sky';
import Cubemap from './aframe-cubemap-component.js'
import registerVideoBillboard from 'aframe-video-billboard';
import aframeDraggableComponent from 'aframe-click-drag-component';
import Fazicks from 'aframe-physics-system';
import Draw from './Draw.jsx';

class VRScene extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
    }
  }

  componentWillMount () {
    console.log('FAZICKS', Fazicks)
    Fazicks.registerAll(window.AFRAME);
    registerVideoBillboard(window.AFRAME);
    aframeDraggableComponent(window.AFRAME);
  };

  clearIt() {
    context.clearRect(0,0,width,height)

  };

	render() {
    return (
    <div>
      <div id="drawing-container">
        <Draw clearIt={this.clearIt}>
      </div>
      <Scene id="aframe-scene">

  			<a-assets>	
    		</a-assets>
     		
        <a-entity id="roomEnvironment" cubemap="folder: /images/textures/SanFrancisco4/"></a-entity>

    		<a-cylinder static-body transparent="true" opacity="0.5" color="#424242" height="0.5" radius="10" position="0 -3 0"></a-cylinder>

    		<a-video-billboard click-drag id="guest1" video-billboard="minWidth: 10;" position="-8.66 1.25 -5" rotation ="0 60 0"></a-video-billboard>

    		<a-video-billboard click-drag id="guest2" video-billboard="minWidth: 10;" position="8.66 1.25 -5" rotation ="0 -60 0"></a-video-billboard>

    		<Camera position="0 0 10"></Camera>
      </Scene>
    </div>
    )
	}
}

export default VRScene;









