

//ay**********afficher le minimum des element en array avec boucle for et condition if ********

let arr = [50, 5, 6, 7, 8, 2, 10, 11, 1];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);



//**************affiche le max avex method (.Math max())**************
let arrr = [10, 50, 22, 200, -15];
let maxx = Math.max(...arrr);
console.log(maxx);

//************affiche le minimum avec method reduce ****************
/*
the reduce method is used to reduce the array to a single value 

*/
let arrray = [0, 5, 6, 7, 8, 2, 10, - 11, 1];
let test = arrray.reduce(function (prv, cur) {
    if (prv < cur) {
        return prv;
    }
    return cur
}, arrray[0])
console.log(test);

//**********function somme *************/

function sum(a, b) {
    return a + b;
}
console.log(sum(5, 11));

//**********longueur array*************/
function length(arr) {
    return arr.length;
}
var x = [1, 'ahmed', 5];
console.log(length(x));


//**********min et max  array*************/

//********expl1 */

function minMax(arr) {
    arr.sort(function (a, b) { return a - b });
    return [arr[0], arr[arr.length - 1]];
}

//***expl2 */
function minima(arr) {
    let mi = arr[0];
    let ma = arr[1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < mi) {
            mi = arr[i];
        }
        else if (arr[i] > ma) {
            ma = arr[i];
        }
    }
    return {
        mi: mi,
        ma: ma
    }
}
var x = [1, 7, 5, 0, -1, 50, 100.9, -2, 1000];
console.log(minMax(x));

//**********somme du tableau *************/
function sumTab(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}
var x = [1, 7, 5, 0, -1];
console.log(sumTab(x));

//**********somme du nombre paire du tableau *************/
function sommePair(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}
var x = [1, 4, 5, 0, -1, 2, 10];
console.log(sommePair(x));

//**********sort tableau *************/

let o = [1, 4, 5, 0, 2, 7];
let y = [5, 8, 100000, 150000, 4, 7];
o.sort((a, b) => a - b);
y.sort((a, b) => a - b);

console.log(o, y);


//*********type of element in array*********/
function testt(arr) {
    type = typeof arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != type) {
            return 'contient plus q\'un type';
        }
    }
    return ' type array est ' + type;
}
let tab1 = [5, 10, 4];
let tab2 = ['ahmed', 'souheil', 'firas'];
let tab3 = [0, 51, 'ahmed'];
console.log(testt(tab1));
console.log(testt(tab2));
console.log(testt(tab3));



//************rendre un objet array********** */
let jhon = {
    firstName: 'jhon',
    age: 26,
}
let p = Object.keys(jhon).map(key => ({ [key]: jhon[key] }));
console.log(p);


//**********sorting array using the for loop***** */
let ta = [1, 8, 5, 9, 0];
let aa = 0;
for (let i = 0; i <= ta.length - 1; i++) {
    for (let j = i + 1; j < ta.length; j++) {
        if (ta[i] > ta[j]) {
            aa = ta[i];
            ta[i] = ta[j];
            ta[j] = aa;
        }

    }
}
console.log(ta)


//***************filter out strings from array  *******/
function filt(arr) {
    let tab = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            tab.push(arr[i]);
        }

    }
    return tab;

}
let op = [0, 'a', 5, 'b', 100, '2'];
console.log(filt(op));

/**********second method with filter() */
// function filterArray(arr) {
//     return arr.filter(function (val) {
//         return typeof val !== 'string';
//     });
// }

/**********sum of the absolute value in array */
function getAbsSum(arr) {
    let sum = 0;
    let pos = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            sum += arr[i];
        }
        else if (arr[i] < 0) {
            sum += arr[i] * pos;
        }
    }
    return sum;
}

/*******second method  with (abs methd) ***** */
// function getAbsSum(arr) {
//     return arr.map(x => Math.abs(x)).reduce((a, b) => a + b);
// }

/***************the number of the true in array *******************************/
function countTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count += 1;
        }
    }
    return count;
}
let t = [true, false, true, true, false, true, true]
console.log(countTrue(t))
/**second method with filter  */
//const countTrue = r => r.filter(Boolean).length



