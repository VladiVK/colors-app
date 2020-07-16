import React from 'react';
import { Component } from 'react';

import './ColorBox.css';

class ColorBox extends Component {
    static defaultProps = {
        genColor: () => Math.floor(Math.random() * 256 ),
    }
constructor(props) {
    
    super(props);
    const {genColor} = this.props;
    this.state = {
        color: `rgb(${genColor()}, ${genColor()}, ${genColor()})`,
    }
    this.getRandom = this.getRandom.bind(this);
    this.setColor = this.setColor.bind(this);
}
getRandom() {
    return Math.floor(Math.random() * 256 );
}
setColor() {
    this.setState({
        color: `rgb(${this.getRandom()}, ${this.getRandom()}, ${this.getRandom()})`
    })
}
  

  render() {
    const styles = {
      backgroundColor: this.state.color,
    };
    return <div className='ColorBox' style={styles} onClick={this.setColor}></div>;
  }
}

export default ColorBox;
