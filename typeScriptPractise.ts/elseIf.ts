function checkNumber( num: number): string{
    if (num>0){
        return 'Positive'
    }else if (num<0){
        return 'Negative'
    }else 
        return 'zero'
}

checkNumber(10);

function checkNumber(num: number): string {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(10));

function checkNumber(num:number):string{
    if (num>0){
        return 'Positive';
    }else if (num<0){
        return 'Negative';
    }else
        return 'Zero';
}

console.log(checkNumber(10));


function checkNumber(num: number):string{
    if (num>0){
        return 'Positive'
    }else if (num<0){
        return 'Negative';
    }else
        return 'Zero';
}

console.log(checkNumber(-10));

function checkNumber(num:number):string{
    if (num>0){
        return 'Positive'
    }else if (num<0){
        return 'Negative'
    }else
        return 'Zero'
}

console.log(checkNumber(0));


function checkNumber(num: number): string{
    if(num>0){
        return 'Positive'
    }else if(num<0){
        return 'Negative'
    }else 
        return 'Zero'
}

console.log(checkNumber(10));

function checkNumber(num:number): string{
    if (num>0){
        return "Positive"
    }else if (num<0){
        return "Negative"
    }else 
        return 'Zero'
}

console.log(checkNumber(-100))

function checkNumber(num:number):string{{
    if(num>0){
        return "Positive"
    }else if (num<0){
        return "Negative"
    }else 
        return "Zero"
}}

console.log(checkNumber(0));


function checkAge(num:number):string{
    if(num>=18){
        return "Adult"
    }else 
        return "Not Adults"
    }

    console.log(checkAge(18));

function checkAge(num:number):string{
    if(num>=18){
        return "Adult"
    }else 
        return "Not Adult"
}

console.log(checkAge(17));


function checkAge(num:number):string{
    if (num>=18){
        return "Adult"
    }else 
        return "Not Adult"
}

console.log(checkAge(100));

function checkAge(num:number): string{
    if (num >= 18){
        return "Adult"
    }else
        return "Not Adult"
}
 
console.log(checkAge(-10));


function validateLogin(user:string,password:string):string{
    if (user === "Admin" && password == "Pass@1234"){
        return "Credentials Validated"
    }else 
        return "Invalid Credentials"
}

console.log(validateLogin("Admin","Pass@1234"));

function validateLogin(user:string, password:string):string{
    if (user === "" || password === ""){
        return "Field cannot be empty"
    }else if ( user === "admin" && password === "Pass@1234"){
        return "Credentials validated"
    }else 
        return "Credentials Invalid"
}

console.log(validateLogin("",""));


function validateLogin(user:string, password:string):string{
    if (user==="" || password === ""){
        return "Credentials cannot be empty"
    }else if (user === "Admin" && password === "Pass@1234"){
        return "Credentials validated successfully"
    }else 
        return "Invalid credentials"
}

console.log(validateLogin("Admin","Pass@1234"));


function validatedLogin(user:string,password:string):string{
    if (user===""|| password ===""){
        return "Credentials cannot be empty"
    }else if (user === "Admin" && password ==="Pass@1234"){
        return "Credentails validated successfully"
    }else
        return "Invalid credentials"
}

console.log(validatedLogin("",""));

function checkNumber(num:number):string{
    if(num>0){
        return "Positive"
    }else if (num<0){
        return "Negative"
    }else 
        return "Zero"
}

console.log(checkNumber(100000000000000));


function checkAge(num:number):string{
    if(num>=18){
        return "You are eligible for voting"
    }else 
        return "You are not eligible for voting"
}

console.log(checkAge(18));


interface user {
    name: string;
     age: number;
}

function checkUser( user:user): string{
    if (user.age>=18){
        return "you are eligible to vote "+  user.name
    }else
        return "You are not eligible to vote "+ user.name
}

console.log(checkUser({name: "Kunal", age: 16}));


interface user{
    name: string;
    age: number;
}


function checkUser(user:user):string{
    if(user.age>60){
        return user.name+ " -You are eligible to dead"
    }else
        return user.name+" -You are not eligibe to dead"

}

console.log(checkUser({name: "Tushar", age: 75}));

interface user{
    name: string;
    age: number;
}

function checkUser (user: user): string{
    if (user.age>=10000){
        return user.name + " is eligible for sex"
    }else 
        return user.name + " is not eligible for sex"
}

console.log(checkUser({name: "Kunal", age: 29}))


interface user{
    name: string;
    age: number
}

function checkUser(user:user):string{
    if(user.age>=18){
        return user.name + " is eligible for growing boobs"
    }else return user.name + " is not eligible for not growing boobs"
}

console.log(checkUser({name: "Dhiraj", age: 26}))

interface user{
    name: string;
    age: number;
}

function checkUser(user:user):string{
    if (user.age>=18){
        return user.name+ " is nich"
    }else 
        return user.name+" is not nich"
}

console.log(checkUser({name: "Vishal Daji", age: 29}))


