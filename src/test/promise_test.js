var co = require('co');

co(function *() {
var promise_1 = new Promise(function(resolve, reject){
 console.log('--------1-------');
 resolve(123);
});
var promise_22 = new Promise(function(resolve, reject){
 console.log('--------222------');
 resolve(1234);
});

yield Promise.all([promise_1, promise_22]);

});
