const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const PORT = 3003;
//In memory data
let data = {};


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "DELETE,POST,GET,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Get list
app.get('/node', (req, res) => {
    res.json(data);
});
// Create Node
app.post('/node', (req, res) => {
    let _data = req.body;
    data[_data.nodeId] = _data;
    updateFile();
    res.send(200);
});
// Get node
app.get('/node/:nodeId', (req, res) => {
    res.json(data[req.params.nodeId])
});
// Update Node
app.post('/node/:nodeId', (req, res) => {
    let _data = req.body;
    if (_data.nodeName) {
        data[_data.nodeId].nodeName = _data.nodeName;
    }
    if (_data.childNodes) {
        data[_data.nodeId].childNodes = _data.childNodes;
    }
    if (_data.childId) {
        data[_data.nodeId].childNodes.push(_data.childId)
    }
    updateFile();
    res.send(200);
});
// Delete Node
app.delete('/node/:nodeId', (req, res) => {
    let action = {
        nodeId: Number(req.params.nodeId)
    };
    // Deep clone
    let newState = JSON.parse(JSON.stringify(data));
    // Set current nodeId to delete collection
    let nodesWillRemove = [
        action.nodeId
    ];
    // Get nodes an array from state
    let nodes = Object.keys(newState).map((item) => newState[item]);
    // Find parent node for remove from child
    let parentNode = nodes.find((node) => node.childNodes.indexOf(action.nodeId) > -1);
    // Remove current node from child
    newState[parentNode.nodeId].childNodes = newState[parentNode.nodeId].childNodes
        .filter((i) => i !== action.nodeId);

    // Iterate to find all current node childs
    let iterator = (i) => {
        // If its an array and greater than 0
        // It has child and continue to iterate
        if (Array.isArray(i) && i.length > 0) {
            i.forEach((nodeId) => {
                iterator(newState[nodeId].childNodes)
            })
        }
        // Add all stack items to an array
        nodesWillRemove.push(...i);
    }
    iterator(newState[action.nodeId].childNodes);
    // Remove all childs from state
    nodesWillRemove.forEach(nodeId => delete newState[nodeId]);
    data = newState;
    updateFile();
    res.send(200)
});

const updateFile = () => {
    fs.writeFile("./data.json", JSON.stringify(data), err => {
        if (err) {
            return console.log(err);
        }
        console.log("The file was updated");
    });
};

//Initial read data
fs.readFile('./data.json', 'utf8', (err, _data) => {
    if (err) {
        throw err;
    }
    data = JSON.parse(_data);
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});


