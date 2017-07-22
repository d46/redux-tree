import React from 'react'
import {Component} from 'react';

class Node extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let {
            nodeId,
            renameNode
        } = this.props;
        renameNode(nodeId, e.target.value)
    }

    render() {
        let {
            addChildNode,
            nodeName
        } = this.props;
        return (
            <div className="node-container">
                <input type="text" value={nodeName} onChange={this.handleChange}/>
                <button onClick={ () => {
                    addChildNode()
                } }> Add Child Node
                </button>
                {nodeName}
                <button> Remove</button>
            </div>
        )
    }
}

export default Node;