function checkDivisible(num: number):string{
    if(num % 5 === 0 && num % 3 ===0){
        return num + " is divisible by 3 and 5 "
    }else if (num % 5 === 0 ){
        return num + " is divisible by 5"
    }else if (num % 3 === 0 ){
        return num + " is divisible by 3"
    }else 
        return num + " is not divisible by 5 & 3"
}

console.log(checkDivisible(5));

function checkDivisible(num: number): string{
    if(num % 5 == 0 && num % 3 ==0){
        return num + " is divisible by 3 & 5"
    }else if (num % 5 ===0){
        return num + " is divisible by 5"
    }else if (num % 3 ===0){
        return num + " is divisible by 3"
    }else 
        return num + " is not divisible by 3 & 5"
}

console.log(checkDivisible(3));

function checkDivisible(num: number):string{
    if (num % 3 === 0 && num % 5 === 0){
        return num + " is divisible by 3 and 5"
    }else if (num % 3 ===0){
        return num + " is divisible bt 3"
    }else if (num % 5 === 0){
        return num + " is divisible by 5"
    }else 
        return num + " is not divisible by 3 and 5"
}

console.log(checkDivisible(15));

function checkDivisible(num: number): string{
    if(num % 3 === 0 && num % 5 === 0){
        return num + " is divisble by 3 and 5"
    }else if (num % 3 === 0){
        return num + " is divisible by 3"
    }else if (num % 5 === 0){
        return num + " is divisible by 5"
    }else 
        return num + " is not divisible by 5 and 3"
}

console.log(checkDivisible(7));

function checkDivisible(num:number):string{
    if(num % 5 ===0 && num % 3 ===0){
        return num + " is divisble by 3 and 5"
    }else if (num %5 === 0){
        return num + " is divisible by 5"
    }else if (num % 3 === 0){
        return num + " is divisible by 3"
    }else
        return num+ " is not divisible by 3 and 5"
}

console.log(checkDivisible(30));

interface user{
    name: string;
    age: number;
}

function checkAge(user:user):string{
    if(user.age>=18){
        return user.name + " is eligible for voting"
    }else 
        return user.name + " is not eligible for voting"
}

console.log(checkAge({name:"Kunal", age: 29}));

function checkBonus(num: number): string{
    if (num >= 1000000){
        return "High bonus"
    }else if (num >= 500000){
        return "medium bonus"
    }else if (num >= 10000){
        return "low bonus"
    }else 
        return "Not eligible for bonus"
}

console.log(checkBonus(90000))



1. Write a TypeScript program that declares a variable `name` and assigns it a string value. 
Also declare a variable `age` and assign it a number value. Finally print the values of name and age.

let names : string = 'Karn';
let age: number = 26;

console.log( names, age);

2. Write a TypeScript program that declares variables using let, const, and var. 
Then, describe how each declaration type behaves with respect to scoping and mutability. 


3️⃣ String Length Check

function lengthCheck(text: string): string{
    if(text.length > 5){
        return "string is large"
    }else if (text.length === 0){
        return "string is invalid"
    }else 
        return "string is too short"
}
console.log(lengthCheck(''))

function lengthCheck(text: string): string{
    if (text.length> 5){
        return "string is greater than 5"
    }else if (text.length === 5){
        return "string is ideal match"
    }else 
        return "string is too short"
}

console.log(lengthCheck('karnnnnnnnnnnnn'))


interface user{
    name: string;
    age: number;
}

function checkAge(user:user):string{
    if(user.age>=18){
        return user.name+ " is eligible for vote"
    }else 
        return user.name+ " is minor"
}

console.log(checkAge({name: 'Karn', age: 26}));

function checkLength(text: string): string{
    if(text.length ===5){
        return "Text length is valid"
    }else if (text.length > 5){
        return "Text length is to large"
    }else
        return "Text length is too short"
}

console.log(checkLength('Kunallllllllll'))

4️⃣ Boolean Flag Check

function checkAccess(isAdmin : boolean){
    if (isAdmin = true){
        return "Access is granted"
    }else
        return "Access is denied"
}

console.log(checkAccess(false));

5️⃣ Order Validation

function orderValidation(amount: number, isPaid:boolean){
    if (amount === 0){
        return "Zero Amount is paid"
    }else if (!isPaid){
        return "Amount is pending"
    }else 
        return amount+" is paid"
}

console.log(orderValidation(500, false))

function calculateDiscount(price: number, discount: number){
    const discountAmount = (price * discount)/100
    const discountedPrise =  discountAmount -  price 
    return discountedPrise 
}

console.log(calculateDiscount(1000,125));

function calculateDiscount( markedPrice: number, discount: number){
    const discountAmount = (markedPrice * discount)/100;
    const discountPrice = markedPrice - discountAmount 
    return discountPrice
}
console.log(calculateDiscount(100000, 25));

function calculateDiscount( markedPrice: number, discount: number){
    const discountAmount = (markedPrice * discount)/100
    const discountedPrise = markedPrice - discountAmount

    return discountedPrise
}

console.log(calculateDiscount(100, 50))

