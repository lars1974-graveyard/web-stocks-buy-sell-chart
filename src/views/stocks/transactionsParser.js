export const parse = (cvs) => {
    var transactions = []
    var lines = cvs.split("\n");
    for (var i = 1; i < lines.length; i++) {
        var w = lines[i].split("\t")
        if(w[0] == "") continue;
        transactions.push({ id: w[0], day: w[1], action: w[4], stock: w[5], type: w[6], isin: w[7], quatity: w[8], price: w[9], amount: trimAmount(w[12]) });
    }
    return transactions;
}

export const trimAmount = (currency) => {
    if(currency == "0" || currency == 0 || currency == undefined || currency==null) return 0;
    var c = currency.trim().replace(".", "").replace(',', '.');
    if (c.indexOf('.')==-1) return parseInt(c + "00", 10);

    else {
        var s = c.split('.')
        if (s[1].length > 2) return parseInt((s[0] + s[1].substring(0, 2)),10);
        if (s[1].length == 1) return parseInt((s[0] + s[1] + "0"),10);
        return parseInt(s[0] + s[1], 10);
    }

}

