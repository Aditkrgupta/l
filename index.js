var op = document.querySelector(".op");
var ope = document.querySelector(".open");

op.addEventListener("click", () => {
   ope.innerHTML=` "Every moment I spend with you, I fall a little deeper. Thank you for being the most incredible part of my life and for filling my world with so much light and joy.
   With every sunrise, I feel my love for you grow stronger, brighter, and more unbreakable. You're the reason my world is so full of color and life."

    ` ;
   // open.classList.add("hidden"); 
});
var no=document.querySelector(".no")
function moveButton() {
   const randomX = Math.floor(Math.random() * window.innerWidth) - (no.offsetWidth / 2);
   const randomY = Math.floor(Math.random() * window.innerHeight) - (no.offsetHeight / 2);

   no.style.position = "absolute";
   // Apply the random position to the "No" button
   no.style.top = `${randomY}px`;
   no.style.left = `${randomX}px`;
}

no.addEventListener("mouseover",()=>{
moveButton();
})

var yes=document.querySelector(".yes")
yes.addEventListener("click",()=>{
   window.open('love.html'); 
})