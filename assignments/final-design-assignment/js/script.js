const hamburger = document.querySelector('.hamburger');
const nav_list = document.querySelector('.nav-row');
const nav = document.querySelector('.nav');

const responsiveNav = () =>{
    hamburger.addEventListener('click', ()=>{
        if (nav_list.style.display === "block") {
            nav_list.style.display = "none";
            nav.style.padding = "0 0 50px 0";
              } else {
                nav_list.style.display = "block";
                nav.style.padding = "0 0 550px 0";
              }
    })

}
