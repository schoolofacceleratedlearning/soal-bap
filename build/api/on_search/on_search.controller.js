"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onSearchController(req, res) {
    var onSearchDto = req.body;
    console.log('Search callback triggered in BAP', onSearchDto);
    try {
        // sendAcknowledgement(res, 'ACK');
        // return requestForwarder(onSearchDto);
        res.status(200).json({
            data: onSearchDto,
        });
    }
    catch (error) {
        console.log('ERROROROROR &^&^&^^& BAP', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
exports.default = onSearchController;
