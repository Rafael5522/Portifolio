function scrollToSection(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
})

}



// typing

const text = "Rafael Lima"

let i = 0

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i)

i++

setTimeout(typing,120)

}

}

typing()



// cursor

const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px"

cursor.style.top = e.clientY + "px"

})



// counter

const counters = document.querySelectorAll(".counter")

counters.forEach(counter=>{

const update = ()=>{

const target = +counter.getAttribute("data-target")

const count = +counter.innerText

const inc = target / 200

if(count < target){

counter.innerText = Math.ceil(count + inc)

setTimeout(update,10)

}else{

counter.innerText = target

}

}

update()

})



// particles

const canvas = document.getElementById("bg")

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

ctx.fillStyle="#7c3aed"

particles.forEach(p=>{

ctx.beginPath()

ctx.arc(p.x,p.y,p.r,0,Math.PI*2)

ctx.fill()

p.y += 0.4

if(p.y>canvas.height){

p.y=0

}

})

}

setInterval(draw,30)
