// MENU ATIVO
window.addEventListener("load", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".menu li a");
    links.forEach(link => {
        const href = link.getAttribute("href");
        if(href === currentPage) {
            link.parentElement.classList.add("active");
        }
    });
});