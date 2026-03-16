// scroll

function scrollToSection(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
})

}



// typing animation

const text = "Rafael Lima"
let index = 0

function typing(){

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index)

index++

setTimeout(typing,120)

}

}

typing()



// counters

const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute("data-target")

const count = +counter.innerText

const inc = target / 200

if(count < target){

counter.innerText = Math.ceil(count + inc)

setTimeout(update,10)

}

else{

counter.innerText = target

}

}

update()

})



// scroll reveal

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = 1
entry.target.style.transform = "translateY(0)"

}

})

},{threshold:0.2})

document.querySelectorAll(".section").forEach(el=>{

el.style.opacity=0
el.style.transform="translateY(60px)"
el.style.transition="all 1s"

observer.observe(el)

})



// background particles

const canvas = document.getElementById("background")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i=0;i<150;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="#ff7a18"

particles.forEach(p=>{

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fill()

p.y += 0.5

if(p.y>canvas.height){

p.y=0

}

})

}

setInterval(draw,30)
