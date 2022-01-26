"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginationObject = exports.fixedDecimalsWithoutRound = exports.dateFromString = void 0;
const base_error_1 = __importDefault(require("./error/base-error"));
const moment_1 = __importDefault(require("moment"));
const constants_1 = __importDefault(require("./constants"));
// Convert string to date format: DD-MM-YYYY HH:MM:SS
function dateFromString(date, timestamp) {
    let inputTimestamp = timestamp ? timestamp : '00:00:00'; // default time stamp is 12 am. 24H format.
    let dateTime = `${date} ${inputTimestamp}`;
    const convertedDate = (0, moment_1.default)(date, constants_1.default.APPLICATION.DATE_FORMAT);
    if (convertedDate.isValid()) {
        return (0, moment_1.default)(new Date(dateTime), constants_1.default.APPLICATION.DATE_TIME_FORMAT).toISOString();
    }
    else {
        throw (base_error_1.default.createError(base_error_1.default.errorCodes.VALIDATION_ERR.validationError, {
            message: 'Error converting string to date format. Date is invalid.'
        }));
    }
}
exports.dateFromString = dateFromString;
function fixedDecimalsWithoutRound(num, fixed = 3) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return Number(num.toString().match(re)[0]);
}
exports.fixedDecimalsWithoutRound = fixedDecimalsWithoutRound;
function getPaginationObject(count, limit, offset) {
    return {
        [constants_1.default.APPLICATION.PARAMS.TOTAL_COUNT]: count,
        [constants_1.default.APPLICATION.PARAMS.LIMIT]: limit,
        [constants_1.default.APPLICATION.PARAMS.OFFSET]: offset
    };
}
exports.getPaginationObject = getPaginationObject;
//# sourceMappingURL=common.js.map