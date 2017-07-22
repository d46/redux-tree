import React from 'react'
import {Component} from 'react';

class Node extends Component {

    render() {
        let {
            addChildNode,
        } = this.props;
        return (
            <div className="node-container">
                <input type="text" />
                <button onClick={ ()=>{ addChildNode() } }> Add Child Node</button>
                <button> Remove</button>
            </div>
        )
    }
}

export default Node;