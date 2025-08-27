
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
document.writeln("</br>");

var array2d=[[1,'A'],[2,'B'],[3,'C']];

for(var i=0;i<3;i++){

for(var j=0;j<2;j++){
    document.writeln(array2d[i][j]);
}
document.writeln("</br>");
}




document.querySelector(".my-div a").innerHTML="newcontact";