/************************************************************************
 Create a function that takes an array of numbers arr, 
 a string str and return an array of numbers as per the following rules:
"Asc" returns a sorted array in ascending order.
"Des" returns a sorted array in descending order.
"None" returns an array without any modification.
 **********************************************************************/
function ascDesNone(arr, str) {
    let aux = 0;
    if (str == 'Asc') {
        for (let i = 0; i <= arr.length - 1; i++) {
            for (j = i + 1; j <= arr.length; j++) {
                if (arr[i] >= arr[j]) {
                    aux = arr[i];
                    arr[i] = arr[j];
                    arr[j] = aux;
                }
            }
        }
        return arr;
    }
    else if (str == 'Des') {
        for (let i = 0; i <= arr.length - 1; i++) {
            for (j = i + 1; j <= arr.length; j++) {
                if (arr[i] <= arr[j]) {
                    aux = arr[i];
                    arr[i] = arr[j];
                    arr[j] = aux;
                }
            }
        }
        return arr;
    }
    else {
        return arr;
    }
}

/****** with switch  */
function ascDesNone(arr, str) {
    switch (str) {
        case "Asc":
            return arr.sort((a, b) => a - b);
        case "Des":
            return arr.sort((a, b) => b - a);
        case "None":
            return arr;
    }
}


/************************************************************************
 Write a function that converts an object into an array, 
 where each element represents a key-value pair in the form of an array.
 ************************************************************************/
function toArray(obj) {
    let newArray = Object.entries(obj);
    return newArray;
}
let objet = {
    firstName: 'souheil',
    lastName: 'mansouri',
}
console.log(toArray(objet));


/*********** ***************************************************************
Write a function that returns the string 
"something" joined with a space " " 
and the given argument a.
****************************************************************************/
function giveMeSomething(a) {
    let str = "something"
    return str.concat(' ', a);
}
console.log(giveMeSomething('was cooked '));
/****************************************************************
 exemple:
inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
})
 *******************************************************************/
function inkLevels(inks) {
    let arr = Object.values(inks)
    return Math.min(...arr);
}

/**************adding a number to the value of the object  */
function afterNYears(names, n) {
    for (const item in names) {

        names[item] = names[item] + Math.abs(n);

    }
    return names

}
let obej = {
    "Joel": 32,
    "Fred": 44,
    "Reginald": 65,
    "Susan": 33,
    "Julian": 13

}
console.log(afterNYears(obej, 5));


/************** supprimer les nombre repeter du tableaux  et faire la somme des nombre restants */
let arr1 = [3, 1, 7, 9];
let arr2 = [4, 1, 9, 3];
let arr3 = [...arr1, ...arr2]
console.log(arr3)
let sm = 0;
for (i = 0; i <= arr3.length - 1; i++) {
    for (j = i + 1; j <= arr3.length - 1; j++) {
        if (arr3[i] === arr3[j]) {
            arr3[i] = 0
            arr3[j] = 0
        }
    }
    sm = sm + arr3[i]
}
console.log(arr3)
console.log(sm)


/******************* multiplier index du premier tableau avec index du 2eme tableau*************** */
var ar1 = [1, 3, 8]
var ar2 = [2, 1, 1]
s = 0;
for (i = 0; i <= ar1.length - 1; i++) {
    s = s + ar1[i] * ar2[i]
}
console.log(s)

/******************** repeating the elemnt of the string based on their index  *************************** */

function accum(s) {
    let news = s.split('')
    let arr = news.map((el, index) => el.toUpperCase() + el.toLowerCase().repeat(index)).join('-')
    return arr
}
let st = 'souheil'
console.log(accum(st))

//////////*///////////////////*/////////////////////////*
/**
Definition and Usage
The repeat() method returns a string with a number of copies of a string.

The repeat() method returns a new string.

The repeat() method does not change the original string.

-----Syntax::
string.repeat(count)
 */
////////////////***/*************************** */

/******************************************* GET THE MIDDELE CHARACTER **************************************/

