const fris = document.getElementById("btn");
const fri = document.querySelector(".fri");
const sec = document.querySelector(".sec");



fris.addEventListener("click", function() {
    fri.style.display = "none";
    sec.remove("sec");

    const newElement = document.createElement("a");
    newElement.textContent = "Go to Home";
    newElement.getAttribute("href");
    newElement.setAttribute("href", "https://github.com/bilal-tareq/me");
    document.body.appendChild(newElement);
    
});