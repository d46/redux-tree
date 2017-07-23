import {
    ADD_CHILD_NODE,
    RENAME_NODE,
    CREATE_NODE,
    REMOVE_NODE,
    GET_NODE_DATA_RECEIVED,
} from '../symbols';
import {nodeId} from '../utils/NodeId'
const node = (state, action) => {
    switch (action.type) {
        case CREATE_NODE:
            return Object.assign({}, state, {
                [action.nodeId]: {
                    nodeName: action.nodeName || "New Node",
                    childNodes: [],
                    nodeId: action.nodeId
                }
            });
        case ADD_CHILD_NODE:
            return Object.assign({}, state, {
                [action.nodeId]: Object.assign({}, state[action.nodeId], {
                    childNodes: [
                        ...state[action.nodeId].childNodes,
                        action.childId
                    ]
                })
            });
        case RENAME_NODE:
            return Object.assign({}, state, {
                [action.nodeId]: Object.assign({}, state[action.nodeId], {
                    nodeName: action.nodeNCREATE_NODEame
                })
            });
        case REMOVE_NODE:
            // Deep clone
            let newState = JSON.parse(JSON.stringify(state));
            // Set current nodeId to delete collection
            let nodesWillRemove = [
                action.nodeId
            ];
            // Get nodes an array from state
            let nodes = Object.keys(newState).map((item) => newState[item]);
            // Find parent node for remove from child
            let parentNode = nodes.find((node) => node.childNodes.indexOf(action.nodeId) > -1);
            // Remove current node from child
            newState[parentNode.nodeId].childNodes = newState[parentNode.nodeId].childNodes
                .filter((i) => i !== action.nodeId);

            // Iterate to find all current node childs
            let iterator = (i) => {
                // If its an array and greater than 0
                // It has child and continue to iterate
                if (Array.isArray(i) && i.length > 0) {
                    i.forEach((nodeId) => {
                        iterator(newState[nodeId].childNodes)
                    })
                }
                // Add all stack items to an array
                nodesWillRemove.push(...i);
            }
            iterator(newState[action.nodeId].childNodes);
            // Remove all childs from state
            nodesWillRemove.forEach(nodeId => delete newState[nodeId]);
            return newState;
        case GET_NODE_DATA_RECEIVED:
            nodeId.set(Object.keys(action.data).length);
            return action.data;
        default:
            return state;
    }
};

export default node;