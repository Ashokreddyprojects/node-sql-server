var express = require('express');
var sql = require('mssql');
var app = express();

app.get('/', function (req, res) {
   
   

    // config for your database
var sqlConfig = {

user: 'sa',

password: 'mike',

server: '192.168.0.5', 

database: 'Test',



options: {

    encrypt: false // Use this if you're on Windows Azure 

}

  }

 sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query('select * from employees', function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });


});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});