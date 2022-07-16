// function isHappy(start, end, happyNumberCount){
//     let resultArr = [];
//     for (let i = start ; i < end; i ++ ){
//         if (resultArr.length === happyNumberCount) break;
//         let allFoundNumbes = 0;
//         for (let j = 1 ;j < i; j ++ ){
//             const ijResult = i % j;
//             if (!ijResult){
//                 allFoundNumbes += j;
//             }
//         }
//         if (allFoundNumbes === i){
//             resultArr.push(i);
//         }
//     }
//     return resultArr;
// }


// console.log(isHappy(0,100,3))

////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const cut = (array,num) =>{

//     let result = [array[0]]

//     for (let i = 0; i < array.length; i++) {
//         if (array[i]===num) {
//             for (let j = 0; j < num; j++) {
//                 result.push(array[j]);
//             }
//         }
//     }

//     return result

// }

// console.log(cut([2,8,5,4,0,7,-9],4))




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//     let object ={
//         name:"David",
//         age:12
//     }

    

//     const foo = (obj,key) =>{
        
//         if(!obj[key]){
//              obj["dummy"]=null
//         }
//         return obj
//     }

// console.log(foo(object,"name"))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//     let arr = ["barev","hajox"]

//     const texter = (array) => {
//         let result = ""

//         for (let i = 0; i < array.length; i++) {
//             result +=array[i] + " "          
//         }

//     return result

//     }

// console.log(texter(arr))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  let  arr = [1,2,3,4]

//     const joinStrs = (array,n) =>{

//         let result = array
//         let inProc

//         for (let i = 0; i < n; i++) {
//             inProc = result.shift()
//             result.push(inProc)
//         }
//         return result
//     }

// console.log(joinStrs(arr,6))

/////////////////////////////////2rd tarberak///////////////////////////////////////////////////////

// let  arr = [1,2,3,4]

// const joinStrs = (array,n) =>{

//     let result = []
//     let inProc

//     for (let i = 0; i < n; i++) {
       
//        array[array.length] = array[i]
//     }

//     for (let j = 0; j < array.length; j++) {
//         result[result.length] = arr[i]
        
//     }

//     return result
// }

// console.log(joinStrs(arr,2))


//1 2 3 4
//2 3 4 1
//3 4 1 2

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // const foo = () => {

    // }

