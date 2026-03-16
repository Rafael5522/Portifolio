// Scroll

function scrollToSection(id){

document.getElementById(id).scrollIntoView({
behavior:'smooth'
})

}


// animação reveal

const reveals = document.querySelectorAll('.reveal')

window.addEventListener('scroll',()=>{

reveals.forEach(el=>{

const windowHeight = window.innerHeight
const top = el.getBoundingClientRect().top

if(top < windowHeight - 100){

el.style.opacity = 1
el.style.transform = "translateY(0)"

}

})

})

reveals.forEach(el=>{

el.style.opacity = 0
el.style.transform = "translateY(80px)"
el.style.transition = "all 1s"

})



// partículas

const canvas = document.getElementById('particles')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i=0;i<100;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
d:Math.random()*1

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="#00fff7"

particles.forEach(p=>{

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fill()

})

update()

}

function update(){

particles.forEach(p=>{

p.y+=p.d

if(p.y>canvas.height){

p.y=0

}

})

}

setInterval(draw,33)
