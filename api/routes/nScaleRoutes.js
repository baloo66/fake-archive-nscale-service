'use strict';
module.exports = function(app) {
  var service = require('../controllers/nScaleController');

  // nscale Routes
  app.route('/writebinary').post(service.write_binary);


  app.route('/retrievebinary/:dokid').get(service.read_binary);
};

