var nname = localStorage.getItem("name");
var sscore = localStorage.getItem("score");
var ttime = localStorage.getItem("timesleft");
var list = document.getElementById("list");

var totalScore = sscore + ttime; 
console.log(totalScore);

var nameList = document.createElement("td");
var scoreList = document.createElement("td");
nameList.textContent = nname; 
scoreList.textContent = totalScore;

list.appendChild(nameList);
list.appendChild(scoreList);



console.log(nname);


