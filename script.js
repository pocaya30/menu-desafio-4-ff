const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdowns =>{
    const select = dropdowns.querySelector(".select");
    const caret = dropdowns.querySelector(".caret");
    const menu = dropdowns.querySelector(".menu");
    const options = dropdowns.querySelectorAll(".menu li");
    const selected = dropdowns.querySelector(".selected");

    select.addEventListener("click", ()=> {
        select.classList.toggle("select-clicked");
        caret.classList.toggle("caret-rotate");
        menu.classList.toggle("menu-open");

    })

    options.forEach(option =>{
        option.addEventListener("click", () => {
            selected.innerText = option.innerText;
            select.classList.remove("select-clicked");
            caret.classList.remove("caret-rotate");
            menu.classList.remove("menu-open");

            options.forEach(option =>{
                option.classList.remove("active");
            });
                option.classList.add("active");
            
        });
    });
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))