var Gpio = require('onoff').Gpio,  
    led = new Gpio(4, 'out');  

var iv = setInterval(function ()  
{  
    
led.writeSync(led.readSync() === 0 ? 1 : 0)  
}, 10000); 

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to firmware upgrade test app!');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

 
