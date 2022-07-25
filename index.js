/*jshint esversion: 6 */

//requireing all modules that are required
const express = require("express");
const bodyParser = require("body-parser");


//declaring express app and port
const app = express()
app.set('view engine', 'ejs');
const port = 3000



//using body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// sample database data 
var db = [{"username":"abc","id":"0x0",items:[0,1,4,5,6,2,8,9,1,2,9,9,2,5,3,6,7,3]},{"username":"user2","id":"0x1",items:[1,4,2,7,3,1,0,6,1,1,1,0,2,2,3,6,7,3]},{"username":"user3","id":"0x2",items:[1,4,2,7]}]


app.get("/:id",  (req,res) => {
    var index = req.params.id.slice(req.params.id.length - 1)
    parseInt(index)
    // res.send( db[index].items);

    res.render("index", {
        user : db[index].username,
        items: db[index].items,
    });
})



app.post("/:id",  (req,res) => {
    var nName = req.body.newName

    var index = req.params.id.slice(req.params.id.length - 1)
    parseInt(index)


    db[index].username = nName;
    console.log(db[index].username);
    res.render("index", {
        user : db[index].username,
        items: db[index].items,
    });
})


// this is just to test.. delete later...
app.get("/" , (req,res) => {
    res.sendFile(__dirname + "/test.html")
})


// what port is the server listening to
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});