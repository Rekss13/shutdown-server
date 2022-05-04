var Service = require('node-windows').Service;
const pkg = require('./package.json');

// Create a new service object
var svc = new Service({
  name: pkg.name,
  description: `'ip:8032/shutdown' to shutdown os.`,
  script: 'e:\\Projects\\shutdown-server\\index.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
  , workingDirectory: 'e:\\Projects\\shutdown-server\\'
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();