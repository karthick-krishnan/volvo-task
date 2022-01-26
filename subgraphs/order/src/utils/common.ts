import moment from 'moment';
import Constants from "./constants";

// Convert string to date format: DD-MM-YYYY HH:MM:SS
// Convert string to date format: DD-MM-YYY
export function dateFromString(date: string): string {
    return moment(date, Constants.APPLICATION.DATE_FORMAT).format('YYYY-MM-DD HH:mm:ss');
    // if (convertedDate.isValid()) {
    //     return convertedDate.toDate();
        
    // } else {
    //     throw new Error("invalid date");
    // }
    // return convertedDate;
}
export function fixedDecimalsWithoutRound(num: number, fixed = 3) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return Number(num.toString().match(re)![0]);
}