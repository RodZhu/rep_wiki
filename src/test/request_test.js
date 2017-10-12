var request = require('request');
var fs = require('fs');

var ciphers = "ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384";
var cips = 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DH-RSA-AES256-GCM-SHA384:ECDH-RSA-AES256-SHA384:ECDH-ECDSA-AES256-SHA384:ECDH-RSA-AES256-GCM-SHA384:ECDH-ECDSA-AES256-GCM-SHA384:AES256-GCM-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384';
var options = {
   //  url:  'https://15.114.113.61',
    url:'https://15.114.114.16/controller-state.json',
    rejectUnauthorized: false,
    agentOptions: {
        // cert: fs.readFileSync(certFile),
        // key: fs.readFileSync(keyFile),
        // Or use `pfx` property replacing `cert` and `key` when using private key, certificate and CA certs in PFX or PKCS12 format:
        // pfx: fs.readFileSync(pfxFilePath),
        ciphers: cips,
        secureProtocol: 'TLSv1_2_method'
  }
};
request.get(options, function(err, rep) {
 console.log(err);
 console.log('----------------------------------');
 console.log(rep.body);

});
