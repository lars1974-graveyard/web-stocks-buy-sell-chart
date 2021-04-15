import { getDates, toCurrency } from './dataUtils.js'

export const drawchart = (chartElement, name, prices, transactions) => {
  var data = new google.visualization.DataTable()
  var options = {
    interpolateNulls: true,
    title: 'Your history for ' + name,
    vAxes: { 0: { logScale: false }, 1: { logScale: false } },
    series: {
      0: { targetAxisIndex: 1, lineWidth: 2, pointSize: 10, color: "#000000", type: 'line'},
      1: { targetAxisIndex: 0, pointSize: 0, lineWidth: 1, type: 'line', color: "#777777" },
      2: { targetAxisIndex: 0, pointSize: 0, lineWidth: 1, type: 'bars', color: "1111EE" },
      3: { targetAxisIndex: 0, pointSize: 0, lineWidth: 1, type: 'bars', color: "EE1111" },
      4: { targetAxisIndex: 0, pointSize: 0, lineWidth: 1, type: 'bars', color: "11DD11" }
    },
    explorer: {
      actions: ['dragToZoom', 'rightClickToReset'],
      axis: 'horizontal',
      keepInBounds: true,
      maxZoomIn: 20
    }
  };

  data.addColumn('date', 'Employee Name');
  data.addColumn('number', 'Price');
  data.addColumn({type:'string', role:'style'});
  data.addColumn({id: 'title', label: 'Title', type: 'string', role: 'tooltip'});
  data.addColumn('number', 'win/loss');
  data.addColumn('number', 'Sell');
  data.addColumn('number', 'Buy');
  data.addColumn('number', 'Udbytte');

  data.addRows(createData(prices, transactions));
  new google.visualization.ComboChart(chartElement).draw(data, options);
}




export const createData = (prices, transactions) => {
  
  var sellPoint = "point { size: 5; shape-type: circle; fill-color: #1111EE; }";
  var buyPoint = "point { size: 5; shape-type: circle; fill-color: #EE1111; }";
  var udbyttePoint = "point { size: 7; shape-type: star; fill-color: #11DD11; }";
  var nonPoint = "point { size: 0; shape-type: star; fill-color: #a52714; }";
  var dates = getDates();
  var array = []

  var summedQuantity = 0;
  var saldo = 0;
  var value;

  for (var i = 0; i < dates.length; i++) {
    var priceOndate = getPriceOnDate(dates[i], prices);
    var amount = 0;
    var action = "";
    var transaction = getTransactionDataOnDate(dates[i], transactions);
    var date = new Date(dates[i]);
    
    if(transaction) {
      amount = transaction.amount;
      action = transaction.action;
      summedQuantity = transaction.summedQuantity;
      saldo = transaction.saldo;
    }
    if(priceOndate) {
      value = summedQuantity*priceOndate+saldo;
    }
    if (action=="Sell") array.push([date, priceOndate, sellPoint, "Sell: "+ amount, value, amount, null, null])
    else if (action == "Buy") array.push([date, priceOndate, buyPoint, "Buy: " + amount,  value, null, amount, null])
    else if (action == "Dividend") array.push([date, priceOndate, udbyttePoint, "Div: " + amount,  value, null, null, amount])
    else array.push([date, priceOndate, nonPoint, null, value, null, null, null])
  }

  console.dir(array)
  return array;
}

export const getTransactionDataOnDate = (date, transactions) =>{
  var t = transactions.filter(obj => { return obj.date == date; })
  if(t.length>0) return t[0];
  return undefined;
}

export const getPriceOnDate = (date, prices) => {
var pricesQ = prices.filter(obj => { return obj.date == date; })
var price = undefined
if (pricesQ.length > 0) {
  price = toCurrency(pricesQ[0].price, ".")
}
return price;
}


