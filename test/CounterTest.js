import CounterControl from "./views/CounterControl.js"
mocha.setup('bdd');
const assert = chai.assert;



describe('#Testing count with reset', function () { 
    it('2 counts and reset', function () { 
        var cc = new CounterControl();
        cc.connectedCallback();
        cc.onCount();
        console.dir(cc.state);
        assert.equal(cc.state.settings["count"], 1);
        cc.onCount();
        assert.equal(cc.state.settings["count"], 2);
        cc.onReset();
        assert.equal(cc.state.settings["count"], 0);
    })



   
})
    




mocha.run();