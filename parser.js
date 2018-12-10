var http = require('http');
var request = require('request');
var fs = require('fs');

var link = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';



http.createServer(function(req, res){
	request(link, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var jsonArr = JSON.parse(body);
			for(var i = 0; i < jsonArr.length; i++){
				console.log(jsonArr[i].ccy);
				console.log(jsonArr[i].base_ccy);
				console.log(jsonArr[i].buy);
				console.log(jsonArr[i].sale);

				/* не работает. непонятно почему */
				// res.write(jsonArr[i].ccy);
				// res.write(jsonArr[i].base_ccy);
				// res.write(jsonArr[i].buy);
				// res.write(jsonArr[i].sale);
			}
		}
	});
		
	res.end();
	

}).listen(3000, function(){
	console.log('Server created');
});