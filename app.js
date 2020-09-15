const express = require('express');
const app = express();


app.use((req, res, next) => {
    var date = new Date();
    var UTC = date.toUTCString();
res.status(200).json({
    message: UTC
})

});

module.exports = app;