'use strict';

module.exports = function (app) {

    const controller = require('./controller');

    app.route('/shutdown')
        .get(controller.shutdown);
    app.route('/reboot')
        .get(controller.reboot);
};
