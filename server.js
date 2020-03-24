var express = require("express");
var app = express();
const Joi = require('joi'); //used for validation
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Listening on port ${port}..`));
const users = [
    {  id: 1,name: 'rahul jadhav',},
    { id: 2,name: 'Ravi pawar'},
    { id: 3,name: 'salim pawar'},
    {  id: 4,name: 'sachin jadhav'},
    { id: 5,name: 'ram awati' },
    { id: 6,name: 'narend katere' },
    {  id: 4,name: 'promod kalam'},
    { id: 5,name: 'smant rea' },
    { id: 6,name: 'pate rahul' }
]

app.get('/api/usersData', (req, res) => {
    res.send(users);
});

module.exports = app