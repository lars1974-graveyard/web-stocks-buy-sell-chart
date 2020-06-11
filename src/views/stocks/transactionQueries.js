import { store } from '../../state.js';



export const listStocksNames = () => {
    var transactions = store.getState().stocks.transactions
    var stockList = [];

    for (var i = 0; i < transactions.length; i++) {
        stockList.push({ isin: transactions[i].isin, stock: transactions[i].stock })
    }

    //Remove dublicates
    stockList = stockList.filter((stockList, index, self) =>
        index === self.findIndex((t) => (
            t.isin === stockList.isin && t.stock === stockList.stock
        ))
    )

    return stockList;
}

export const stockTransactions = (isin) => {
    var transactions = store.getState().stocks.transactions
    var filtered = transactions.filter(function(trans){
        return trans.isin == isin;
    });

    var totalAmount = sumByProperty(filtered, "amount")
    var transactionHistory = { transactions: filtered, totalAmount: totalAmount }
   return transactionHistory;
}

export const sumByProperty =  (items, prop) => {
    return items.reduce( function(a, b){
        return a + b[prop];
    }, 0);
}

