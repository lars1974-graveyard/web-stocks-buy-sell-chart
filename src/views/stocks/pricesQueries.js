import { store } from '../../state.js'


const fetchStockHistory = (isin) => {
    let url = "http://localhost:8888/stocks/history/"+isin
    console.log(url)
    fetch(url).then(res => { return res.json()}).then(out => {
            //console.log('Checkout this JSON! ', out);
            var stockPrices = { isin: isin, prices: out};
            store.dispatch({ type: 'STOCK_PRICES_UPDATED', result: { isin: isin, prices: stockPrices }});
        })
        .catch(err => { throw err });
}

export { fetchStockHistory }

