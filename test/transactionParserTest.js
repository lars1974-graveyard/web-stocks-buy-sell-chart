import { trimAmount } from "./views/stocks/transactionsParser.js"
mocha.setup('bdd');
const assert = chai.assert;



describe('#AmountParser', function () { 
    it('TrimAmount', function () { 
        assert.equal(1000, trimAmount("10,0"));
        assert.equal(100000, trimAmount("1.000,0"));
        assert.equal(1000, trimAmount("10"));
        assert.equal(0, trimAmount(undefined));
        assert.equal(1050, trimAmount("10,5"));
        assert.equal(0, trimAmount(""));
        assert.equal(5560, trimAmount("55,608"));
        assert.equal(0, trimAmount("0"));
        assert.equal(20, trimAmount("0,2"));
    })



   
})
    




mocha.run();