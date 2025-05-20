const playerCardsContainer = document.getElementById("playerCards");

players.forEach((player, index) => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  const card = document.createElement("div");
  card.className = "card h-100 fade-in";

  const img = document.createElement("img");
  img.src = player.photo;
  img.className = "card-img-top";
  img.alt = player.fullName();

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = player.fullName();

  const pos = document.createElement("p");
  pos.className = "card-text";
  pos.innerHTML = `<strong>${player.position}</strong> | ${player.points} pts`;

  const draft = document.createElement("p");
  draft.className = "card-text";
  draft.innerHTML = `Drafted: <em>${player.draftYear}</em>`;

  const btn = document.createElement("button");
  btn.className = "btn btn-outline-light btn-sm";
  btn.textContent = "More Info";
  btn.setAttribute("data-bs-toggle", "modal");
  btn.setAttribute("data-bs-target", "#playerModal");
  btn.onclick = () => {
    document.getElementById("playerModalLabel").textContent = player.fullName();
    document.getElementById("modalBody").innerHTML = `
      <p><strong>Position:</strong> ${player.position}</p>
      <p><strong>Points:</strong> ${player.points}</p>
      <p><strong>Draft Year:</strong> ${player.draftYear}</p>
      <p><strong>Fun Fact:</strong> ${player.fact}</p>
    `;
  };

  // Conditional styling: highlight top 3
  if (index < 25) {
    card.style.border = "2px solid silver";
    card.style.boxShadow = "0 0 10px silver";
  }

  cardBody.append(title, pos, draft, btn);
  card.append(img, cardBody);
  col.append(card);
  playerCardsContainer.append(col);
});
// Show button when user scrolls down 400px
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  btn.style.display = (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) ? "block" : "none";
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

