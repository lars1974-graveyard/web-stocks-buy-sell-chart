import { store } from './state.js'

let url = 'http://localhost:8081/currency/resources/rates';

const fetchValuta = () => {
    fetch(url)
        .then(res => res.json())
        .then((out) => {
            console.log('Checkout this JSON! ', out);
            store.dispatch({ type: 'ON_RATES_UPDATES', rates: out });
            
        })
        .catch(err => { throw err });
}

export { fetchValuta }