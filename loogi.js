
const mobile_navbar = document.querySelector(".hamburgercount");
const nav_header = document.querySelector(".attachments");
 
const togglenavbar = () => {
     nav_header.classList.toggle("active");
}

mobile_navbar.addEventListener("click" , ()=> togglenavbar());

