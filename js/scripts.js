function makeReverseString(x) {
  return x.reverse();
}

function singleDigitCheck(singleDigit) {
  if (singleDigit === 0) {return ""}
  else if (singleDigit === 1) {return "I"}
  else if (singleDigit === 2) {return "II"}
  else if (singleDigit === 3) {return "III"}
  else if (singleDigit === 4) {return "IV"}
  else if (singleDigit === 5) {return "V"}
  else if (singleDigit === 6) {return "VI"}
  else if (singleDigit === 7) {return "VII"}
  else if (singleDigit === 8) {return "VIII"}
  else {return "IX"}
}

function tenDigitCheck(singleDigit) {
  if (singleDigit === 0) {return "X"}
  else if (singleDigit === 1) {return "X"}
  else if (singleDigit === 2) {return "XX"}
  else if (singleDigit === 3) {return "XXX"}
  else if (singleDigit === 4) {return "XL"}
  else if (singleDigit === 5) {return "L"}
  else if (singleDigit === 6) {return "LX"}
  else if (singleDigit === 7) {return "LXX"}
  else if (singleDigit === 8) {return "LXXX"}
  else {return "XC"}
}

function hundredDigitCheck(singleDigit) {
  if (singleDigit === 0) {return ""}
  else if (singleDigit === 1) {return "C"}
  else if (singleDigit === 2) {return "CC"}
  else if (singleDigit === 3) {return "CCC"}
  else if (singleDigit === 4) {return "CD"}
  else if (singleDigit === 5) {return "D"}
  else if (singleDigit === 6) {return "DC"}
  else if (singleDigit === 7) {return "DCC"}
  else if (singleDigit === 8) {return "DCCC"}
  else {return "CM"}
}

function thousandDigitCheck(singleDigit) {
  if (singleDigit === 0) {return ""}
  else if (singleDigit === 1) {return "M"}
  else if (singleDigit === 2) {return "MM"}
  else if (singleDigit === 3) {return "MMM"}
  else if (singleDigit === 4) {return "MS"}
  else if (singleDigit === 5) {return "S"}  //We have invented a fake roman numeral for 5000.
  else if (singleDigit === 6) {return "SM"}
  else if (singleDigit === 7) {return "SMM"}
  else if (singleDigit === 8) {return "SMMM"}
  else {return "SZ"}  //We have invented a fake roman numeral for 10000.
}

$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var originalNumber = $("input#userInput").val();
    console.log(singleDigitCheck(originalNumber));

    var reversedString = makeReverseString(originalNumber.split(""));
    console.log(reversedString);
    });
});
