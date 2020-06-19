import { parse } from "./transactionsParser";

export const toCurrency = (currency, separator) => {
    var thousan = ""
    if(separator == ",") thousan = ".";
    if(separator == ".") thousan = ",";

    if(currency == "0" || currency == 0 || currency == undefined || currency==null) return 0;

    var c = currency.trim().replace(thousan, "").replace(",",".");
    
    return roundOf(parseFloat(c), 2);
}

export const roundOf = (n, p) => {
    const n1 = n * Math.pow(10, p + 1);
    const n2 = Math.floor(n1 / 10);
    if (n1 >= (n2 * 10 + 5)) {
        return (n2 + 1) / Math.pow(10, p);
    }
    return (n2 / Math.pow(10, p));
}

export const getDates = () => {
    for (var arr = [], dt = new Date(new Date("2014-01-01")); dt <= new Date(); dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt));
    }

    return arr.map((v) => v.toISOString().slice(0, 10))
}