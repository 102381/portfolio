const techIcons = {
  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  PHP: "devicon-php-plain colored",
  Python: "devicon-python-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  Docker: "devicon-docker-plain colored",
  "Docker Compose": "devicon-docker-plain colored",
  NeoVim: "devicon-neovim-plain colored",
  github:"devicon-github-original",
  Bootstrap: 
  "devicon-bootstrap-plain",
  tailwind:
  "devicon-tailwindcss-original colored",
  //dashboard-icons
  Docker:
    "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/docker.svg",
  "Docker Compose":
    "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/docker.svg",
  Jellyfin:
    "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/jellyfin.svg",
  Jellyseerr:
  "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/jellyseerr.svg",
  Trash:
"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/trash-guides.png",
  CloudFlare:
  "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/cloudflare.svg",
  Nginx: 
  "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/nginx-proxy-manager.svg"

};

const projects = [
  {
    id: 1,
    title: "Media Server met Jellyfin",
    shortDescription:
      "Volledige media server setup met Jellyfin, Jellyseer en Trash'arr",
    fullDescription:
      "Ik heb een complete media server opgezet met Jellyfin als centraal platform, Jellyseer voor verzoeksmanagement en Trash'arr voor automatische verzamelingenonderhoud. Dit project heeft me veel geleerd over containerisatie, API integratie en server architectuur. De hele stack draait in Docker Compose wat automatische deployment en schaling mogelijk maakt.",
    technologies: [
      "Docker",
      "Docker Compose",
      "Jellyfin",
      "Jellyseerr",
      "Trash",
      "CloudFlare",
      "Nginx",
    ],
    image: "images/jellyfin.png",
    github: "#",
  },
  {
    id: 2,
    title: "Zou dashboard",
    shortDescription: "Een multifunctionele dashboard voor persoonlijk gebruik",
    fullDescription:
      "Voor mijn eind school project heb ik een multitool dashboard gebouwd waar verschillende tools inzatten een muziek speler, video speler ",
    technologies: ["HTML", "CSS", "JavaScript", "PHP","tailwind"],
    image: "images/zhou-maindashboard.png",
    github: "https://github.com/102381/Zhou-dashboard",
  },
  {
    id: 3,
    title: "Typescript journey",
    shortDescription: "Mijn reis en development van het leren van Typescript",
    fullDescription:
      "Voor mijn stage ben ik kort bezig geweest om in mijn eigen tijd Typescript te leren omdat we voornamelijk daar met Typescript werkten ",
    technologies: ["HTML", "CSS", "TypeScript", "NeoVim"],
    image: "images/Typescript_banner.jpg",
    github: "https://github.com/102381/TypeScript-Journey",
  },
  {
    id: 4,
    title: "Python Journey",
    shortDescription: "mijn reis door het leren van Python",
    fullDescription:
      "verschillende projecten om python te leren en beter te begrijpen. hiermee probeerd ik verschillende beginner projecten maken om de syntax beter te begrijpen mijn beste project uit dit was een discord bot.",
    technologies: ["Python"],
    image: "images/python.png",
    github: "https://github.com/102381/python_journey",
  },
  {
    id: 5,
    title: "King Of The Court",
    shortDescription: "King Of The Court Crud applicatie",
    fullDescription:
      "King of the Court is Crud applicatie. een padel tournament waar wij een applicatie voor moesten bouwen waarin mensen zich konden registreren, match info lezen, leadboard uitlezen,gesoorteerd worden in teams. Daarnaast moesten we een een admin system maken waar de speler data kon worden beheerd. ",
    technologies: ["PHP", "CSS", "HTML"],
    image: "images/KOTC_banner.png",
    github: "https://github.com/IwanDjudaric/King-Of-The-Court",
  },
  {
    id: 7,
    title: "Yume Ramen",
    shortDescription: "Restaurant bezorgapp (CRUD)",
    fullDescription:
      "Yume Ramen is een restaurant waarvoor wij een bestel app voor moesten maken waar klanten verschillende gerechten konden kiezen allergieeen aangeven en bestellen het is een php crud applicatie gemaakt voor mijn school vak beroeps.",
    technologies: ["CSS", "PHP"],
    image: "images/Yume-Ramen-main-banner.png",
    github: "https://github.com/IwanDjudaric/Yume-Ramen",
  },
  {
    id: 8,
    title: "Quizzy",
    shortDescription:"Een quiz op met 3 verschillende quizes. over onze hobby's",
    fullDescription:"Voor het school vak beroeps moesten wij in groepen een quize app bouwen met een quiz over ons eigen sport of hobby",
    technologies:["HTML","CSS","JavaScript"],
    image:"images/quizzy.png",
    github:"https://github.com/IwanDjudaric/Quizzy"
  },
  {
    id: 9,
    title:"Mission to Mars",
    shortDescription:"een system voor een commerciële ruimtevlucht",
    fullDescription:"systeem voor een commerciële ruimtevlucht. Denk aan  wat reizigers onderweg nodig hebben, maar ook aan wat de ervaring comfortabel,bijzonder en prettig maakt.",
    technologies:["HTML","CSS","JavaScript"],
    image:"images/MTM-banner.png",
    github:"https://github.com/JeaV2/teamblue"
  }
];

function initProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = "";

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
            <div class="project-card-image" style="background-image: url('${project.image}'); background-size: contain; background-repeat: no-repeat; background-position: center;"></div>
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.shortDescription}</p>
                <div class="project-tech">
                  ${project.technologies
                    .map((tech) => {
                      const icon = techIcons[tech];
                      let iconHTML = "";
                      if (icon?.startsWith("http")) {
                        iconHTML = `<img src="${icon}" class="tech-icon" alt="${tech}"> `;
                      } else if (icon) {
                        iconHTML = `<i class="${icon}"></i> `;
                      }
                      return `<div class="tech-tag">${iconHTML}${tech}</div>`;
                    })
                    .join("")}
                </div>
            </div>
        `;

    projectCard.addEventListener("click", () => openProjectModal(project));
    projectsGrid.appendChild(projectCard);
  });

  if (projects.length === 0) {
    projectsGrid.innerHTML =
      '<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #999;"><p>Je hebt nog geen projecten toegevoegd. Voeg projecten toe in script.js</p></div>';
  }
}

function openProjectModal(project) {
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = `
        <h2 class="project-detail-title">${project.title}</h2>
        <p class="project-detail-description">${project.fullDescription}</p>
        <div class="project-detail-tech">
            <h4>Technologieen:</h4>
            <div class="project-tech">
               ${project.technologies
                 .map((tech) => {
                   const icon = techIcons[tech];
                   let iconHTML = "";
                   if (icon?.startsWith("http")) {
                     iconHTML = `<img src="${icon}" class="tech-icon" alt="${tech}"> `;
                   } else if (icon) {
                     iconHTML = `<i class="${icon}"></i> `;
                   }
                   return `<div class="tech-tag">${iconHTML}${tech}</div>`;
                 })
                 .join("")}
            </div>
        </div>
        <div class="project-links">
            ${project.github !== "#" ? `<a href="${project.github}" class="devicon-github-original " target="_blank"></a>` : ""}
        </div>
    `;

  modal.classList.add("active");
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  initProjects();

  const modal = document.getElementById("project-modal");
  const closeBtn = document.querySelector(".modal-close");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProjectModal);
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });
});

function addProject(
  title,
  shortDescription,
  fullDescription,
  technologies,
  link = "#",
  github = "#",
) {
  const newProject = {
    id: projects.length + 1,
    title,
    shortDescription,
    fullDescription,
    technologies,
    link,
    github,
  };
  projects.push(newProject);
  initProjects();
}
