


//var a=Number(prompt("Enter The Number:"));

//var b=Number(prompt("Enter The Number:"));

//var c=Number(prompt("Enter The Number:"));








//if(a>10)
    document.writeln("A is greater than 10");
//else
 //document.writeln("A is less than or equal 10");


//(a>10)?
//((a==12)? document.writeln("A is equal to 12"): document.writeln("A is not equal to 12"))
//: document.writeln("A is less than or equal 10");


//document.writeln("</br><span style='color:green;'>"+a*a+square(a,b,c)+"</span>");


//document.writeln("</br><span style='color:green;'>"+a*a+squa(a,b)+"</span>");
//document.writeln("</br><span style='color:green;'>"+a*a+triple(a,b,c)+"</span>");


//function
//function square(a){

//return a*a;


//}

//function squa(a,b){

//return a*a;


//}
//function triple(a,b,c){

//return a*b*c;


//}












//document.writeln("</br><span style='color:green;'>"+a*a+square(a,b,c)+"</span>");


//document.writeln("</br><span style='color:green;'>"+a*a+squa(a,b)+"</span>");
//document.writeln("</br><span style='color:green;'>"+a*a+triple(a,b,c)+"</span>");


//function
//function square(a){

//return a*a;


//}

//function squa(a,b){

//return a*a;


//}



//imediately invokeable function exapersions
//(function triple(a){

//document.writeln("</br><span style='color:green;'>"+a*a+squa(a,b)+"</span>");


//})(a);


//array


//topcis:shift,unshift,push,pop,splice,slice,concat,reverse

let names =['aaa','Bbb','cCC','Ddd'];
document.writeln("</br><span style='color:red;'>"+names+"</span>");


let firstName=new Array();
firstName[1]="Eee";
document.writeln("</br><span style='color:green;'>"+firstName+"</span>");



var firstArray=new Array(5);
var secondArray=new Array(5);

firstArray[0]="Asd";
firstArray[1]="Adesss";

firstArray[2]=12;
secondArray[0]="prt";
secondArray[2]="sdedwe";

document.writeln("</br><span style='color:red;'>"+names+"</span>");



document.writeln(firstArray.concat(secondArray));
document.writeln(firstArray.length);


//sorting numbers is not possible here
var numbers=[34,133,665,1465];
numbers.sort(function(a,b){

return a-b;


})
document.writeln(numbers);
var array2d=[[1,'A'],[2,'B'],[3,'C']];

for(var i=0;i<3;i++){

for(var j=0;j<3;j++){
    document.writeln(array2d[i][j]);
}



}

