let button1 = document.getElementById("about-btn") 
let button2 = document.getElementById("contact-btn") 
let button3 = document.getElementById("skills-btn") 
let paragraph1 = document.getElementById("aboutme") 
let paragraph2 = document.getElementById("mycontact") 
let paragraph3 = document.getElementById("myskills") 

button1.onclick = () => {
    paragraph1.style.display = "block"
    paragraph2.style.display = "none"
    paragraph3.style.display = "none"
}

button2.onclick = () => {
    paragraph1.style.display = "none"
    paragraph2.style.display = "block"
    paragraph3.style.display = "none"
}

button3.onclick = () => {
    paragraph1.style.display = "none"
    paragraph2.style.display = "none"
    paragraph3.style.display = "block"
}


