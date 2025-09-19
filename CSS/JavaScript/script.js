let button1 = document.getElementById("about-btn") 
let button2 = document.getElementById("contact-btn") 
let button3 = document.getElementById("skills-btn") 
let paragraph1 = document.getElementById("aboutme") 
let paragraph2 = document.getElementById("mycontact") 
let paragraph3 = document.getElementById("myskills") 

paragraph1.style.display = "block"
button1.classList.add("active")

button1.onclick = () => {
    paragraph1.style.display = "block"
    paragraph2.style.display = "none"
    paragraph3.style.display = "none"

    button1.classList.add("active")
    button2.classList.remove("active")
    button3.classList.remove("active")
}

button2.onclick = () => {
    paragraph1.style.display = "none"
    paragraph2.style.display = "block"
    paragraph3.style.display = "none"

    button1.classList.remove("active")
    button2.classList.add("active")
    button3.classList.remove("active")
}

button3.onclick = () => {
    paragraph1.style.display = "none"
    paragraph2.style.display = "none"
    paragraph3.style.display = "block"

    button1.classList.remove("active")
    button2.classList.remove("active")
    button3.classList.add("active")
}


