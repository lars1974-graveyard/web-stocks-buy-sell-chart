import { parse } from "./views/stocks/transactionsParser.js"
mocha.setup('bdd');
const assert = chai.assert;



describe('#transactionParser sample output', function () { 
    it("out: " + JSON.stringify(
        parse(
            "642569509	2020-03-06	2020-03-06	2020-03-10	KØBT	GOMX	Aktier	SE0008348304	600	8,18	0	41,73	-3.513	DKK	16.505	0	1.000	-90.681,69	0,707			652908883	652908883\n"+
            "687121489	2020-06-09	2020-06-09	2020-06-11	SOLGT	MATAS	Aktier	DK0060497295	100	59,9	0	29	5.961	DKK	22.700,03	-1.605,68	300	-17.065,18	1			670519599	670519599\n"+
            "686325075	2020-06-08	2020-06-08	2020-06-10	KØBT	PENNEO	Aktier	DK0061283009	250	40	0	29	-10.029	DKK	10.029	0	250	-23.026,18	1			670173345	670173345\n"
        ), null, " "), () => { });   
})
    




mocha.run();