function getMiddle(s) {
    let news1 = s.split('')
    let midd = Math.floor((news1.length - 1) / 2)
    if ((news1.length - 1) % 2 === 0) {
        return news1.slice(midd, midd + 1).join('')
    }
    else {
        return news1.slice(midd, midd + 2).join('')
    }
    // let middle = Math.floor((s.length - 1) / 2);
    // console.log(middle)

    // return (s.length - 1) % 2 === 0
    //     ? s.slice(middle, middle + 1)
    //     : s.slice(middle, middle + 2);
}
let st0 = 'souheil'
let st1 = 'test'
console.log(getMiddle(st0))
console.log(getMiddle(st1))

//////////  exple por comprendre le comportement de slice method   //////////////
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", 'peach'];
let frui = fruits.slice(2, 3)
let frui1 = fruits.slice(2, 4)
console.log(frui)
console.log(frui1)
//////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////  You're a square!  //////////////////////////////////////////////////

//////// method 1 ////////
var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n)) ? true : false
}
console.log(isSquare(12))

////// method 2 ////////
var isSquare = function (n) {
    const sqrt = Math.sqrt(n);
    return sqrt === Math.round(sqrt);
}

///////////////////////////////// removing the vowels from a given string ///////////////////////////////////////////////


/////// first method /////////
function disemvowel(str) {
    let newStr = str.split('')
    let pu = []
    newStr.forEach(el => {
        if ((el !== 'a') && (el !== 'A') && (el !== 'o') && (el !== 'O')
            && (el !== 'u') && (el !== 'U') && (el !== 'e') && (el !== 'E') && (el !== 'i') && (el !== 'I')) {
            pu.push(el)
        }
    })
    return pu.join('')
}
let sst = 'This website is for losers LOL!'
console.log(disemvowel(sst))

/////// second method /////////
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

///////////////////////////////// Highest and Lowest///////////////////////////////////////////////

function highAndLow(numbers) {
    let arr0 = numbers.split(' ')
    //const tab0 = arr0.filter((elt) => elt !== ' ')
    let maxArr = Math.max(...arr0)
    let minArr = Math.min(...arr0)
    let rslt = [maxArr, minArr]
    return rslt.join(' ');
}
let num = '1 5 3 -1'
console.log(highAndLow(num))

////////////////////////////////////////  Exes and Ohs //////////////////////////////////////////////////////////
// function XO(str) {
//     let tab4 = str.split('')
//     let sumx = 0
//     let sumo = 0
//     tab4.forEach(el => {
//         if (el.toUpperCase() === 'X') {
//             sumx++
//         }
//         if (el.toUpperCase() === 'O') {
//             sumo++
//         }
//     })
//     return (sumx == sumo)
// }
// let ss = " zzoo"
// console.log(XO(ss))

///////// method 2 //////////
// const XO = str => {
//     str = str.toLowerCase().split('');
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }

/////// method3 ///////
function XO(str) {
    let a = str.replace(/x/gi, '')
    console.log(a)
    let b = str.replace(/o/gi, '');
    console.log(b)
    return a.length === b.length;
}
let ss = " xxxoo"
console.log(XO(ss))

////// method 4 /////
// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
// }

////////////////////////////////////////  Square Every Digit //////////////////////////////////////////////////////////
function squareDigits(num) {
    let num1 = String(num).split('').map(el => Math.pow(el, 2)).join('')
    return (parseInt(num1))
}
console.log(squareDigits(9119))


////////////////////////////////////////  Shortest Word //////////////////////////////////////////////////////////
function findShort(s) {
    let s1 = s.split(' ')
    console.log(s1)
    let s2 = s1.map(el => el.length)
    return Math.min(...s2)
}
console.log(findShort("Let's travel abroad shall we"))


//////////////////////////////////////// Descending Order  //////////////////////////////////////////////////////////
function descendingOrder(n) {
    let sr = String(n).split('')
    let ars = sr.map(el => Number(el)).sort((a, b) => b - a).join('')
    return parseInt(ars)
}
console.log(descendingOrder(123456789))

//////////////////////////////////////// Sum of positive //////////////////////////////////////////////////////////
function positiveSum(arr) {
    let arr1 = arr.filter(el => el >= 0).reduce((a, b) => a + b, 0)
    return arr1
}
console.log(positiveSum([1, -4, 7, 12]))


//////////////////////////////////////// Complementary DNA //////////////////////////////////////////////////////////
function DNAStrand(dna) {
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase()
}
//console.log(DNAStrand('AAAA'))

