var request = require('request');
var fs = require('fs');

var ciphers = "ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384";
var cips = 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DH-RSA-AES256-GCM-SHA384:ECDH-RSA-AES256-SHA384:ECDH-ECDSA-AES256-SHA384:ECDH-RSA-AES256-GCM-SHA384:ECDH-ECDSA-AES256-GCM-SHA384:AES256-GCM-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384';
var cipss = 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA256';
var options = {
    url:'https://15.114.113.50/',
    rejectUnauthorized: false,
    /*
    agentOptions: {
        ciphers: cipss
    }, */ 
     // ciphers:'ECDHE-ECDSA-AES256-GCM-SHA384',
     ciphers: 'ECDHE-RSA-AES256-SHA384',
     secureProtocol: 'TLSv1_2_method'
};
request.get(options, function(err, rep) {
 console.log(err);
 console.log('----------------------------------');
 console.log(rep.statusCode);

});
