class NodeId {
    constructor() {
        this.id = 0;
    }
    next() {
        return ++this.id;
    }
    set(id) {
        this.id = id;
    }
}

export let nodeId =  new NodeId();