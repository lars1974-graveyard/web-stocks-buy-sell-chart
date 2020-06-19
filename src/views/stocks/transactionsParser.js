import { toCurrency } from "./dataUtils.js";

export const parse = (cvs) => {
    var transactions = []
    var lines = cvs.split("\n");
    lines.sort();
    for (var i = 1; i < lines.length; i++) {
        var w = lines[i].split("\t")
        if(w[0] == "") continue;

        transactions.push({ id: w[0], date: w[1], action: action(w[4]), stock: w[5], type: w[6], isin: w[7], quantity: parseInt(w[8]), price: toCurrency(w[9]), amount: toCurrency(w[12], ","), exchangeRate: toCurrency(w[18],",") });
    }
    return transactions;
}

export const action = (action) => {
    if(action == "SOLGT") return "Sell";
    if(action == "KØBT") return "Buy";
    if(action == "UDB.") return "Dividend";
    if(action == "UDBYTTESKAT") return "Dividend Tax";
    console.log(action)
    return "NA";
}



