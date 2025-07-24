//Ottiene il riferimento al pulsante "Torna su"
let mybutton = document.getElementById("scrollToTopBtn");
// Quando l'utente scorre la pagina, esegue la funzione scrollFunction
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
// Se lo scroll verticale è maggiore di 20px (sia per body che per documentElement), mostra il pulsante
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
// Altrimenti, nasconde il pulsante
mybutton.style.display = "none";
}
}

// Quando l'utente clicca sul pulsante, scrolla la pagina in alto con un effetto fluido
mybutton.addEventListener("click", function() {
window.scrollTo({
top: 0,
behavior: "smooth" // Scorrimento fluido
});
});