import { toCurrency } from "./views/stocks/dataUtils.js"
mocha.setup('bdd');
const assert = chai.assert;



describe('#AmountParser', function () { 
    it('TrimAmount', function () { 
        assert.equal(10.00, toCurrency("10,0",","));
        assert.equal(1000.00, toCurrency("1.000,0",","));
        assert.equal(10.00, toCurrency("10",","));
        assert.equal(0.00, toCurrency(undefined,","));
        assert.equal(10.50, toCurrency("10,5",","));
        assert.equal(0.00, toCurrency("",","));
        assert.equal(55.61, toCurrency("55,608",","));
        assert.equal(0.00, toCurrency("0",","));
        assert.equal(0.20, toCurrency("0,2",","));

        assert.equal(10.00, toCurrency("10.0","."));
        assert.equal(1000.00, toCurrency("1,000.0","."));
        assert.equal(10.00, toCurrency("10","."));
    })



   
})
    




mocha.run();