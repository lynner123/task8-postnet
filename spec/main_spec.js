"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var getPostNet = require("../lib/main.js");
// var getBarcode = require("../lib/digit-barcode.js");

describe("POST-NET", function(){
    it("Input a postcode which length is 5", function(){
        let input = '95713';
        var result = getPostNet(input);
        var expect_string ='||:|:::|:|:|:::|:::||::||::|:|:|';
        expect(expect_string).to.equal(result);
    });


    it("Input a postcode which length is 9", function(){
        let input = '191042345';
        var result = getPostNet(input);
        var expect_string = '|:::|||:|:::::||||::::|::|::|:|::||::|::|:|:|::::|||';
        expect(expect_string).to.equal(result);
    });

    it("Input a postcode which length is 10", function(){
        let input = '19104-2345';
        var result = getPostNet(input);
        var expect_string = '|:::|||:|:::::||||::::|::|::|:|::||::|::|:|:|::::|||';
        expect(expect_string).to.equal(result);
    });

    it("Input a barcode to 5 ", function(){
        let input = '||:|:::|:|:|:::|:::||::||::|:|:|';
        var result = getPostNet(input);
        var expect_string = '95713';
        expect(expect_string).to.equal(result);
    });

    it("Input a barcode to 10 ", function(){
        let input = '|:::|||:|:::::||||::::|::|::|:|::||::|::|:|:|::::|||';
        var result = getPostNet(input);
        var expect_string = '19104-2345';
        expect(expect_string).to.equal(result);
    });

});