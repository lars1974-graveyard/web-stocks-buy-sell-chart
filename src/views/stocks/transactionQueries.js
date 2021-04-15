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
    stockList.sort((a, b) => (a.stock > b.stock) ? 1 : -1)
    return stockList;
}

export const stockTransactions = (isin) => {
    var transactions = store.getState().stocks.transactions
    transactions = transactions.filter(function(trans){
        return trans.isin == isin;
    });
  

    var summedQuantity = 0;
    var summedSpendings = 0;
    for(var i = 0; i< transactions.length; i++){
        if(transactions[i].action == "Buy") summedQuantity = summedQuantity + transactions[i].quantity;
        if(transactions[i].action == "Sell") summedQuantity = summedQuantity - transactions[i].quantity;
        transactions[i].summedQuantity = summedQuantity;
        summedSpendings = summedSpendings+transactions[i].amount
        transactions[i].saldo = summedSpendings;
    }

    var totalAmount = sumByProperty(transactions, "amount")
    var transactionHistory = { transactions: transactions, totalAmount: totalAmount }
   return transactionHistory;
}

export const formatTransactions = (transactions) =>{
    var t2 = JSON.parse(JSON.stringify(transactions));
    for(var i = 0; i< t2.length; i++){
       t2[i].amount = t2[i].amount.toFixed(2);
       t2[i].saldo = t2[i].saldo.toFixed(2);
       t2[i].price = t2[i].price.toFixed(2);
    }
    return t2;
}

export const collapseTransactionsOnSameDay = (transactions) =>{
    var t2 = JSON.parse(JSON.stringify(transactions));
   
    return t2
}

export const sumByProperty =  (items, prop) => {
    return items.reduce( function(a, b){
        return a + b[prop];
    }, 0);
}




