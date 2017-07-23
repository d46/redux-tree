import React from 'react'
import ReactDOM from 'react-dom';
import Node from './containers/Node';
import {Provider} from 'react-redux'
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Node
            nodeId={0}
        />
    </Provider>,
    window.root
)

store.dispatch({type: 'GET_TREE_DATA'});