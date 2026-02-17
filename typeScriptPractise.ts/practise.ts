//🟢 1️⃣ Reverse a String

import { findSourceMap } from "module";
import { createSecureContext } from "tls";

// function reverseString(text: string): string{
//     return text.split("").reverse().join("");
// }

// console.log(reverseString('Karn'))


//🟢 2️⃣ Count Occurrence of Character

// function countChar(text: string, char: string): number {
//   let count = 0;

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countChar("automation", "o"));

// function countChar(text:string,char:string): number{
//   let count = 0;

//   for (let i = 0; text.length>1; i++){
//     if (text[i] === char){
//       count ++;
//     }
//   }
// }

// function reverseString(text:string): string{
//   return text.split("").reverse().join("")
// }

// console.log(reverseString('Karn'))

// function reverseString(text:string):string{
//   return text.split("").reverse().join("")
// }

// console.log(reverseString("nitin"))

// function reverseString(text:string):string{
//   return text.split("").reverse().join("");
// }

// console.log(reverseString("nitin"))

// function countChar(text : string, char : string): number{
//   let count = 0;

//   for(let i = 0; text.length>1;i++){
//     if (text[i]=== char){
//       count ++;
//     }
//   }
//   return count;
// }

// console.log(countChar("karn","k"))

// function countChar(text: string, char: string): number {
//     let count = 0;

//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === char) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countChar("autonomus", "o"));

// function countChar(text: string ,char  :string): number{
//   let count = 0;

//   for(let i = 0 ; text.length>i;i++){
//     if(text[i]===char){
//       count ++;
//     }
//   }
//   return count;
// }

// console.log(countChar("Karn","r"))

// function countChar( text: string, char: string): number{
//   let count = 0;

//   for(let i = 0; text.length>i;i++){
//     if(text[i] === char){
//       count ++;
//     }
//   }
//   return count;
// }

// console.log(countChar("abcdefghijklmnopqrstvwxyz",'x'))

// function countChar(text: string, char: string): number{
//   let count = 0;

//   for (let i = 0; text.length>i;i++){
//     if(text[i]=== char){
//       count ++;
//     }
//   }
//   return count;
// }

// console.log(countChar("Karn","n"))

// function findLargest(arr: number[]): number {
//   return Math.max(...arr);
// }

// console.log(findLargest([10,25,3,89,12]));

// function findLargest(arr: number[]):number{
//   return Math.max(... arr);
// }

// console.log(findLargest([10,25,4,89,12,234,34,4]))

// function findLargest(arr:number[]):number{
//   return Math.max(...arr);
// }

// console.log(findLargest([10,23,43,43,54,63,43,546,545,546,546]))

// function findLargest(arr: number[]):number{
//   return Math.max(...arr);
// }

// console.log(findLargest([100,13,134,242,2212,435,454,13]))


// function findLargest(arr:number[]): number{
//   return Math.max(...arr);
// }

// console.log(findLargest([10,233,43,423,43,23,234]))

// function findLargest(arr:number[]): number{
//   return Math.max(...arr);
// }

// console.log((findLargest([122,334,32,122,342,323,4442,2445,323566,1223])))


// function findLargest(arr:number[]):number{
//     return Math.max(...arr);
// }

// console.log(findLargest([1000,123,24,335,5456,456,456,456,456342354]))

// function palindrome(text:string): string{
//   return text.split("").reverse().join("");
// };

// console.log(palindrome('Karn'))

// function palindrome(text:string):string{
//   return text.split("").reverse().join("");
// }

// console.log(palindrome("Karn"))

// function findLargest(arr:number[]): number{{
//   return Math.max(...arr);
// }}

// console.log(findLargest([100,323,423,1244,124134,532,1235]))

// function findLargest(arr: number[]): number{
//   return Math.max(...arr)
// }

// console.log(findLargest([100,123,231,2352,2521,23545,234322]))

// interface user{
//   age: number
//   name: string
// }

// function checkAge(user:user):string{
//   if(user.age>=18){
//     return user.name+ " is eligible for voting"
//   }else
//     return user.name+" is not eligible for voting"
// }

// console.log(checkAge({age:26,name: "Karn"}))

// function printId(id:string| number| boolean): string{
//   if (typeof id === "number"){
//     return `${id} is Numeric`
//   }else
//     return `${id} is Invalid`
// }

// console.log(printId(true))

// function printId(id: string | number | boolean): string{
//   if( typeof id === 'number'){
//     return `${id} is Numeric type`
//   }else
//     return `${id} is invalid type`
// }

// console.log(printId(1234))

// function printId(id: string| number| boolean): string{
//   if ( typeof id === 'number'){
//     return `${id} is numeric`
//   }else if ( typeof id === 'string'){
//     return `${id} is string`
//   }else if ( typeof id === 'boolean'){
//     return `${id} is boolean`
//   }else 
//     return `${id} is invalid`
// }

