const servers = [
  {
    name: "Death Shadow",
    category: "Gaming",
    description: "Communauté gaming, stream, entraide et ambiance sombre.",
    members: "250+",
    icon: "🌑",
    tags: ["Gaming", "Stream", "Communauté"],
    link: "#"
  },
  {
    name: "Wolfpack Agency",
    category: "Créateurs",
    description: "Agence TikTok pour créateurs, lives et événements communautaires.",
    members: "500+",
    icon: "🐺",
    tags: ["TikTok", "Créateurs", "Live"],
    link: "#"
  },
  {
    name: "Spearenyx Esport",
    category: "Esport",
    description: "Structure esport Rocket League et Call of Duty.",
    members: "150+",
    icon: "⚔️",
    tags: ["Esport", "Rocket League", "COD"],
    link: "#"
  },
  {
    name: "Core Community",
    category: "Communauté",
    description: "Serveur central pour discuter, découvrir et partager.",
    members: "100+",
    icon: "💬",
    tags: ["Discussion", "Entraide", "Social"],
    link: "#"
  },
  {
    name: "Nexus Center",
    category: "Communauté",
    description: "Regroupement de communautés Discord connues ou non.",
    members: "300+",
    icon: "🌐",
    tags: ["Discord", "Portail", "Communauté"],
    link: "#"
  },
  {
    name: "AELF Esport",
    category: "Esport",
    description: "Team esport orientée scrims, compétitions et progression.",
    members: "120+",
    icon: "🏆",
    tags: ["Esport", "Scrim", "Compétition"],
    link: "#"
  }
];

const grid = document.getElementById("serverGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll("[data-filter]");
let currentFilter = "all";

function renderServers() {
  const search = searchInput.value.toLowerCase();
  grid.innerHTML = "";

  const filtered = servers.filter(server => {
    const matchFilter = currentFilter === "all" || server.category === currentFilter;
    const matchSearch =
      server.name.toLowerCase().includes(search) ||
      server.category.toLowerCase().includes(search) ||
      server.description.toLowerCase().includes(search) ||
      server.tags.join(" ").toLowerCase().includes(search);

    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "<p>Aucun serveur trouvé.</p>";
    return;
  }

  filtered.forEach(server => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="icon">${server.icon}</div>
      <h3>${server.name}</h3>
      <p>${server.description}</p>
      <div class="tags">
        ${server.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
      <div class="card-footer">
        <span class="members">${server.members} membres</span>
        <a class="join" href="${server.link}">Rejoindre</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

searchInput.addEventListener("input", renderServers);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderServers();
  });
});

renderServers();
