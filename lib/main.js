
var getBarcode = require("./digit-barcode.js");

function convertToArray(str) {
    let array = [];
    for(let i=0; i < str.length; i++) {
        array.push(str.charAt(i));
    }
    return array;
}

function calculateCheck(array) {
    let summary = array.reduce(function (sum,value) {
        return sum + Number(value);
    },0);
    return summary % 10 === 0 ? 0 : 10 - summary % 10;
}
function convertCodeArray(input) {
    let splitInput = input.replace("-","");
    let array = convertToArray(splitInput);
    array.push(calculateCheck(array).toString());
    return array;
}
function findBarcode(item) {
    let barcode = getBarcode();
    for (let obj of barcode) {
        if(item === obj.digit){
            return obj.barcode;
        }
    }
    return '';
}
function makeBarcode(array) {
    let str = '|';
    for (let item of array) {
        str += findBarcode(item);
    }
    return str + '|';
}
function findDigit(item) {
    let barcode = getBarcode();
    for (let obj of barcode) {
        if(item === obj.barcode){
            return obj.digit;
        }
    }
    return '';
}
function makePostNet(array) {
    let postnet = [];
    array.pop();
    for (let item of array) {
        postnet.push(findDigit(item));
    }
    return postnet;
}
function convertToArr(input) {
    let array = [];
    let str = '';
    for(let i = 1; i < input.length-1; i++){
        str += input.charAt(i);
        if(i % 5 === 0){
            array.push(str);
            str = '';
        }
    }
    return array;
}
function getCodeNumber(input) {
    let array = convertToArr(input);
    let result = makePostNet(array);
    if (result.length === 9) result.splice(5, 0, "-");
    // return result.toString()
    return result.join("");
}
function getPostNet(input){
    if(input.charAt(0) === '|'){
        return getCodeNumber(input);
    }else{
        let array = convertCodeArray(input);
        return makeBarcode(array);
    }
}

module.exports = getPostNet;


