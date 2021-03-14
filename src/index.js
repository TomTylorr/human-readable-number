module.exports = function toReadable(number) {
    let readableNumber,
        twenty = 'twenty',
        thirty = 'thirty',
        forty = 'forty',
        fifty = 'fifty',
        sixty = 'sixty',
        seventy = 'seventy',
        eighty = 'eighty',
        ninety = 'ninety',
        hundred = 'hundred',
        num2,
        newArr = [],
        newArr2 = [],
        arr = [];

    number = number.toString();
    arr = number.split("");

    function define0(arr, callback) {

        callback(arr);

        switch (arr[0]) {
            case '2':
                readableNumber = twenty + " " + num2;
                break;
            case '3':
                readableNumber = thirty + " " + num2;
                break;
            case '4':
                readableNumber = forty + " " + num2;
                break;
            case '5':
                readableNumber = fifty + " " + num2;
                break;
            case '6':
                readableNumber = sixty + " " + num2;
                break;
            case '7':
                readableNumber = seventy + " " + num2;
                break;
            case '8':
                readableNumber = eighty + " " + num2;
                break;
            case '9':
                readableNumber = ninety + " " + num2;
                break;
            case '0':
                readableNumber = num2;
        }
        

    }


    function define1(arg) {
        let arr = arg;
        let i;

        if (arr.length == 1) {
            i = 0;

        } else if (arr.length == 2) {
            i = 1;
        }

        switch (arr[i]) {
            case '1':
                num2 = 'one';
                break;
            case '2':
                num2 = 'two';
                break;
            case '3':
                num2 = 'three';
                break;
            case '4':
                num2 = 'four';
                break;
            case '5':
                num2 = 'five';
                break;
            case '6':
                num2 = 'six';
                break;
            case '7':
                num2 = 'seven';
                break;
            case '8':
                num2 = 'eight';
                break;
            case '9':
                num2 = 'nine';
                break;
            case "0":
                num2 = "";
        }
        return num2;
        

    }

    if (arr.length == 1 && +number != 0) {
        readableNumber = define1(arr);
        
    } else if (+number == 20) {
        return twenty;
    } else if (+number > 20 && +number < 100) {
        define0(arr, define1);
        
    } else if (+number == 10 || +number > 10 && +number < 20) {
        switch (+number) {
            case 10:
                readableNumber = 'ten';
                break;
            case 11:
                readableNumber = 'eleven';
                break;
            case 12:
                readableNumber = 'twelve';
                break;
            case 13:
                readableNumber = 'thirteen';
                break;
            case 14:
                readableNumber = 'fourteen';
                break;
            case 15:
                readableNumber = 'fifteen';
                break;
            case 16:
                readableNumber = 'sixteen';
                break;
            case 17:
                readableNumber = 'seventeen';
                break;
            case 18:
                readableNumber = 'eighteen';
                break;
            case 19:
                readableNumber = 'nineteen';
                break;
        }
    } else if (+number == 0) {
                readableNumber = 'zero';
    } else if (+number > 100 && +number < 1000) {
                newArr = arr[0];
                newArr = define1(newArr);
                newArr = newArr + " " +  "hundred";
            newArr2[0] = arr[1];
            newArr2[1] = arr[2];
            define0(newArr2, define1);

            if (readableNumber == 0) {
                readableNumber = newArr;
            } else {
                readableNumber = newArr + " " +  readableNumber;
            }
            


    }

    return number = readableNumber;
}







