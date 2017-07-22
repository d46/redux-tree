import {
    ADD_CHILD_NODE,
    RENAME_NODE
} from '../symbols';

let newNodeId = 0;
export const addChildNode = (nodeId) => ({
    type: ADD_CHILD_NODE,
    nodeId: nodeId,
    childId: ++newNodeId
});

export const renameNode = (nodeId, nodeName) => ({
    type: RENAME_NODE,
    nodeId,
    nodeName
});

