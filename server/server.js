var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        name: 'amin',
        age: 36,
        location: 'Montreal'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Amin',
            age: 36,
            location: 'Montreal'
        },
        {
            name: 'Nemesis',
            age: 35,
            location: 'Singapore'
        },
        {
            name: 'Khan',
            age: 350,
            location: 'Distant Quadren'
        },
    ])
});

app.listen(3000, () =>{console.log('Server is ready and listening to port 3000')});
module.exports = {
    app
}