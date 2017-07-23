import reducer from '../src/reducers';
import * as symbols from '../src/symbols';

describe('reducers', () => {

    it('should handle create node state', () => {
        expect(reducer(
            [], {
                type: symbols.CREATE_NODE,
                nodeName: "NodeName",
                nodeId: 1
            }
        )).toEqual(
            {
                "1": {
                    nodeName: "NodeName",
                    nodeId: 1,
                    childNodes: []
                }
            }
        )
    });

    it('should handle add child node state', () => {
        expect(reducer(
            {
                "1": {
                    nodeName: "NodeName",
                    nodeId: 1,
                    childNodes: []
                }
            }, {
                type: symbols.ADD_CHILD_NODE,
                nodeId: 1,
                childId: 2
            }
        )).toEqual(
            {
                "1": {
                    nodeName: "NodeName",
                    nodeId: 1,
                    childNodes: [2]
                }
            }
        )
    });

    it('should handle rename node state', () => {
        expect(reducer(
            {
                "1": {
                    nodeName: "NodeName",
                    nodeId: 1,
                    childNodes: []
                }
            }, {
                type: symbols.RENAME_NODE,
                nodeId:1,
                nodeName: "NewNodeName"
            }
        )).toEqual(
            {
                "1": {
                    nodeName: "NewNodeName",
                    nodeId: 1,
                    childNodes: []
                }
            }
        )
    });

    it('should handle remove node state', () => {
        expect(reducer(
            {
                "1": {
                    nodeName: "NodeName",
                    nodeId: 1,
                    childNodes: [2]
                },
                "2":{
                    nodeName: "NodeName2",
                    nodeId: 2,
                    childNodes: []
                }
            }, {
                type: symbols.REMOVE_NODE,
                nodeId:2
            }
        )).toEqual(
            {
                "1": {
                    nodeName: "NodeName",
                    nodeId: 1,
                    childNodes: []
                }
            }
        )
    });


    it('should handle initial state', () => {
        expect(reducer(
            {}, {
                type: symbols.GET_NODE_DATA_RECEIVED,
                data: {
                    "1": {
                        nodeName: "NodeName",
                        nodeId: 1,
                        childNodes: [2]
                    },
                    "2":{
                        nodeName: "NodeName2",
                        nodeId: 2,
                        childNodes: []
                    }
                }
            }
        )).toEqual(
            {
                "1": {
                    nodeName: "NodeName",
                    nodeId: 1,
                    childNodes: [2]
                },
                "2":{
                    nodeName: "NodeName2",
                    nodeId: 2,
                    childNodes: []
                }
            }
        )
    });


});