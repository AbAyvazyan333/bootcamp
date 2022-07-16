
// Regular


//1) Write a function named makeQuestion, that takes three arguments: two operands and an operator, and returns a string with the question "What is [oprd1] [opr] [oprd2]?".


// const makeQuestion = (oprd1,oprd2,opr) =>{

//     return `"What is ${oprd1} ${opr} ${oprd2}?"`

// }

// console.log(makeQuestion(15,35,"+"));

//2) Make an object assign 3 different keys to it by 3 different ways that we have learned;


// let obj = {
//     name:"David"
// }

// obj.age = 33

// obj["job"] = "Programmer"

// console.log(obj);


/*3) Find the odd one out in the provided array. All array elements are equal, except one. Your function must return this odd one out. ->
["a", "a", "b", "a"] -> // 'b'*/

// const arr = ["a", "a", "b", "a"]

// const oddNum = (array) =>{
//     let checkNum = array[0]
//         for (let j = 1; j < array.length; j++) {
//             if (checkNum!==array[j] && (checkNum==array[j+1]||checkNum==array[j-1])) {
//                 return `${array[j]} is odd`
//             }
//     }
//     return `${checkNum} is odd`

// }

// console.log(oddNum(arr));



/* 4) Deduce the smallest and the largest number from the supplied numeric array. Return an array containing these numbers, smallest number first.
[14, 28, 3, 8, 2] -> [2, 28];*/

// const arr = [14, 28, 3, 8, 2]

// const counter = (array) =>{
//     let min = array[0]
//     let max = array[0]

//     for (let i = 0; i < array.length; i++) {
//        if (min>array[i]) {
//         min = array[i]
//        }
//        if (max<array[i]) {
//         max = array[i]
//        }
//     }

//     return [min,max]
// }

// console.log(counter(arr))


/* 5) Write a function to separate a single array in to two separate arrays.
*    The supplied array will only contain numeric values. Your function should output two arrays:
*     one containing odd numbers, the other containing even numbers.*/

// const arr = [12,45,69,2,8,0,78,-98,7,-43]

// const seperator = (array) =>{
//     let even = []
//     let odd = []

//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2==0) {
//             even.push(array[i])
//         }else{
//             odd.push(array[i])
//         }
//     }

//     return [even,odd]
// }

// console.log(seperator(arr))

/* 6) In this JavaScript array exercise, the supplied array may contain duplicate values. Write a function
*    to return only unique values — values that only occur exactly one time within the provided array.
*    [1, 1, 2, 3, 3, 4, 4, 5] -> [2, 5];*/



// const arr = [1, 1, 2, 3, 3, 4, 4, 5]
//
// const unique = (array) =>{
//     let result = []
//
//     for (let i = 0; i <array.length ; i++) {
//
//     }
// }



/*7) Your function must accept 2 arrays, then return the common words from each.
*    arr1 ["dog", "cat", "parrot"] arr2 ["lizard", "rat", "cat"] -> ["cat"]*/

// const arr1 = ["dog", "cat", "parrot"]
// const arr2 = ["lizard", "rat", "cat"]
//
// const common = (array1,array2) =>{
//     let result = []
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//            if (array1[i] ==array2[j]){
//                result.push(array2[j])
//            }
//         }
//
//     }
//     return result
// }
//
// console.log(common(arr1,arr2))


/** 8) Write a function to accept two arrays. Does the first array contain all elements represented in the second array?
 *    arr1 ["monday", "tuesday"], arr2 ["tuesday"] -> false;*/



//  const arr1 = ["monday", "tuesday"]
// const arr2 = ["tuesday"]
//
// const common = (array1,array2) =>{
//     let result = true
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//            if (arr1[i] !==arr2[j]){
//                return false
//            }
//         }
//
//     }
//     return result
// }

// console.log(common(arr1,arr2))




/*9) The supplied array will contain both numeric and non-numeric characters.
*    Return a new array where all numeric values are positioned at the beginning of the array,
*    ["b", 6, "a", "q", 7, 2] -> [2, 6, 7, "a", "b", "q"]*/


// let arr = ["b", 6, "a", "q", 7, 2]
//
// console.log(arr.sort())


/* 10) From the first array, construct a new array based on the indexes supplied.
*     ["mon", "tue", "wed", "thur", "fri"] -> [1, 3, 4];*/


