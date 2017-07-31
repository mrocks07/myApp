var Gpio = require('onoff').Gpio,  
    led = new Gpio(4, 'out');  
var iv = setInterval(function ()  
{  
    led.writeSync(led.readSync() === 0 ? 1 : 0)  
}, 10000);  
