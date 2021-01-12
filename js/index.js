// Your code goes here
const bigWords = document.querySelectorAll("a")

Array.from(document.links).forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
    });
});



bigWords.forEach(bigWords => addEventListener("mouseover", (event) => {
    event.target.style.transition = "0.75s"
    event.target.style.transform = "scale(1.2)"
}));