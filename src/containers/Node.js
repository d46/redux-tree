import React from 'react'
import {Component} from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux'

export class Node extends Component {

    handleChange = (e) => {
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

function mapStateToProps(state, node) {
    return state[node.nodeId]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode