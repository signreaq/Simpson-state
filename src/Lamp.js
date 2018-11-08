// Lamp.js

import React, { Component } from 'react';

class Lamp extends Component {





  render() {
    const working = this.props.on ? 'on' : 'off';
    return (
        
        
        <div className="Lamp">

             <figure className={working} />
        </div>
        

    );
  }
}

export default Lamp;

