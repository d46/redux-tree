import React from 'react'
import ReactDOM from 'react-dom';
import Node from './containers/Node';
import {Provider} from 'react-redux'
import store from './store';
import {ADD_CHILD_NODE} from './symbols';

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Node
                addChildNode={(nodeId) => {
                    store.dispatch({type: ADD_CHILD_NODE, nodeId})
                }}
            />
        </Provider>,
        window.root
    )
};
render();
store.subscribe(render);