import {
    ADD_CHILD_NODE,
    RENAME_NODE,
    CREATE_NODE,
    REMOVE_NODE
} from '../symbols';
import {nodeId} from '../utils/NodeId'

export const createNode = () => ({
    type: CREATE_NODE,
    nodeId: nodeId.next()
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

export const removeNode = (nodeId) => ({
    type: REMOVE_NODE,
    nodeId
})
