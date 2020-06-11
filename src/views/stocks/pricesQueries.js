import { store } from '../../state.js'


const fetchStockHistory = (isin) => {
    let url = "http://tools.morningstar.dk/api/rest.svc/timeseries_price/nen6ere626?id="+isin+"&idtype=ISIN&outputType=COMPACTJSON"
    console.log(url)
    fetch(url,{ method: 'GET', mode: 'no-cors', headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }}).then(res => {
            console.log(res.status)
            console.dir(res)
            res.json()
        })
        .then((out) => {
            console.log('Checkout this JSON! ', out);
            var stockPrices = { isin: isin, prices: out};
           
            store.dispatch({ type: 'STOCK_PRICES_UPDATED', prices: stockPrices });
            
        })
        .catch(err => { throw err });
}

export { fetchStockHistory }

