const content = document.getElementById("content");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
    const newCard = document.createElement("section");
    newCard.className = "info-card";
    newCard.innerHTML = `<p>New paragraph content goes here. You can replace this with any relevant content about post-war immigration or related topics.</p>`;
    content.appendChild(newCard);
    newCard.scrollIntoView({ behavior: "smooth" });
});
