"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImage = void 0;
const getImage = (req, resp) => {
    let path = __dirname.replace("\\controller", "");
    resp.sendFile(`${path}/public/images/${req.params.Id}`);
};
exports.getImage = getImage;
