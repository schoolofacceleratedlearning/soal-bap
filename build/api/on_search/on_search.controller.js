"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_util_1 = require("../../utils/request.util");
function onSearchController(req, res) {
    var onSearchDto = req.body;
    console.log('Search callback triggered in BAP', onSearchDto);
    try {
        // sendAcknowledgement(res, 'ACK');
        return (0, request_util_1.requestForwarder)(onSearchDto);
    }
    catch (error) {
        console.log('ERROROROROR &^&^&^^& BAP', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
exports.default = onSearchController;
