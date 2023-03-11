let burgerIcon = document.getElementById("burger-icon")
let line1 = document.getElementById("line1")
let line2 = document.getElementById("line2")
let line3 = document.getElementById("line3")
let burgerMenu = document.getElementById("burgermenu")

burgerIcon.addEventListener("click",function(){
 line1.classList.toggle('line1')
 line2.classList.toggle('line2')
 line3.classList.toggle('line3')
 burgerIcon.classList.toggle('burgericon-toggle')
 burgerMenu.classList.toggle('burgermenu-toggle')
})









