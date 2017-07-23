import React from 'react'
import {mount} from 'enzyme'
import {Node} from '../src/containers/Node'

function setup() {
    const props = {
        addChildNode: jest.fn(),
        createNode: jest.fn(),
        removeNode: jest.fn(),
        addTodo: jest.fn(),
        nodeName: "NodeName",
        childNodes: [],
        nodeId: 1
    };

    const enzymeWrapper = mount(
        <Node {...props} />
    );

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Node', () => {
        it('should render component', () => {
            const {enzymeWrapper} = setup();
            expect(enzymeWrapper.find('[type="text"]').props().value).toBe("NodeName")
        })
    })
})
