import {createStore} from 'redux'
import reducers from '../reducers';

export default createStore(reducers, {
        0: {
            nodeName: "First Node",
            childNodes: [],
            nodeId: 0
        }
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
