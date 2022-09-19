/*
requirement{
  1. jub bhi hover kare to uske left wale stars bhi glow krte rahe.
  2. jub click kare to uske previous ka sare stars glow krte rha.
}
*/
let star = document.querySelector('.star');
console.log(star);

let starList = document.querySelectorAll('.starList');
console.log(starList);
// starList[0].addEventListener('click',function(){
  //   console.log('im clicked');
  // })
  // star.addEventListener('click',function(){
  //   console.log('im clicked');
  // })
  function leftHover(n){
    for(let i=0;i<n;i++){
      starList[i].classList.add('hover');
    }
  }
  function hoverOut(n){
    for(let i=0;i<n;i++){
      starList[i].classList.remove("hover");
    }
  }
  function fillColor(n){
    for(let i=0;i<n;i++){
      starList[i].classList.add('click');
    }
  }
  

for (let i = 0; i< 5; i++) {
  starList[i].addEventListener('mouseover', (this)=>{
    leftHover(i+1);
  });
  starList[i].addEventListener('mouseout', (this)=>{
    hoverOut(i+1);
  });
  starList[i].addEventListener('click', (this)=>{
    fillColor(i+1);
  });
}
// add classes dynamically with a check