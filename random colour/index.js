const containerEl=document.querySelector(".container");

for (var i = 0; i < 30; i++) {
  const colourcontainerEl=document.createElement("div");
  colourcontainerEl.classList.add("colour-container");
  containerEl.appendChild(colourcontainerEl);
}

const colourContainerEls=document.querySelectorAll(".colour-container")

generateColours();
function generateColours()
{
colourContainerEls.forEach((colourcontainerEl)=>
{
  const newColorCode=randomcolor();
colourcontainerEl.style.backgroundColor="#"+newColorCode;
});
}






function randomcolor(){
const chars="0123456789abcdef";
const colourCodeLength=6;
let color="";
  for (var i = 0; i <colourCodeLength; i++) {
    const randomNum=Math.floor(Math.random()*16);
  color+=chars.substring(randomNum, randomNum + 1);
}
  return color;

}
