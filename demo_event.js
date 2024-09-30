var fs = require('fs');
var rs = fs.createReadStream('./login_page.html');
rs.on('open', function () {
  console.log('The file is open');
});