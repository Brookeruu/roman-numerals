function makeReverseString(x) {
  return x.reverse();
}

function singleDigitCheck(singleDigit) {
  if (singleDigit === "0") {return ""}
  else if (singleDigit === "1") {return "I"}
  else if (singleDigit === "2") {return "II"}
  else if (singleDigit === "3") {return "III"}
  else if (singleDigit === "4") {return "IV"}
  else if (singleDigit === "5") {return "V"}
  else if (singleDigit === "6") {return "VI"}
  else if (singleDigit === "7") {return "VII"}
  else if (singleDigit === "8") {return "VIII"}
  else if (singleDigit === "9") {return "IX"}
  else {return ""}
}

function tenDigitCheck(singleDigit) {
  if (singleDigit === "0") {return ""}
  else if (singleDigit === "1") {return "X"}
  else if (singleDigit === "2") {return "XX"}
  else if (singleDigit === "3") {return "XXX"}
  else if (singleDigit === "4") {return "XL"}
  else if (singleDigit === "5") {return "L"}
  else if (singleDigit === "6") {return "LX"}
  else if (singleDigit === "7") {return "LXX"}
  else if (singleDigit === "8") {return "LXXX"}
  else if (singleDigit === "9") {return "XC"}
  else {return ""}
}

function hundredDigitCheck(singleDigit) {
  if (singleDigit === "0") {return ""}
  else if (singleDigit === "1") {return "C"}
  else if (singleDigit === "2") {return "CC"}
  else if (singleDigit === "3") {return "CCC"}
  else if (singleDigit === "4") {return "CD"}
  else if (singleDigit === "5") {return "D"}
  else if (singleDigit === "6") {return "DC"}
  else if (singleDigit === "7") {return "DCC"}
  else if (singleDigit === "8") {return "DCCC"}
  else if (singleDigit === "9") {return "CM"}
  else {return ""}
}

function thousandDigitCheck(singleDigit) {
  if (singleDigit === "0") {return ""}
  else if (singleDigit === "1") {return "M"}
  else if (singleDigit === "2") {return "MM"}
  else if (singleDigit === "3") {return "MMM"}
  else if (singleDigit === "4") {return "MS"}
  else if (singleDigit === "5") {return "S"}  //We have invented a fake roman numeral for 5000.
  else if (singleDigit === "6") {return "SM"}
  else if (singleDigit === "7") {return "SMM"}
  else if (singleDigit === "8") {return "SMMM"}
  else if (singleDigit === "9") {return "SZ"}
  else {return ""}  //We have invented a fake roman numeral for 10000.
}

function convertToRomanNumeral(userArabicNumber) {
  var reversedString = makeReverseString(userArabicNumber.split(""));
  // console.log(reversedString);
  var newSingleRomanString = singleDigitCheck(reversedString[0]);
  // console.log(newSingleRomanString);
  var newTenRomanString = tenDigitCheck(reversedString[1]);
  // console.log(newTenRomanString);
  var newHundredRomanString = hundredDigitCheck(reversedString[2]);
  // console.log(newHundredRomanString);
  var newThousandRomanString = thousandDigitCheck(reversedString[3]);
  // console.log(newThousandRomanString);
  var finalRomanString = (newThousandRomanString + newHundredRomanString + newTenRomanString + newSingleRomanString);
  // console.log(finalRomanString);
  return finalRomanString;
}

function checkNumberRange(userArabicNumber) {
  if (userArabicNumber > 0 && userArabicNumber < 4000) {
  return 1;
  }
  else {return 0;
  }
}

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var originalNumber = $("input#userInput").val();
    //console.log(singleDigitCheck(originalNumber));
    //console.log(checkNumberRange(originalNumber));
    if (checkNumberRange(originalNumber) === 1) {
      var finalAnswer = convertToRomanNumeral(originalNumber);
      $("span.userOutput").text(finalAnswer);
    } else {
      $("span.userOutput").text("Invaild Number");
    }
    });
});
