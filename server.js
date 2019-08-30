const express = require("express");
const exphbs = require ("express-handlebars");
const app = express();

const PORT = process.env.PORT || 3001;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const games = require("./data/objects")


app.get("/", function(req, res) {
    res.render("index", {list:games})
});


app.listen(PORT, function(){
    console.log("server is listening on: http//localhost:" + PORT)
})