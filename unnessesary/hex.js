const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){

let hexcolor="#";
//to add six vlaues we iteriate in a loop by adding in the color
for(let i =0; i<6;i++)
{
   //in every iteration 
   hexcolor += hex[getRandomeNumber()];
}

color.textContent=hexcolor;
document.body.style.backgroundColor = hexcolor;

});


function getRandomeNumber(){
	return Math.floor(Math.random()* hex.length);
};