////// method2////
function DNAStrand(dna) {
    let dna1 = dna.split('')
    let rlt = []
    dna1.forEach(el => {
        if (el === 'A') {
            rlt.push('T')
        }
        if (el === 'T') {
            rlt.push('A')
        }
        if (el === 'C') {
            rlt.push('G')
        }
        if (el === 'G') {
            rlt.push('C')
        }

    })
    return rlt.join('')
}
//console.log(DNAStrand('GTAT'))

////// method 3////
function DNAStrand(dna) {
    let bj = { A: 'T', T: 'A', C: 'G', G: 'C' }
    return dna.split('').map(el => bj[el]).join('')
}
console.log(DNAStrand('AAAA'))


//////////////////////////////////////// Isograms //////////////////////////////////////////////////////////

function isIsogram(str) {
    let nstr = []
    str = str.toLowerCase()
    console.log(str)
    let str1 = str.split('')
    console.log(str1)
    for (i = 0; i <= str1.length - 1; i++) {
        for (j = i + 1; j <= str1.length; j++) {
            if (str1[i] === str1[j]) {
                nstr.push(str1[j])
            }
        }
    }
    console.log(nstr)
    return nstr.length === 0 ? true : false
}
console.log(isIsogram('msosme'))


//////////////////////////////////// list filtering//////////////////////////////////////////////////////////
function filter_list(l) {
    let newL = l.filter(el => typeof (el) === 'number')
    return newL


}
console.log(filter_list([1, 2, 'a', 'b']))

///////////////////////// Find the smallest integer in the array //////////////////////////////////////////

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min(...args)

//     }
// }
///////////////////////// Sum of two lowest positive integers //////////////////////////////////////////


function sumTwoSmallestNumbers(numbers) {
    let n = numbers.sort((a, b) => a - b)
    return n[0] + n[1]

}
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))


///////////////////////// Growth of a Population //////////////////////////////////////////
function nbYear(p0, percent, aug, p) {

    for (var i = 0; p0 < p; i++) {
        p0 = Math.floor(p0 * (1 + percent / 100)) + aug
    }
    return i
}
console.log(nbYear(1500000, 2.5, 10000, 2000000))

///////////////////////// String repeat //////////////////////////////////////////

function repeatStr(n, s) {
    return s.repeat(n)

}
console.log(repeatStr(4, 't'))

///////////////////////// Is this triangle //////////////////////////////////////////
function isTriangle(a, b, c) {
    return (a + b > c && a + c > b && b + c > a)
}
console.log(isTriangle(7, 2, 2))

///////////////////////// next perfect square //////////////////////////////////////////
function findNextSquare(sq) {
    let numb = Math.sqrt(sq)
    return Number.isInteger(numb) ? Math.pow((numb + 1), 2) : -1

}
console.log(findNextSquare(625))

///////////////////////// Credit Card Mask //////////////////////////////////////////

function maskify(cc) {
    let ncc = cc.split('')
    let x = ncc.splice(0, ncc.length - 4).map(el => el = '#').join('')
    console.log(x)
    let ncc1 = ncc.join('')
    console.log(ncc1)
    return x.concat(ncc1)
}
console.log(maskify('4556364607935616'))



///////////////////////// Sum of odd numbers //////////////////////////////////////////

function rowSumOddNumbers(n) {
    for (let i = 0; i <= n; i++) {
        return n * n * n
    }


}
console.log(rowSumOddNumbers(42))

///////////////////////// Find the divisors! //////////////////////////////////////////

function divisors(integer) {
    let tab = []
    for (let i = 2; i < integer; i++) {
        if (integer % i == 0) {
            tab.push(i)
        }
    }
    return tab.length !== 0 ? tab : `${integer} is prime  `


};
console.log(divisors(15))

///////////////////////// Return Negative //////////////////////////////////////////

function makeNegative(num) {
    if (num > 0) {
        return num * -1
    }
    else if (num < 0) {
        return num
    }
    else {
        return 0
    }

}
console.log(makeNegative(0))

///// second method ////

function makeNegative(num) {
    return num < 0 ? num : -num;
}

///// third method ////

function makeNegative(num) {
    return -Math.abs(num);
}

///////////////////////// remove char //////////////////////////////////////////

