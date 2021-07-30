nameOfTheStudentArray=[];
var displayStudentArray=[];
for(var i=1;i<=4;i++){
    var name_of_the_student=document.getElementById("name_of_the_student_"+i).value;
    console.log(name_of_the_student);
    nameOfTheStudentArray.push(name_of_the_student);
}
var lengthOfNameOfTheStudentArray=nameOfTheStudentArray.length;
console.log(lengthOfNameOfTheStudentArray);


for(var a=0;a<lengthOfNameOfTheStudentArray;a++){
    displayStudentArray.push("<h4> NAME-"+nameOfTheStudentArray[a]
    +"</h4>");
    console.log(displayStudentArray);
    document.getElementById("displaynamewithcomma").innerHTML=displayStudentArray;
}
var removecomma=displayStudentArray.join("");
console.log(removecomma);
document.getElementById("displaynamewithoutcommas").innerHTML=removecomma;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";










function sorting(){
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);
}
var displaystudentarraysorting=[];
var lengthOfNameOfTheStudentArray=nameOfTheStudentArray.length;
console.log(lengthOfNameOfTheStudentArray);
for(var a=0;a<lengthOfNameOfTheStudentArray;a++){
    displayStudentArray.push("<h4> NAME-"+nameOfTheStudentArray[a]
    +"</h4>");
    console.log(displaystudentarraysorting);
    
}
var removecomma=displaystudentarraysorting.join("");
console.log(removecomma);
document.getElementById("displaynamewithoutcommas").innerHTML=removecomma;