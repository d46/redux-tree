import {
    ADD_CHILD_NODE,
    RENAME_NODE,
    CREATE_NODE
} from '../symbols';

let newNodeId = 0;
export const createNode = (nodeId) => ({
    type: CREATE_NODE,
    nodeId: ++newNodeId
});

export const addChildNode = (nodeId, childId) => ({
    type: ADD_CHILD_NODE,
    nodeId: nodeId,
    childId: childId
});

export const renameNode = (nodeId, nodeName) => ({
    type: RENAME_NODE,
    nodeId,
    nodeName
});

