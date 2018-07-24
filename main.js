//console.log("hello from main.js");
//Get input element
let filterInput = document.querySelector("#filter");
//add event listener
filterInput.addEventListener("keyup",filterNames);
function filterNames(){
	//Test function is called
	//console.log(1);
	//Get value of input
	let filterValue = filterInput.value.toUpperCase();
	//console.log(filterValue);
	//Get ul list
	//let ul = document.querySelector("#names");
	//console.log(ul);
	//Get all list items
	let li = document.querySelectorAll("li.sw-link");
	//console.log(li)
	//loop through list items
	for(let i=0;i<li.length;i++){
		//Get link
		let a= li[i].querySelector("a")
     // console.log(a);
     //If match
     if(a.innerHTML.toUpperCase().includes(filterValue)){
     li[i].style.display = "block";	
      }else{
      	li[i].style.display = "none"; 
      }
    }
}


