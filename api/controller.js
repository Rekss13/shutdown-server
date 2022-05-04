'use strict';

const shutDownWin = require('./shutDownWin');

module.exports.shutdown = function (req, res) {
    res.send(true);
    shutDownWin.shutdown(20, true);
};