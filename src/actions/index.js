import {
    ADD_CHILD_NODE
} from '../symbols';

export const addChildNode = (nodeId) =>({
    type: ADD_CHILD_NODE,
    nodeId
});