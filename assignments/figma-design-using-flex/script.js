const hamburger = document.querySelector('.hamburger');
const nav_list = document.querySelector('.navbar__lists');

const responsiveNav = () =>{
    hamburger.addEventListener('click', ()=>{
        if (nav_list.style.display === "flex") {
            nav_list.style.display = "none";

              } else {
                nav_list.style.display = "flex";

              }
    })

}
