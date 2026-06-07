function addTask(){

let title =
document.getElementById("title").value;

let desc =
document.getElementById("description").value;

let taskDiv =
document.getElementById("tasks");

taskDiv.innerHTML += `
<div>
<h3>${title}</h3>
<p>${desc}</p>
</div>
`;
}
