module.exports = function toReadable(number) {
    if (!number || number == 0) return "zero";

    let result = "",
        dig = 0;

    const digits = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number >= 1000000) {
        dig = (number / 1000000) | 0;
        result = `${digits[dig]} million`;
        number -= dig * 1000000;
    }

    if (number >= 100000) {
        dig = (number / 100000) | 0;
        result += ` ${digits[dig]} hundred`;
        number -= dig * 100000;
    }

    if (number >= 10000) {
        if (`${number}`.length <= 5) {
            dig = (number / 1000) | 0;
            if (dig > 20) {
                result += ` ${tens[dig.toString().charAt(0)]} ${
                    digits[dig.toString().charAt(1)]
                } thousand`;
                number -= dig * 1000;
            } else {
                result += ` ${digits[dig]} thousand`;
                number -= dig * 1000;
            }
        } else {
            dig = (number / 10000) | 0;
            result += ` ${digits[dig]} thousand`;
            number -= dig * 10000;
        }
    }

    if (number >= 1000) {
        dig = (number / 1000) | 0;
        result += ` ${digits[dig]} thousand`;
        number -= dig * 1000;
    }

    if (number >= 100) {
        dig = (number / 100) | 0;
        result += ` ${digits[dig]} hundred`;
        number -= dig * 100;
    }

    if (number > 19) {
        dig = (number / 10) | 0;
        number -= dig * 10;
        result += ` ${tens[dig]} ${digits[number]}`;
    } else result = `${result} ${digits[number]}`;

    return result.trim();
};
