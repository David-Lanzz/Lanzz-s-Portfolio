let aboutpage = document.getElementById("about")
let aboutbtn = document.getElementById("aboutbtn")
let homepage = document.getElementById("homepage")
aboutbtn.addEventListener("click", function() {
    homepage.style.height = "0"
    homepage.style.width = "0"
    homepage.style.transition = "2s"
})