"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.set('port', 4000);
        this.Routes();
    }
    Routes() {
        this.app.get('/', (req, resp) => {
            resp.send("Hola Mundo");
        });
    }
    start() {
        this.app.listen(this.app.get('port')), () => {
            console.log("listen port", this.app.get('port'));
        };
    }
}
exports.Server = Server;
