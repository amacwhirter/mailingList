var path = require("path");

var webpack = require("webpack");

var express = require("express");

var config = require("./webpack.config");

var app = express();

var port = 8080

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath:config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function (req, res) {
    res.sendfile(path.join(__dirname, 'index.html'));
});


app.listen(port, function (err) {
    if(err){
        return console.error(err);
    }
    console.log('App starting at port', port);
});
