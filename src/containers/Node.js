import React from 'react'
import {Component} from 'react';
import * as actions from '../actions'
import {connect} from 'react-redux'

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
            nodeName,
            childNodes,
            nodeId,
            createNode
        } = this.props;
        return (
            <div className="node-container">
                <input type="text" value={nodeName} onChange={this.handleChange}/>
                <button onClick={ () => {
                    let childNodeId = createNode().nodeId
                    addChildNode(nodeId, childNodeId)
                } }> Add Child Node
                </button>
                <button> Remove</button>
                <div className="child-container">
                    {childNodes.map((childId, index) => (
                        <ConnectedNode key={index} nodeId={childId}/>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, node) {
    return state[node.nodeId]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode