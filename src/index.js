module.exports = function toReadable (number) {
    string = number.toString();
    let arr = [];
    arr = string.split('');

    const one = "one",
        two = "two",
        three = "three",
        four = "four",
        five = "five",
        six = "six",
        seven = "seven",
        eight = "eight",
        nine = "nine",
        ten = "ten";

    const eleven = "eleven",
        twelve = "twelve",
        thirteen = "thirteen",
        fourteen = "fourteen",
        fifteen = "fifteen",
        sixteen = "sixteen",
        seventeen = "seventeen",
        eighteen = "eighteen",
        nineteen = "nineteen";

    const twenty = "twenty",
        thirty = "thirty",
        forty = "forty",
        fifty = "fifty",
        sixty = "sixty",
        seventy = "seventy",
        eighty = "eighty",
        ninety = "ninety";

    const hundred = "hundred";

    let oneTwentyValue = oneTwenty(string);
    if(number > 0 && number < 20 || number == 20 || number == 30 || number == 40 || number == 50 || number == 60 || number == 70 || number == 80
        || number == 90) {
        return oneTwentyValue;
    }

    function oneTwenty(string) {
        switch (string) {
            case '1': return one;
            case '2': return two;
            case '3': return three;
            case '4': return four;
            case '5': return five;
            case '6': return six;
            case '7': return seven;
            case '8': return eight;
            case '9': return nine;
            case '10': return ten;
            case '11': return eleven;
            case '12': return twelve;
            case '13': return thirteen;
            case '14': return fourteen;
            case '15': return fifteen;
            case '16': return sixteen;
            case '17': return seventeen;
            case '18': return eighteen;
            case '19': return nineteen;
            case '20': return twenty;
            case '30': return thirty;
            case '40': return forty;
            case '50': return fifty;
            case '60': return sixty;
            case '70': return seventy;
            case '80': return eighty;
            case '90': return ninety;
        }
    }
  
        switch(string) {
            case '100': return one + " " + hundred;
            case '200': return two + " " + hundred;
            case '300': return three + " " + hundred;
            case '400': return four + " " + hundred;
            case '500': return five + " " + hundred;
            case '600': return six + " " + hundred;
            case '700': return seven + " " + hundred;
            case '800': return eight + " " + hundred;
            case '900': return nine + " " + hundred;
        }
 
    function oneNine(value) {
        switch (value) {
            case '1': return one;
            case '2': return two;
            case '3': return three;
            case '4': return four;
            case '5': return five;
            case '6': return six;
            case '7': return seven;
            case '8': return eight;
            case '9': return nine;
        }
    }
    let twentyNinetyValue = twentyNinety(number);

    function twentyNinety(value, array = arr[1]) {
        if (number < 30) {
            return twenty + " " + oneNine(array);
        } else if (number < 40) {
            return thirty + " " + oneNine(array);;
        } else if (number < 50) {
            return forty + " " + oneNine(array);;
        } else if (number < 60) {
            return fifty + " " + oneNine(array);;
        } else if (number < 70) {
            return sixty + " " + oneNine(array);;
        } else if (number < 80) {
            return seventy + " " + oneNine(array);;
        } else if (number < 90) {
            return eighty + " " + oneNine(array);;
        } else if (number < 100) {
            return ninety + " " + oneNine(array);;
        }
    }

    if (number > 20 && number < 100) {
        return twentyNinetyValue;
    }


    function difficulteFunction(value1) {
        if (arr[1] == 0 || arr[1] == 1 || (arr[1] == 2 && arr[2] == 0) || (arr[1] == 3 && arr[2] == 0) || (arr[1] == 4 && arr[2] == 0) || (arr[1] == 5 && arr[2] == 0)
         || (arr[1] == 6 && arr[2] == 0) || (arr[1] == 7 && arr[2] == 0) || (arr[1] == 8 && arr[2] == 0)
            || arr[1] == 90) {
            let string = arr.join('');
            string = string.slice(1);
            if (arr[1] == 0) {
                string = string.slice(1);
            }
            return value1 + " " + hundred + " " + oneTwenty(string);
        }
        let string = arr.join('');
        string = string.slice(1);
        number = +string;
        console.log(number);
        return value1 + " " + hundred + " " + twentyNinety(number, arr[2]);
    }


    if (number > 100 && number < 200) {
        return difficulteFunction("one");

    } else if (number < 300) {
        return difficulteFunction("two");

    } else if (number < 400) {
        return difficulteFunction("three");

    } else if (number < 500) {
        return difficulteFunction("four");

    } else if (number < 600) {
        return difficulteFunction("five");

    } else if (number < 700) {
        return difficulteFunction("six");

    } else if (number < 800) {
        return difficulteFunction("seven");

    } else if (number < 900) {
        return difficulteFunction("eight");

    } else if (number < 1000) {
        return difficulteFunction("nine");

    }
}
