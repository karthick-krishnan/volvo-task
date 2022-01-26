"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    "development": {
        "dialect": "sqlite",
        "storage": "../../../../database.sqlite"
    },
    "test": {
        "dialect": "sqlite",
        "storage": ":memory"
    },
    "production": {
        "dialect": "sqlite",
        "storage": "../../../../database.sqlite"
    }
};
exports.default = config;
//# sourceMappingURL=config.js.map