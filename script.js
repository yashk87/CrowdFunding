// // let i = 0;
// // let id=setInterval(() => {
// //     document.getElementById("head").innerHTML = ++i;
// // },1000)

// // const elem=document.getElementById("head");
// // elem.onclick = function(){
// // console.log("clicked");
// // }
// // 2:38:00
// // r = document.getElementById("myDIV");
// // var btns = header.getElementsByClassName("btn");
// // for (var i = 0; i < btns.length; i++) {
// //   btns[i].addEventListener("click", function() {
// //   var current = document.getElementsByClassName("active");
// //   current[0].className = current[0].className.replace(" active", "");
// //   this.className += " active";
// //   });
// // }
// window.location.pathname;
// inks =document.querySelectorAll(".links li");
// links.forEach(li =>{
//     li.addEventListener("click",()=>{
//         resetLinks();
//         li.classList.add("active");
//     })
// })

// function resetLinks(){
//     links.forEach(li=>{
//         li.classList.remove("active");
//     })
// }
var slide=document.getElementsByClassName("hamburger");
var mobview=document.getElementsByClassName("mobview");
slide[0].addEventListener("click",()=>{
mobview[0].classList.toggle("slide");
})