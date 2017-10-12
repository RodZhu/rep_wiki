var tls = require('tls');
var net = require('net');

const DC_2_IP = '15.114.115.248';
const DC_2_PORT = 636;

// let socket = new net.Socket();
let connection = tls.connection({host: DC_2_IP, port: DC_2_PORT}, function(){
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume()
});
