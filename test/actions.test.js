import * as actions from '../src/actions'
import * as symbols from '../src/symbols'

describe('actions', () => {
    it('should create an action to create a node', () => {
        const nodeId = 1;
        const action = {
            type: symbols.CREATE_NODE,
            nodeId
        };
        expect(actions.createNode()).toEqual(action)
    });

    it('should create an action to add a child node', () => {
        const nodeId = 1;
        const childId = 1
        const action = {
            type: symbols.ADD_CHILD_NODE,
            nodeId,
            childId
        };
        expect(actions.addChildNode(nodeId, childId)).toEqual(action)
    })

    it('should create an action to rename a node', () => {
        const nodeId = 1;
        const nodeName = "First";
        const action = {
            type: symbols.RENAME_NODE,
            nodeId,
            nodeName
        };
        expect(actions.renameNode(nodeId, nodeName)).toEqual(action)
    })

    it('should create an action to removeNode a node', () => {
        const nodeId = 1;
        const action = {
            type: symbols.REMOVE_NODE,
            nodeId,
        };
        expect(actions.removeNode(nodeId)).toEqual(action)
    })

});