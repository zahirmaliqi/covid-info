function animateForm(){
const arrows = document.querySelectorAll(".fa-arrow-down");


arrows.forEach(arrow => {
	arrow.addEventListener("click",() => {
		//we will get everything that we have in the input
		//help us for validation 
		//with "previouseElementSibling" help 
		//in practice we gone get the input 
		const input = arrow.previousElementSibling;
		//we gone get the arrow parent
		//in practice we gone get the div class of that field 
		const parent = arrow.parentElement;
		// after we have a const parent
		// we wanna to get the next sibling of that parent 
		//in practice we gone get the email  
		const nextForm= parent.nextElementSibling;

		if(input.type === "text" && validateUser(input)){
			nextSlide(parent,nextForm);
		}else if (input.type === "email" && validateEmail(input)){
			nextSlide(parent,nextForm);
		}else if(input.type === "password" && validateUser(input)){
			newPage();
		} else {
			parent.style.animation = "shake 0.2s ease";
		}

		parent.addEventListener('animationend', function(){
			parent.style.animation="";
		})
	});

 });

}

function validateUser(user){
	if(user.value.length == 0) {
		console.log("zero character");
		console.log("zero character");
		error();
	} else if(user.value.length < 6 ){
		console.log("more than 6 character");
		error();
	}else{
		ok();
		//we need will return because we will check later for it 
		return true;
	}
}

function validateEmail(email){
	const testEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(testEmail.test(email.value)){
		ok();
		return true;
	}else{
		error();
	}
}


function nextSlide(parent, nextForm){
	parent.classList.add("innactive");
	parent.classList.remove("active");	
	nextForm.classList.add("active");
}

const colors = ["red", "#8B0000", "rgb(178,34,34)", "#DC143C"];
const colors1 = ["green", "#32CD32", "rgb(0,100,0)", "#228B22"];

function getRandomNumber(){ 
 //Math.random always give us a number between 0 and 1 
 //(but not 0 and 1 , <1  || >0 )
	return Math.floor( Math.random() * colors.length );
}


function error(){
	const randomNumber= getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
}

function ok(){
	const randomNumber= getRandomNumber();
    document.body.style.backgroundColor=colors1[randomNumber];
}


function newPage(){
location.href = 'home.html';
}

animateForm();