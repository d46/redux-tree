import {createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers';
import services from '../services';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
    reducers,
    {
        0: {
            nodeName: "First Node",
            childNodes: [],
            nodeId: 0
        }
    },
    /* preloadedState, */ composeEnhancers(
        applyMiddleware(services)
    )
);