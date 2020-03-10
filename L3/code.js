//  Task 1: Palindrome 
// one way: 
// function palindrome (word){
//     let getStr = word.toLowerCase();
//     let reverseWord = getStr.split('').reverse().join('');
//     return reverseWord === getStr;
// }
// second way:
// function palindrome(str) {
//     str = str.toLowerCase();
//     let len = str.length;
//     for (let i = 0; i < len/2; i++){
//         if(str[i] !== str[len - 1 - i]){
//             return false;
//         }
//     }
//     return true
// }


// Task 2: 
 // max Value

// function maxValue (a, b){
//     return (a > b) ? 'Max value is ' + a : 'Max value is ' + b 
// }

 // min Value 

//  function minValue (a, b){
//     return (a < b) ? 'Min value is ' + a : 'Min value is ' + b 
// }



// Task 3

// let num = [1, 10, 23, 30, 55, 65, 70, 83, 89, 90]; 

// for (let i = 0; i < num.length; i++) {
//     num[i] = String(num[i]);
//     num[i] = num[i].split('');
//     for(let j = 0; j < num[i].length; j++){
//         if(num[i][j] == '0'){
//             num[i][j] = 'zeero';
//         }
//     }
//     num[i] = num[i].join('');
// }

// console.log(num);


