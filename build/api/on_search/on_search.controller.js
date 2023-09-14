"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_util_1 = require("../../utils/request.util");
function onSearchController(req, res) {
    var onSearchDto = req.body;
    console.log('Search callback triggered in bap');
    (0, request_util_1.sendAcknowledgement)(res, 'ACK');
    return (0, request_util_1.requestForwarder)(onSearchDto);
}
exports.default = onSearchController;
