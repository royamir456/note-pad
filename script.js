const noteContainer = document.querySelector(".notes-container");

const button = document.querySelector("#button");

let notes = document.querySelectorAll(".input-box");



button.addEventListener('click', function(){
 let inputBox = document.createElement("p");

 let image = document.createElement("img");

 inputBox.className = "input-box";
 
 inputBox.setAttribute("contenteditable", "true");

 image.src = "images/bin.png";

 noteContainer.appendChild(inputBox).appendChild(image);
});


noteContainer.addEventListener('click', function(e){
  if(e.target.tagName === "IMG"){
  	e.target.parentElement.remove();
  	saveData();
  }
  else if(e.target.tagName === "p"){
  	notes = document.querySelectorAll(".input-box");
  	notes.forEach(nt => {
  		nt.onkeyup = function(){
  			saveData();
  		}; 
  	});
  }
});


document.addEventListener('keydown', event =>{
	if(event.key === "Enter"){
		document.execCommand("insertLineBreak");
		event.preventDefault();
	}
});


function saveData(){
	localStorage.setItem(notes, noteContainer.innerHTML);
}


function showStoredData(){
	noteContainer.innerHTML = localStorage.getItem(notes);
}

showStoredData();