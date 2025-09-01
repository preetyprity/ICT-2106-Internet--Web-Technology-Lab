

// Student variables without object

/*
var name = "Prity";
var roll = 133647;
var year = "1st";
var courses = ["Operating System", "Data Structure", "Algorithm"];

document.writeln(name + " " + year + " " + roll + " " + courses);
*/


// Student variables with object creation
var student1 = {
    name: "Prity",
    roll: 133647,
    year: "1st",
    courses: ["Operating System", "Data Structure", "Algorithm"]
};

document.writeln("<br>" + student1.name + " " + student1.year + " " + student1.roll + " " + student1.courses);


// Using constructor function
function Student(name, roll, year, courses) {
    this.name = name;
    this.roll = roll;
    this.year = year;
    this.courses = courses;

    this.display = function() {
        document.writeln("<br>" + this.name + " " + this.year + " " + this.roll + " " + this.courses);
    }
}


var student2 = new Student("ASD", 123, "2nd", ["Operating System", "Data Structure", "Algorithm"]);


student2.display();


document.writeln("<br>" + student2.courses[1]);

//math function

document.writeln("</br>")
//getelementbyID
var text=document.getElementById("header1").innerText;
document.writeln(text);

var text=document.getElementById("header1");
document.writeln(text);

text.innerHTML="HEllo";



document.writeln("</br>")
//getelementbyID
var text=document.getElementById("header2").innerText;
document.writeln(text);
document.writeln("</br>")

var text=document.getElementById("header2");
document.writeln(text);
text.innerText = "Hi, I am prity";     
text.style.color = "blue";  



var text1=document.getElementsByTagName("h3");
document.writeln(text1[0].innerText);

document.writeln("</br>")

var student2 = {
    name: "Prity",
    roll: 101,
    year: "1st",
    courses: ["OPP", "DSA", "Algo"]
};

var student3 = {
    name: "Tinni",
    roll: 102,
    year: "2nd",
    courses: ["BS", "Java", "Math"]
};

var student4 = {
    name: "priota",
    roll: 103,
    year: "3rd",
    courses: ["ST", "DS", "IWT"]
};


var students = [student2, student3, student4];


for (var i = 0; i < students.length; i++) {
    var s = students[i];
    document.writeln('<br><span style="color:blue;">Name: ' + s.name);
    document.writeln("<br>Roll: " + s.roll);
    document.writeln("<br>Year: " + s.year);
    document.writeln("<br>Courses: " + s.courses.join(", "));
    document.writeln("<hr>");
}



for(var i=0;i<3;i++){



var text2=document.getElementsByTagName("h4");
document.writeln('<span style="color:red;">'+text2[i].innerText+'</span><br>');

document.writeln("</br>");

}













