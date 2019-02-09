var exec = require('child_process').exec

// ...

var child = exec('npm run core:prod',
  function(err, stdout, stderr) {
    if (err) throw err;
    else console.log(stdout);
});