// IMPORTAR MENU

fetch("menu.html")
    .then(respomse => response.text())
    .then(data => {
        document.getElementById("menu-container").innerHTML = data;

        // CARREGAR JS DO MENU
        const script =
document.createElement("script");
        script.src = "js/menu.js";
        document.body.appendChild(script);
    });

// ANIMAÇÃO DOS CARDS
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((caed, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "0.5s";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});