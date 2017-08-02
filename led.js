var Gpio = require('onoff').Gpio,  
    led = new Gpio(4, 'out');  

var iv = setInterval(function ()  
{  
    
led.writeSync(led.readSync() === 0 ? 1 : 0)  
}, 1000); 

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to firmware upgrade Appllication2! ');
    
}).listen(5051);
console.log('Server running at http://192.168.0.52:5051/');

 
