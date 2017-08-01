var Gpio = require('onoff').Gpio,  
    led = new Gpio(4, 'out');  

var iv = setInterval(function ()  
{  
    
led.writeSync(led.readSync() === 0 ? 1 : 0)  
}, 1000); 

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to firmware upgrade test app!');
}).listen(8081);


 
