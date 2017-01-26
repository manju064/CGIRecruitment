var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    rootPath: rootPath,
    db:{
        user:"CGI",
        pwd: "CGI",
        url:'mongodb://ds117109.mlab.com:17109/recruitment',
    },
    port: process.env.PORT || 80
  },
  production: {
    rootPath: rootPath,
    //db: 'mongodb://CGI:CGIEvents2017@ds117109.mlab.com:17109/recruitment',
    db: {
        user:"CGI",
        pwd: "CGI",
        url:"mongodb://104.198.145.48/recruitment",
    },
    port: process.env.PORT || 80
  }
}