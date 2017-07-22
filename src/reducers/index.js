import {
    ADD_CHILD_NODE,
    RENAME_NODE
} from '../symbols';
const node = (state, action) => {
    switch (action.type) {
        case ADD_CHILD_NODE:
        case RENAME_NODE:
            return Object.assign({}, state, {
                [action.nodeId]: {
                    nodeName: action.nodeName
                }
            });
        default:
            return state;
    }
};

export default node;