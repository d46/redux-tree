import {
    ADD_CHILD_NODE,
    RENAME_NODE
} from '../symbols';
const node = (state, action) => {

    switch (action.type) {
        case ADD_CHILD_NODE:
            return Object.assign({}, state, {
                [action.nodeId]: Object.assign({}, state[action.nodeId], {
                    childNodes:[
                        ...state[action.nodeId].childNodes,
                        action.childId
                    ]
                })
            });
        case RENAME_NODE:
            return Object.assign({}, state, {
                [action.nodeId]: Object.assign({},state[action.nodeId],{
                    nodeName: action.nodeName
                })
            });
        default:
            return state;
    }
};

export default node;