var b2=document.querySelector(".b2")
var b1=document.querySelector(".b1")
b1.addEventListener("click",()=>{
    b2.style.width="25vw"
        b2.style.margin="6px"
      b2.style.backgroundColor="rgb(233 175 243)"
    b2.innerHTML=`
"Distance means so little when you mean so much."

In our long-distance relationship, we've built something truly special. For over a year, we have consistently respected and supported each other, regardless of the miles between us. Our loyalty is unwavering, and we celebrate each other's successes while providing comfort during challenges. This foundation of trust and mutual respect has allowed our love to flourish, proving that emotional intimacy can thrive across distances. We are always there for each other, creating a bond that transcends physical barriers, making our connection stronger every day."`
})
var b3=document.querySelector(".b3")
var b4=document.querySelector(".b4")
b3.addEventListener("click",()=>{

        b4.style.margin="6px"
    
    b4.innerHTML=`<video height="350vh" width="300vw" src="project 2.mp4" autoplay></video>`
})
var b6=document.querySelector(".b6")
var b5=document.querySelector(".b5")
b5.addEventListener("click",()=>{
    b6.style.width="25vw"
        b6.style.margin="6px"
      b6.style.backgroundColor="rgb(233 175 243)"
    b6.innerHTML=`"In every beat, in every breath, my heart is yours, no matter the miles between us. You are the sunrise in my morning, the quiet peace in my night. The world fades when I think of you, and all that’s left is the beauty of what we share – respect as steady as the tides, loyalty as true as the stars. For every tear you’ve wiped away, every laugh we’ve shared across these miles, my love has only grown. You’re not just a part of my life; you’re the soul of it, lighting up every moment. With you, love is easy, and distance only makes us stronger. I love you, endlessly, in ways words can barely hold."
   `
})
const box = document.getElementById("mysteryBox");
const lid = document.getElementById("lid");
const surprise = document.getElementById("surprise");
var h=document.querySelector(".box-body")

box.addEventListener("click", () => {
    
    h.innerHTML=` `;
    lid.classList.add("opened-lid");
    surprise.classList.add("show");
    surprise.innerHTML+=`<img height="190vh" src="gift.jpg" alt="">`

});
var hum=document.querySelector(".hum")
var tum=document.querySelector(".tum")
var why =document.querySelector(".why")
why.addEventListener("click", () => {
    why.innerHTML=`<h3>Cz we r there for each other</h3>`
  hum.innerHTML=`<img width="130vw"src="project7.jpg" alt="">`
   

});
var u=document.querySelector(".u")
var i=document.querySelector(".i")
var we=document.querySelector(".we")
var a2=document.querySelector(".a2")
var a4=document.querySelector(".a4")
var a6=document.querySelector(".a6")
var e=document.querySelector(".e")
u.addEventListener("click",()=>{
  a2.innerHTML=`<div><div><h3>What other thinks</h3></div>
  <div><img width="150vw" height="200vh"src="distance.jpeg" alt=""></div>
  </div>
 <div><div><h3>What we think</h3></div>
  <div><img  width="150vw" height="200vh" src="close.jpg" alt=""></div>
  </div>`
})

i.addEventListener("click",()=>{
  
  a4.innerHTML=`<div><div><h3>In my eyes👀</h3></div>
  <div><img height="200vh"src="project8.jpg" alt="">
  <audio src="Zara Kabhi Meri Nazar Se Khud -Downringtone.com.mp3" autoplay></audio></div>
  </div>

  </div>`
})
we.addEventListener("click",()=>{
  a6.style.backgroundColor="#6b6bc1"
  a6.style.width="23vw"
  a6.style.margin="5px"
  a6.innerHTML=`<div><div><h3>Love i ur language</h3></div>
  <div>
You are the ATP to my cells, fueling my energy and joy every day. Our connection is as unbreakable as the strongest covalent bond, and my heart beats in rhythm with the memory of you, releasing waves of happiness even from afar. Like DNA carrying essential code, my love for you is embedded in every part of me. Across any distance, my love for you is as true as life itself.</div>
  </div>
 <div><div><h3>Love in my langugae</h3></div>
  <div>#include <iostream>
using namespace std;

int main() {
    cout << "I love you" << endl;
    return 0;
}
</div>
  </div>`
})
var yt=document.querySelector(".yt")
e.addEventListener("click",()=>{
  yt.innerHTML=`<img height="250vh"src="project 3.jpg"alt="">`
})
var la=document.querySelector(".la")
var re=document.querySelector(".re")
var ree=document.querySelector(".ree")
var reee=document.querySelector(".reee")
var te=document.querySelector(".te")
var tee=document.querySelector(".tee")
var teee=document.querySelector(".teee")
var latst2=document.querySelector(".last2")
la.addEventListener("click",()=>{
  latst2.style.backgroundColor="pink"
  re.innerHTML=`<h3>What u have</h3>`
  ree.innerHTML=`<h3>What i have</h3>`
  reee.innerHTML=`<h3>What we have</h3>`
  te.innerHTML=`<img height="250vh"src="bottle.jpg"alt="">`
  tee.innerHTML=`<img height="250vh"src="earing.jpg"alt="">`
  teee.innerHTML=`<img height="250vh"src="project5.jpg"alt="">`
})