function temparaturCategory(temp: number):string{
    if (temp ===0){
        return "its freezing"
    }else if (temp>25){
        return "its hot"
    }else if(temp>0 && temp<25){
        return "Its moderate"
    }else
        return "its too freeze"
}

console.log(temparaturCategory(20))

7️⃣ Nested Condition Practice

function checkUser(role:string,isActive: boolean){
    if (role ==='Admin'){
        return "Access Granted"
    }else if (role === 'user'){
        if(isActive){
            return "Access Dashboard"
        }else
            return "Not Permission not given"
    }else 
        return "Access denied"
}
console.log(checkUser("karn",false));

function checkUser(role:String,active: boolean){
    if (role === "Admin"){
        return "Full access granted"
    }else if(role === "User"){
        if(active){
            return "User Dashboard"
        }else
            return " Access is denied"
    }else
        return "All permission is denied"
}

console.log(checkUser("Admin",true))

function checkUser(role:string,active: boolean){
    if(role === "Admin"){
        return "Access is granted"
    }else if (role === "user"){
        if (active){
            return "User Dashboard"
        }else 
            return "No permission is granted"
    }else
        return "Access is denied"
}

console.log(checkUser("user",true));

function checkUser(role:string,active: boolean){
    if(role === 'Admin'){
        return "Full access is granted"
    }else if (role === 'User'){
        if (active){
            return "user dashboard"
        }else
            return "no access"
    }else
        return "no permission is given"
}

console.log(checkUser("User", false))

function checkUser(role:string,active:boolean){
    if(role === "Admin"){
        return "Access Granted"
    }else if (role === "User"){
        if(active){
            return "user dashboard"
        }else
            return "No access is given"
    }else 
        return "No permission is given"
}

console.log(checkUser("karn",true))


8️⃣ API Status with Boolean

function checkApiStatus(statusCode: number, success:boolean):string{
    if (!success){
        return "Response is failed"
    }else if (statusCode === 200){
        return "Request successful"
    }else
        return "Invalid Request"
}

console.log(checkApiStatus(2000,true))

function checkApiStatus(statusCode: number, success: boolean):string{
    if(!success){
        return "Request failed"
    }else if (statusCode === 200){
        return "Request successful"
    }else 
        return "Invalid Request"
}

console.log(checkApiStatus(2000, true))


function checkAttempts(attempts: number){
    if (attempts>5){
        return "Account is locked"
    }else if (attempts>0 && attempts<5){
        return "Your retry login again"
    }else
        return "login first time"
}

console.log(checkAttempts(0));

function checkAttempts(attempts: number){
    if(attempts>5){
        return "Account is locked"
    }else if (attempts>0 && attempts<5){
        return "you try to login"
    }else 
        return "Login first time"
           
}
console.log(checkAttempts(4))

function releaseCheck(testsPassed: boolean, criticalBugs: number): string {
    if (!testsPassed) {
        return "Block release - tests failing";
    } else if (criticalBugs > 0) {
        return "Block release - critical bugs";
    } else {
        return "Release approved";
    }
}

console.log(releaseCheck(true,0));

function primeNumber(num: number){
    const primeNumber = 

}


function releaseCheck( testPassed: boolean, bugs: number){
    if (!testPassed){
        return "Test has failed- cancle release"
    }else if (bugs>0){
        return " Release have new bugs"
    }else
        return " You can release"
}

console.log(releaseCheck(true,0))


function checkDiscount(markedPrice:number,discount: number){
    const discountAmount = (markedPrice * discount)/100
    const discountedPrice = markedPrice - discountAmount;
    return discountedPrice;
}

console.log(checkDiscount(10000, 25));


function checkLength(text:string):string{
    if(text.length>5){
        return "String is too long"
    }else if (text.length == 5){
        return "String is ideal"
    }else 
        return "String is invalid"
}

console.log(checkLength('karnn'))

interface user{
    name: string;
    age: number
}

function checkAge(user:user):string{
    if(user.age >= 18){
        return user.name+ " is eligible for voting"
    }else if (user.age < 18){
        return user.name+ " is not eligible for voting"
    }else 
        return user.name+ " is invalid"
}

console.log(checkAge({name: "Karn",age: 26}));

function checkAttempts(attempts:number):string{
    if(attempts>5){
        return "Account is locked"
    }else if (attempts<5){
        return "You can try login"
    }else 
        return "first time login"
}

console.log(checkAttempts(7));

function checkApiStatus(statusCode:number,status: boolean){
    if(status){
        return "status is successful"
    }else if(statusCode ===200){
        return "Api network is reached"
    }else 
        return "status is failed"
}

console.log(checkApiStatus(200,true))

function checkUser(role:string,active:boolean):string{
    if(role === "Admin"){
        return "Access is granted"
    }else if (role === "User"){
        if(!active){
            return "user dashboard"
        }else 
            return "no accesss is given"
    }else 
        return "Access is granted"
}

console.log(checkUser("User",false));

function addition(a: number ,b: number){
    return a+b;
}

console.log(addition(5,10))


function add(a: number, b:number): number{
    return a+b;
}

console.log(add(10,20));
