var a =10;
var a = 12;
 document.writeln(a);

 let b = 100;
// document. writeln(a);
let c="Meawrer";
let v=23.566;

document.writeln(typeof(b));
document.writeln(typeof(c));
document.writeln(typeof(v));

//typecasting

//Number to String
let s=b.toString();
document.writeln(s);

//string to Number 
let y="103.07";
//let z="34.78;"
let x=parseInt(y);
document.writeln("</br>"+typeof(x));
y=parseFloat(x);
document.writeln("</br>"+typeof(y));

//document.writeln("</br>"+Number("ASDDDF"));
//document.writeln("</br>"+Number("124579.99"));
//document.writeln("</br>"+z.toFixed(3));
//document.writeln("</br>"+z.toPrecision(5));


//uper input

//let studFirstName = prompt("Enter your first name");
//let studLastName = prompt("Enter your last name");

//document.writeln("</br> <p style='color:red'>"+ studFirstName + " " + studLastName);

let N1 = prompt("Enter number");
let N2 = prompt("Enter number");

let num1=parseFloat(N1);
let num2=parseFloat(N2);

let sum=num1+num2;

let sub=num1-num2;

let mul=num1*num2;

let div=num1/num2;

document.writeln("</br> <p style='color:red'>"+ num1 + " + " + num2+" = "+ sum+"</p>");


document.writeln("</br> <p style='color:red'>"+ num1 + " - " + num2+" = "+ sub+"</p>");

document.writeln("</br> <p style='color:red'>"+ num1 + " * " + num2+" = "+ mul+"</p>");

document.writeln("</br> <p style='color:red'>"+ num1 + " / " + num2+" = "+ div+"</p>");










