import {
    GET_NODE_DATA,
    GET_NODE_DATA_ERROR,
    GET_NODE_DATA_RECEIVED,
    RENAME_NODE,
    RENAME_NODE_ERROR,
    ADD_CHILD_NODE,
    ADD_CHILD_NODE_ERROR,
    CREATE_NODE,
    CREATE_NODE_ERROR,
    REMOVE_NODE,
    REMOVE_NODE_ERROR
} from '../symbols';
import request from 'superagent'

export default store => next => action => {
    // Default
    switch (action.type) {
        case GET_NODE_DATA:
            request
                .get('http://localhost:3003/node')
                .end((err, res) => {
                    if (err) {
                        return next({
                            type: GET_NODE_DATA_ERROR,
                            err
                        })
                    }
                    const data = JSON.parse(res.text);
                    next({
                        type: GET_NODE_DATA_RECEIVED,
                        data
                    })
                });
            break;
        case RENAME_NODE:
            request
                .post(`http://localhost:3003/node/${action.nodeId}`)
                .send({nodeName: action.nodeName, nodeId: action.nodeId})
                .end((err, res) => {
                    if (err) {
                        return next({
                            type: RENAME_NODE_ERROR,
                            err
                        })
                    }
                });
            return next(action)
            break;
        case CREATE_NODE:

            request
                .post(`http://localhost:3003/node`)
                .send({
                    nodeName: action.nodeName || "New Node",
                    childNodes: [],
                    nodeId: action.nodeId
                })
                .end((err, res) => {
                    if (err) {
                        return next({
                            type: CREATE_NODE_ERROR,
                            err
                        })
                    }

                });
            return next(action);

            break;
        case ADD_CHILD_NODE:
            request
                .post(`http://localhost:3003/node/${action.nodeId}`)
                .send({childId: action.childId, nodeId: action.nodeId})
                .end((err, res) => {
                    if (err) {
                        return next({
                            type: ADD_CHILD_NODE_ERROR,
                            err
                        })
                    }
                });
            return next(action);
            break;
        case REMOVE_NODE:
            request
                .delete(`http://localhost:3003/node/${action.nodeId}`)
                .end((err, res) => {
                    if (err) {
                        return next({
                            type: REMOVE_NODE_ERROR,
                            err
                        })
                    }
                });
            return next(action);
            break;
        default:
            break
    }

};