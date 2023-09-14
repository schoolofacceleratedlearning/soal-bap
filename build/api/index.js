"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var on_search_controller_1 = __importDefault(require("./on_search/on_search.controller"));
var router = express_1.default.Router();
router.get('/', function (_req, res) {
    res.send('Welcome to SOAL BAP!');
});
router.post('/on_search', on_search_controller_1.default);
exports.default = router;
