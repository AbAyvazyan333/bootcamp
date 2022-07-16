/*





// 11) Given a string s and an array of strings words, determine whether s is a prefix string of words.
//
// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
//
// Return true if s is a prefix string of words, or false otherwise.

// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.



// 12) Given an array of objects where objects have the following structure return an array of objects also containing
//     a field country, for example if phone number starts with +374 the field country will be Armenia, you can assume that
// first 4characters of phoneNumber represent the country, so you can just query them ,the country codes are given below,
// you will need to make the names uppercase,
// also there may or may not be a field relation which will be a string representing the name of one of the objects in the array
// you will need to replace that string with a reference to that actual object

///
const phoneCountryCodes = {
    '+374': 'Armenia',
    '+375': 'Somali',
    '+376': 'Russia',
    '+377': 'Hoktemberyan',
}

const arrOfObjects = [

    {
        name: 'sarah',
        age: 32,
        phoneNumber: '+374000000',
        relation: 'nelly'
    },
    {
        name: 'nelly',
        age: 11,
        phoneNumber: '+3750020000',
        relation: 'sarah'
    }
];

const referancetoSarahObject = arrOfObjects[0];
const referanceToNellyObject =  arrOfObjects[1];

// You will need to return


const arrOfObjects = [

    {
        name: 'SARAH',
        age: 32,
        phoneNumber: '+374000000',
        country: 'Armenia',
        relation: referancetoSarahObject,
    },
    {
        name: 'NELLY',
        age: 11,
        phoneNumber: '+3750020000',
        country: 'Somali',
        relation: referanceToNellyObject,

    }
];

// BONUS XNDIR VORE PARTADIR CHE LUCEL 

// grel funkcia vore kndhuni ashakertneri qnnutyun hertakanutyun array e

// orinak [[1,6], [2,5], [4, 3]]



// Patkeracnenq menq masnakcum enq qnnutyan vortex

// amen ashakert uni qnnutyane patrastvelu ir jamanake, ayd jamanake karox e tarber ashakertneri hamar linel tarber,
// henc ashakerti qnnutyane patrastvelu jamanake ancnum e da nshanakum e vor na karox e sksel patasxanel
// ete voch mek ayd yntacqum chi patasxanum, ete inch vor meke patasxanum e na petk e spasi,

// amen ashakert uni nayev xoselu jamanak, aysinqn te inchqan jamnak e gnum nra patasxanelu vra;

const arr = [[1,6], [2,5], [4, 3]] // -> sa nshanakum e vor orinak arajin ashakerte petk e qnnutyane patrastvi 1 jamanaki miavor
// isk kpatasxani 2 jamanaki miavor, erkrord ashakerte hamapatasxanabar 3 jamanaki miavor kcaxsi patrastvelun
// u 5 jamanaki miavor patasxanalu hamar.

// INCHPES E DASAXOSE HASKANUM VOR ASHAKERTI PATASXANELU JAMANAKN E ?

// patkeracnenq unenq 3 ashakert

const ashakertner = [[1,6], [2,5], [4, 3]];

// ashakertner array e uni hetevyal tesqe -> [    [ patrastveluJamanak, patasxaneluJamanak ]   ]

// qanzi gitenq vor ashakertnere petk e patrastven, dra hamar vorpes dasaxos menq kntrenq skselu hamar
// amenaqich patrastvelu jamanak caxsac mardun vore kcaxsi 1 jamnaki miavor patrastvelu vra.

// mer depqum ashakertner array i 0-rd andamin.
// vore kcaxsi 1 jamanaki miavor patrastvelun u ksksi patasxanel,
// arajin ashakerte yst mer orinaki kcaxsi nayev 6 jamanaki miavor patasxanelu vra,
// aysinqn yndhanur jamanakic kancni 1 + 6 aysinqn 7 jamanaki miavor,
// ayd yntacqum 2rd ev 3rd ashakertnere nuynpes patrast klinen patasxanelun,
// qani vor nranq unen hamapatasxanabar 2 ev 4 jamanaki miavor patrastvelu hamar
// isk menq gitenq vor arden 7 jamnaki miavor caxsvel e arajin ashakerti jamanak
// bayc dasaxose naxyntrutyune talis e ayn ashakertin vore uni amenaqich patasxanelu jamanake, mer depqum
// 3rd ashakerte vore uni3 jamanaki miavor.
// hetevabar 3rd ashakerte kga patasxanelu ayd yntacqum erkrorde kspasi,
// errord ashakerte kpatasxani 3 jamanaki miavori yntacqum voric heto miyayn nor kpatasxani
// erkrord ashakerte ev ayd tramabanutyamb mnacace.


// nshel ashakertneri patasxanelu hertakanutyune yst nranc index neri hashvi arnelov vere nshvats hangamanqnere //;

// aysinqn mer depqum kstananq hetevyal output e
// shakertner( [[1,6], [2,5], [4, 3]]) -> kta [0, 2, 1] 0 index i tak gtnvox ashakerte patasxanele arajine
// 2 indexine erkrorde ev ayln

// ete ashakerti spaselu/patrastvelu jamnake ancel e u inqe uni nuyn patasxanelu jamanake inche masnakicneric meke kam mi qanise
// apa ayd depqum hertakanutyune karevor che.*/





