import Frontpage from './views/frontpage/Frontpage';
import CurrencyExchange from './views/currencyExchange/CurrencyExchange';
import Vaadin from './views/vaadin/Vaadin';
import './views/stocks/StocksView';
import polyelements from './views/polyelements/Polyelements';

import { Router } from '@vaadin/router';



const outlet = document.querySelector('.article');
const router = new Router(outlet);


router.setRoutes([
  { path: '/index.html', component: 'front-page' },
  { path: '/', component: 'front-page'},
  { path: '/currency-exchange', component: 'currency-exchange' },
  { path: '/vaadin', component: 'vaadin-page' },
  { path: '/stocks', component: 'stocks-view' },
  { path: '/polyelements', component: 'polyelements-page' },
]);