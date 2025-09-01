//function addStyle() {
 //   var paraId = document.querySelector('#paraId');
 //   paraId.style.color = "red";
  //  paraId.style.fontSize = "3rem";
  //  paraId.style.fontWeight = "bold";
  //  paraId.style.fontStyle = "italic";
//}
//function removeStyel(){

//paraId.style=" ";

//}

// function addStyle(){

// paraId.classList.add("para-styel");


// }


// function removeStyel(){

//     paraId.classList=" ";
// }



// function next(){


// location.href="templates/next.html";

// }

// function Back(){

//   window.history.back();

// }


// var button=document.querySelector('button');

// button.addEventListener("click",addStyel);

// function addStyel(){

// var paraId=document.querySelector('#paraId');
// paraId.classList.add("para-styel");


// }

// var removeButton = document.querySelector('#removeBtn');
// removeButton.addEventListener("click", removeStyel);

// function removeStyel() {
//     var paraId = document.querySelector('#paraId');
//     paraId.classList.remove("para-styel");
// }



// var button=document.querySelector('#addButton');

// button.addEventListener("click",function(a,b){
    
//     var paraId=document.querySelector('#ParaID');
//     paraId.innerHTML=(a+b)}(1,3));
const names = ['ASs', 'fgh', 'dfghk'];

// for...of loop
for (let a of names) {
    document.writeln(a + ',');
}

let person = {
    id: 1,
    name: 'prity',
    profession: 'student'
};

// for...in loop
for (let x in person) {
    document.writeln("<br/>" + x + ": " + person[x]);
}

// forEach loop
document.writeln("<br/>For each loop use:<br/>");
var numbers = [1, 3, 6, 7, 2];
numbers.forEach(function(x) {
    document.writeln(x + "<br/>");
});

// arrow function with return
const display = () => {
    return "<br/>Hello with return arrow Function.";
}
document.writeln(display());

// arrow function for add and subtract
const add = (a, b) => {
    document.writeln("Add: " + (a + b) + ", Sub: " + (a - b));
};
add(1, 2);

// arrow + map + filter
let Students = [
    { name: "Rina", grade: 85 },
    { name: "Tina", grade: 45 },
    { name: "Mina", grade: 75 }
];

function showStudentNames() {
    let passedStudents = Students.filter(student => student.grade >= 50);
    return passedStudents.map(student => student.name);
}

document.writeln("<br/>Passed Students: " + showStudentNames().join(", "));