// const arr = ["mon", "tue", "wed", "thur", "fri"]
// const indexes =[1, 3, 4]
//
// const construct = (array,index) =>{
//     let result = []
//     for (let i = 0; i <index.length ; i++) {
//         result.push(array[index[i]])
//     }
//     return result
// }
//
// console.log(construct(arr,indexes))


/*11) This one is a classic. Simply reverse the string without using reverse(). 'abcd' -> 'dcba'*/

// let word = "abcd"
//
// const reverser = (arg) =>{
//     let result = ""
//     for (let i = arg.length-1; i >= 0 ; i--) {
//         result = `${result}${arg[i]}`
//     }
//     return result
// }
//
// console.log(reverser((word)))





///////////////////////////////////////////////////////////////ADVANCED///////////////////////////////////////////////////////////////////////////////////////////

/* 1) * grel funkciya vore vorpes argument stanum e erku zangvats, zangvatsneric meke kochvum e
// * strings myuse lookups vore kveradardzni array vorum nerarvats klnien te lookup arrayi miji andamneric
// * amen meke qani angam ka strings array um

* const lookup = ['i', 'love', 'sadakhlo', 'esminich']
    * const strings = ['i', 'i', 'sadakhlo', 'i']; =>[3, 0, 1, 0]*/

// const lookup = ['i', 'love', 'sadakhlo', 'esminich']
// const strings = ['i', 'i', 'sadakhlo', 'i']
//
// const counter = (look,words) =>{
//     let result = []
//     for (let v = 0; v < look.length; v++) {
//         result[v] = 0
//     }
//
//     for (let i = 0; i <look.length ; i++) {
//         for (let j = 0; j <words.length ; j++) {
//             if (look[i]==words[j]){
//                 result[i]++
//             }
//         }
//     }
//
//     return result
// }
//
// console.log(counter(lookup,strings))






/* 2) grel funkcia vore kstana vorpes argument array kazmvac 4 hat tvic orinak [1,2,3,4]
* kveradardzni object vore kunena erku hat key voronq klinen hamapatasxanabar
*  arrayum gtnvox tveric 4 ic 3 i amenapoqr gumare ev nayev amenamec gumare
*
*
* ORINAK [1,2,3,4] i  depqum kveradardzni  object { max: 9, min : 6 }
* qani vor tveric amenamecere tvyal depqum 2+3+4 = 9 isk amenapoqere irar gumareluc
* kstacvi 1+2+3 = 6;
* */

// const  arr = [1,2,3,4]
//
// const mathProc = (array) =>{
//     array.sort()
//
//     let result = {
//         min : 0,
//         max : 0
//     }
//     for (let i = 0; i <array.length-1 ; i++) {
//         result.min +=array[i]
//     }
//
//     for (let j = 1; j <array.length; j++) {
//         result.max+=array[j]
//     }
//
//     return result
// }
//
// console.log(mathProc(arr))



/* 3)Grel funkciya vore kndhuni vorpes argument array vortex klini tver voronq bolore kkrknven erku angam baci mi hatic
* Petka gtnel er veradardznel ayd chkrknvox tive
*
*
* ORINAK [1,2,2,1,3,4,4,3,5] i  depqum kveradardzni 5 qani vor 5 e chi krknvum;
* */




/* 4)trvats e qarakusi matric vore baxkacac e tveric
* petk e aj ankyunagcov hamapatasxanabar tvere gumarel irar
*
*               1 2 3
*               4 5 6
*               7 8 9
*
*
*
*   ays depqum aj ankyunagic e hamarvum 1 > 5 > 9;
*
*   kstacvi 15
*
*   foo([1,2,3,4,5,6,7,8,9]) petk e het veradardzni ->  15
*
*   xndrumem nkatel vor matric e kara lini tarber length i bayc misht qarakusi
*
*
*   1 2 3 4
*   5 6 7 8
*   9 10 11 12
* \
*   13 14 15 16
* */

// const matric = [[1,2,3],[4,5,6],[7,8,9]]
//
//
// const liner = (arg) =>{
//     result = 0
//
//     for (let i = 0; i <arg.length ; i++) {
//         for (let j = 0; j <arg.length ; j++) {
//             if (i===j){
//                 result+=arg[i][j]
//             }
//         }
//     }
//     return result
// }
//
// console.log(liner(matric))