'use strict';

const shutDownWin = require('./shutDownWin');

module.exports.shutdown = function (req, res) {
    res.send(true);
    shutDownWin.shutdown(10, true);
};

module.exports.reboot = function (req, res) {
    res.send(true);
    shutDownWin.reboot(10, true);
};