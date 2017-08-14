"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var getPostNet = require("../lib/main.js");

describe("beer song", function(){
    it("No more bottles of beer on the wall", function(){
        let number = 0;
        var result = getPostNet(number);
        var expect_string =``;
        expect(expect_string).to.equal(result);
    });


    it("1 bottle of beer on the wall", function(){
        let number = 1;
        var result = getPostNet(number);
        var expect_string =
            ``;
        expect(expect_string).to.equal(result);
    });

    it("3 bottles of beer on the wall", function(){
        let number = 3;
        var result = getPostNet(number);
        var expect_string =
            ``;
        expect(expect_string).to.equal(result);
    });

    it("99 bottles of beer on the wall", function(){
        let number = 99;
        var result = getPostNet(number);
        var expect_string = ``;
        expect(expect_string).to.equal(result);
    });

    // it("测试用例2", function(){
    //
    //     main();
    //     var result = _.flatten(console.log.args).join("\n");
    //     var expect_string = '';
    //     expect(expect_string).to.equal(result);
    // });
});