// console.log(printId("Karn"))

// function printId(id:string| number | boolean):string{
//   if (typeof id === 'number'){
//     return `${id} is number`
//   }else if (typeof id === 'string'){
//     return `${id}is string`
//   }else if (typeof id === 'boolean'){
//     return `${id} is boolean`
//   }else
//     return `${id} is invalid`
// }

// console.log(printId(true))

// function findMissing(arr: number[]): number {
//   for (let i = 1; i <= arr.length + 1; i++) {
//     if (!arr.includes(i)) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findMissing([1,2,3,4,5,10]))


// function findMissing(arr: number[]): number {
//   for (let i = 1; i <= arr.length + 1; i ++){
//     if (!arr.includes(i)){
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findMissing([1,2,3,4,5,6,7,9]))

// function findMissing(arr:number[]): number  {
//   for (let i = 1;i <= arr.length+1;i++){
//     if (!arr.includes(i)){
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findMissing([1,2,3,4,5,7,8,9]))

// function findMissing(arr:number[]): number{
//   for (let i =1;i<=arr.length+1;i++){
//     if(!arr.includes(i)){
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findMissing([11,12,13,14,14,16,18]))

// function findMissing(arr:number[]):number{
//   for (let i=1; i<= arr.length+1;i++){
//     if(!arr.includes(i)){
//       return i;
//     }
//   }return -1;
// }

// console.log(findMissing([1,2,3,4,5,7]))

// function findMissing(arr:number[]):number{
//   for(let i=1; i<= arr.length+1;i++){
//     if(!arr.includes(i)){
//       return i;
//     }
//   }return -1;
// }

// console.log(findMissing([1,2,3,4,5,6,9]))

// function findId(id:number|string|boolean):string{ 
//   if(typeof id === 'number'){
//     return `${id} is number type`
//   }else if (typeof id === 'string'){
//     return `${id} is string type`
//   }else if (typeof id === 'boolean'){
//     return `${id} is boolean type`
//   }else 
//     return `${id} is invalid type`
// }

// console.log(findId(true))


// function findId(id:number|string|boolean):string{
//   if (typeof id === 'number'){
//     return `${id} type is number`
//   }else if (typeof id === 'string'){
//     return `${id} type is string`
//   }else if (typeof id === 'boolean'){
//     return `${id} type is boolean`
//   }else 
//     return `${id} is invalid`
// }

// console.log(findId('Kaen'))


// interface user{
//   age: number
//   name: string
// }

// function checkAge(user:user):string{
//   if (user.age >=18){
//     return user.name+" is eligible for voting"
//   }else if(user.age >= 60){
//     return user.name+" is senior citizen"
//   }else 
//     return user.name+" is invalid"
// }

// console.log(checkAge({name:"karn",age:26}))

// function reverseString(arr:string){
//   return arr.split("").reverse().join("")
// }

// console.log(reverseString('karn'))

// function reverseString(user:string){
//   return user.split("").reverse().join("")
// }

// console.log(reverseString("ABCDEFGHIJKLMNOPQRSTVWXYZ"))

// function findLargest(num:number[]):number{
//   return Math.max(...num)
// }

// console.log(findLargest([111,2233,355,4124,4534,12435]))

// function findLargest(num:number[]):number{
//   return Math.min(...num)
// }

// console.log(findLargest([112131,124423,132435,52452,232,3423,2342352]))

// function countChar(text: string, char: string): number {
//   let count = 0;

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countChar("automation", "o"));

// function countChar(text:string,char:string):number{
//   let count = 0;

//   for (let i = 0; text.length>i;i++){
//     if(text[i] === char){
//       count ++;
//     }
//   }
//   return count;
// }

// console.log(countChar("Missisippi","i"))

// function countChar(text:string,char:string):number{
//   let count = 0;

//   for(let i = 0;text.length>i;i++){
//     if(text[i]=== char){
//       count++;
//     }
//   }return count;
// }

// console.log(countChar("karn","a"))

// function countChar(text:string,char:string):number{
//   let count = 0;

//   for(let i =0;text.length>i;i++){
//     if(text[i]=== char){
//       count ++;
//     }
//   }
//   return count;
// }

// console.log(countChar('Autonomus','o'))

// interface response{
//   status:number
//   success: boolean
// }

// function apiResponse(api:response){
//   if(api.status === 200 && api.success=== true){
//     return 'Correct API'
//   }else
//     return 'Incorrect API'
// }

// console.log(apiResponse({ status: 201, success: true }));

// interface response{
//   status: number;
//   success: boolean;
// }

// function apiResponse (response:response){
//   if(response.status === 200 && response.success === true){
//     return "Correct Api"
//   }else 
//     return "Incorrect APi"
// }

// console.log(apiResponse({status: 200,success : true}))


