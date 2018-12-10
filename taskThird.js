var http = require('http');
var fs = require('fs');

var data = fs.readFileSync('index.html', 'utf8');

var app = http.createServer(function(req, res){
	var url = req.url;
	if(url == '/'){
		res.write('Hello, world!');
	}
	else if(url == '/about'){
		console.log(req);
	}
	else if(url == '/stop'){
		app.close();
	}
	else if(url == '/contact'){
		res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
	}
	
	res.end();
	

});

app.listen(3500, function(){
	console.log('Server created');
});