const elements = document.querySelectorAll("section")

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = 1
entry.target.style.transform = "translateY(0)"

}

})

},{threshold:0.2})

elements.forEach(el=>{

el.style.opacity = 0
el.style.transform = "translateY(60px)"
el.style.transition = "all 0.8s"

observer.observe(el)

})
