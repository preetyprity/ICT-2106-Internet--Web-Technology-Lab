console.log("prity das");
console.log("welcomne");
fulname="pritom";
console.log(fulname);
price=57.87;
console.log(price);
x=null;
console.log(x);
y=undefined;
console.log(y);
isfollow=true;
console.log(isfollow);
let name="ankon";
console.log(name);

//object(student)
const student = {

fullName:"prity",
age:20,
cgpa:8.2,
ispass:true,

};
console.log(student.age);

student["age"]=student["age"]+1;
console.log(student.age);

const product = {

tittle:"Ball pen",
rating:4,
offer:5,
price:67,
};

console.log(product);


const Prity={

userName:"prity das",
posts:46,
followers:56,
following:4,
Email:"pritydaskuttisuna@gamil.com"

};
console.log(Prity);
//Arithemetic operators
let a=5;
let b=2;

console.log("a=",a,"b=",b);
 console.log("a+b=",a+b);
 console.log("a-b=",a-b);
 console.log("a*b=",a*b);
 console.log("a/b=",a/b);
 console.log("a%b=",a%b);
 console.log("a**b=",a**b);

//unary operator
let c=3;
let d=8;

console.log("c=",c,"&d=",d);
c++;
console.log("c=",c);

console.log("a==b:?",a==b);

//logical operator
let cond1=a>b;
let cond2=a==b;
console.log("cond1 && cond2",cond1 && cond2);
console.log("cond1 || cond2",cond1 || cond2);
console.log("!(a<b)",!(a<b));

//conditinal opeartor

let age=16;
age=67;
if(age>18){
    console.log("you can vote");
}

let mode="dark";
let color;
if(mode==="dark"){
    color="black";
}
else{
    color="white";
}
console.log(color);

let z=9;
let s=12;
if(z%2===0){
    console.log("even");
}else{
    console.log("ODD");
}
//ternery operators
let Age=45;
let result = Age>= 25 ? "adult":"not adult";
console.log(result);

//switch
const fruit='Bananna';
switch(fruit){

case 'Bananna':
    console.log("360 taka");
     document.writeln("Bannaa price is 360 taka");
    break;

case 'mango':
    console.log("679 taka");
    break;

case 'lichi':
    console.log("360 taka");
    break;
 default:
    console.log("no price");
    

}

alert("Hello");//one time popup

let Name=prompt("Enter the name");
console.log(Name);
document.writeln(Name);

//get user to input a number chect it is multipe by 5 or not
let num=prompt("Enter the integer number");
if(num%5===0){
    console.log(num,"Number is multiple of 5");
    document.writeln(num,"number is multiple of 5");
}else{
    console.log(num,"Number is not multiple of 5");
    document.writeln(num,"number is not multipe of 5");
}

/*write a code which can give grades to students according to their scores:
90-100,A
70-89,B
60-69,c
50-59,d
0-49,f */

let score=prompt("Enter the score");
if(score>=90&&score<=100){
    console.log("A");
    document.writeln("A");
}
else if(score>70&&score<=89){
console.log("B");
    document.writeln("B");
    
}
else if(score>60&&score<=69){
console.log("C");
    document.writeln("C");
    
}
else if(score>50&&score<=59){
console.log("D");
    document.writeln("D");
    
}
else{
  console.log("F");
    document.writeln("F");  
}