//1) Make an array of numbers that are doubles of the first array


// function doubleNumbers(arr){
//     return arr.map(num => num*2)
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

/////////////////////////////////////////////////////////////////////////////////

// 2) Take an array of numbers and make them strings

// function stringItUp(arr){
//     return arr.map(num=>`${num}`)
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

/////////////////////////////////////////////////////////////////////////////////

//3) Capitalize each of an array of names

// function capitalizeNames(arr){
//     return arr.map(string =>{
//        return string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase()
//     })
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
//4) Make an array of strings of the names
// function namesOnly(arr){
//     return arr.map(obj => obj.name)
// }
//
// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5) Make an array of strings of the names saying whether or not they can go to The Matrix


// function makeStrings(arr){
//     return arr.map(obj => {
//         if(obj.age>18){
//             return `${obj.name} can go to The Matrix`
//         }else{
//             return `${obj.name} is under age!!`
//         }
//     })
// }
//
// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// under age means not 18 +;

//6)  If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.


// const input = [ 1, -4, 12, 0, -3, 29, -150]  //   42
//
// const sumOfPos = (array) => {
//     let result = 0
//     array.map(item=>{
//         if (item>0){
//             result+=item
//         }
//     })
//     return result
// }
//
// console.log(sumOfPos((input)))

//7) Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

//     const input7 = [
//     {
//         name: 'John',
//         age: 13
//     },
//     {
//         name: 'Mark',
//         age: 56,
//     },
//     {
//         name: 'Rachel',
//         age: 45,
//     },
//     {
//         name: 'Nate',
//         age: 67,
//     },
//     {
//         name: 'Jeniffer',
//         age: 65,
//     }
// ];
//
//
// const ageOf = (array) =>{
//     let max = array[0].age
//     let min = array[0].age
//     array.map(person => {
//         if (person.age > max){
//             max = person.age
//         }
//
//         if (person.age < min){
//             min = person.min
//         }
//     })
//     return[min,max,max-min]
// }
//
// console.log(ageOf(input7))

/*// Output ->  [13, 67, 54];*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8 )Count the occurrences of distinct elements in the given 2D array. The given input is an array,
// the elements of which are arrays of strings. The result is an object whose
// property names are the values from the arrays and their value is the number of their occurrences.


// const input8 = [
//     ['a', 'b', 'c'],
//     ['c', 'd', 'f'],
//     ['d', 'f', 'g'],
// ];
//
// const arrToObj = (array) =>{
//     let result = {}
//     array.map(arr =>{
//         arr.forEach(item=>{
//             if (!result[item]){
//                 result[item]=1
//             }else{
//                 result[item]++
//             }
//
//         })
//     })
//     return result
// }
//
// console.log(arrToObj(input8))

/*const output8 =   {
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
}*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9) Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// NOTE if the n / 2 is for example 3.5 you can assume that the majority elements appears not 3.5 times but 4 times

// const majority = (array) =>{
//     let count = {}
//     array.map(item =>{
//         if (!count[item]){
//             count[item] = 1
//         }else{
//             count[item]++
//         }
//     })
//     for (const countKey in count) {
//         if (count[countKey]>(array.length/2)){
//             return countKey
//         }
//     }
// }
//
// console.log(majority([2,2,1,1,1,2,2]))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10) gtnel trvats array i miji 3rd amenashate krknvox tive;

const arr = [1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,4,4,1]

const number3 = (array) =>{
    array.map(item)
}