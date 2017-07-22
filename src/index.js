import React from 'react'
import ReactDOM from 'react-dom';
import Node from './containers/Node';
import {Provider} from 'react-redux'
import store from './store';
import {
    ADD_CHILD_NODE,
    RENAME_NODE
} from './symbols';

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Node
                nodeId={0}
                addChildNode={(nodeId) => {
                    store.dispatch({type: ADD_CHILD_NODE, nodeId})
                }}
                nodeName={store.getState()[0].nodeName || "First Node"}
                renameNode={(nodeId, nodeName) => {
                    store.dispatch({type: RENAME_NODE, nodeId, nodeName})
                }}
            />
        </Provider>,
        window.root
    )
};
render();
store.subscribe(render);