function removeChar(str) {
    return str.slice(1, str.length - 1)
};
console.log(removeChar('country'))

///////////////////////// remove char //////////////////////////////////////////

function noSpace(x) {
    let x1 = x.split(' ').filter(el => el !== '').join('')
    return x1
}
console.log(noSpace('8aaaaa dddd r     '))

///////////////////////// Convert boolean values to strings 'Yes' or 'No'. //////////////////////////////////////////

function boolToWord(bool) {
    return bool ? 'Yes' : 'No'
}
console.log(boolToWord(false))

/////////////////////////   Convert a Number to a String! //////////////////////////////////////////
function numberToString(num) {
    return x = String(num)
}
console.log(numberToString(123))

/////////////////////////   Abbreviate a Two Word Name //////////////////////////////////////////

function abbrevName(name) {

    let newName = name.split(' ')
    let [a, b] = newName
    console.log(a)
    console.log(b)
    console.log('******************')
    let x = (a[0])
    let y = (b[0])
    console.log(x)
    console.log(y)
    console.log('******************')
    return x.toUpperCase() + '.' + y.toUpperCase()
}
console.log(abbrevName('Evan Cole'))
///// method2 ////
// function abbrevName(name) {
//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

/////////////////////////  Basic Mathematical Operations  //////////////////////////////////////////

// function basicOp(operation, value1, value2) {
//     if (operation === '+') {
//         return value1 + value2
//     }
//     else if (operation === '-') {
//         return value1 - value2
//     }
//     else if (operation === '*') {
//         return value1 * value2
//     }
//     else if (operation === '/') {
//         return value1 / value2
//     }
// }
// console.log(basicOp('+', 4, 7))

//// method 2 ////
// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }

///// method 3 ////
function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2);
}
console.log(basicOp('+', 5, 7))

/////////////////////////  Sum of the first nth term of Seriess  //////////////////////////////////////////
function SeriesSum(n) {
    let s = 0;
    for (let i = 0; i < n; i++) {
        s += 1 / (i * 3 + 1);
    }
    return s.toFixed(2);
}
console.log(SeriesSum(2))

///////////////////////// Keep Hydrated! //////////////////////////////////////////

function litres(time) {
    return Math.floor(time * 0.5)
}
console.log(litres(12.3))

///////////////////////// CENTURY FROM YEAR //////////////////////////////////////////
function century(year) {
    return Math.ceil(year / 100)
}
console.log(century(1601))

///////////////////////// Beginner - Lost Without a Map //////////////////////////////////////////
function maps(x) {
    let nx = x.map(el => el * 2)
    return nx
}
console.log(maps([1, 2, 3]))

///////////////////////// reverse string //////////////////////////////////////////
function solution(str) {
    let rev = []
    let nStr = str.split('')
    console.log(nStr.length)
    for (let i = nStr.length - 1; i >= 0; i--) {
        rev.push(nStr[i])
    }
    return rev.join('')
}
//console.log(solution('word'))

///// second method /////
function solution(str) {
    return str.split('').reverse().join('');
}

/********************** rendre une chaine avec (... ) ala fin si exeed the limit length******************* */

/**
 // 'pasta with tomato and spinach'
acc:0/ acc+cur.length=5 /newTitle=['pasta']
acc:5/ acc+cur.length=9 /newTitle=['pasta','with']
acc:9/ acc+cur.length=15 /newTitle=['pasta','with','tomato']
acc:0/ acc+cur.length=18 /newTitle=['pasta''with','tomato']
acc:0/ acc+cur.length=24 /newTitle=['pasta''with','tomato']
 */


const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length
        }, 0)
        return `${newTitle.join(' ')}...`
    }
    return title
}
let titles = 'pasta with tomato and spinach'
console.log(limitRecipeTitle(titles))

/********************************************** word reverse ********************************************* */

function reverseWords(str) {
    let nStr = ''
    for (i = str.length - 1; i >= 0; i--) {
        nStr += str[i]
    }
    console.log(nStr)
    return nStr.split(' ').reverse().join(' ')
}
//console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))

////// method2////
function reverseWords(string) {
    newString = string.split(' ').map(el => [...el].reverse().join(''))
    return newString.join(' ')
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))




