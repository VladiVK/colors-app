import React, { Component } from 'react';
import ColorBox from '../ColorBox';
import './ColorsContainer.css'



export default class ColorsContainer extends Component {
    static defaultProps = {
        nBoxes: 8,
    }
    constructor(props) {
        super(props);
        this.state = {
            nColorBoxes: Array.from({ length: this.props.nBoxes })
        };
    }
 
    render() {
        return (
            <div className='ColorsContainer'>
                {this.state.nColorBoxes.map( box => <ColorBox />)}
                
            </div>
        )
    }
}
