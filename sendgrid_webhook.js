var localtunnel = require('localtunnel');
localtunnel(5000, {
 subdomain: "lalalalolo"
}, function (err, tunnel) {
 console.log('LT running')
});