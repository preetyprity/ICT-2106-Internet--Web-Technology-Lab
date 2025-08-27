//let N1 =prompt("Enter the sentence:") ;

//let str=parseFloat(N1);

let str="Hello!How are you?";
let count=0;

for (let i = 0; i <str.length; i++) {
  

let a=str[i];

if (a=='a'||a=='e'||a=='i'||a=='o'||a=='u') {
  count++;
}

}
console.log("There are ",count," vowels in the sentence");
document.writeln( "</br> <p style='color:red'>" ,"There are ",count," vowels in the sentence");


