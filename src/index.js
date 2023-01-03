const numbers = {
	0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand"
}

module.exports = function toReadable(number) {
	let convertToWords = number.toString();
	let output = '';
	
    if (number === 0) {
        return "zero";
    }
	
    else if (number < 20) {
		output = numbers[number];
        return output;
    }
	
	else if (convertToWords.length === 2) {
		output = twoDigitNumber(convertToWords.split("")).trim();
		return output;
	}
	
	else if (convertToWords.length === 3) {
		output =  threeDigitNumber(convertToWords.split("")).trim();
		return output;
	}

    else if (convertToWords.length === 4) {
		output = fourDigitNumber(convertToWords.split("")).trim();
		return output;
	}
	
	else {
		 return number;
	}
}

function twoDigitNumber(convertToWords) {
    let value = numbers[(convertToWords.join(""))];

    if (value != undefined) {
        return value;
    }

    return tens((convertToWords[0])) + units((convertToWords[1]));
}

function threeDigitNumber(numberString) {
    return hundreds((numberString[0])) + twoDigitNumber(numberString.slice(1));
}

function fourDigitNumber(numberString) {
    return thousands((numberString[0])) + threeDigitNumber(numberString.slice(1));
}

function units(number) {
    if (number == 0) {
        return "";
    }
    return numbers[number];
}

function tens(number) {
    if (number == 0) {
        return "";
    }
    return numbers[number * 10] + " ";
}

function hundreds(number) {
    if (number == 0) {
        return ""
    }
    return units(number) + " " + "hundred ";
}

function thousands(number) {
    return units(number) + " " + "thousand ";
}
