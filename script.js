    // ===== DADOS — EDITE AQUI =====

    const projects = [
      {
        title: "Landing Page | Handdle",
        description: "Landing page Handdle com seções curvas.",
        tags: ["HTML", "CSS", "JavaScript", "Mobile First", "Bootstrap 5"],
        link: "https://gaberelaa.github.io/Huddle.landingpage/"
      },
      {
        title: "Landing Page | Sunnyside",
        description: "Landing page Sunnyside.",
        tags: ["HTML", "CSS", "JavaScript", "Mobile First", "Bootstrap 5"],
        link: "https://gaberelaa.github.io/Sunnyside.LandingPage/"
      },
      {
        title: "Newsletter",
        description: "Página para cadastro em Newsletter",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap 5"],
        link: "https://gaberelaa.github.io/NewsletterForm/"
      }
    ];

    const skills = [
      "HTML5", "CSS3", "JavaScript", "TypeScript", "React",
      "Tailwind CSS", "Git", "Figma", "Responsive Design", "API REST", "Banco de Dados", "Bootstrap 5"
    ];

    const education = [
      {
        course: "Desenvolvimento Web",
        institution: "Anhanguera",
        period: "2025 – 2027",
        description: "Formação voltada ao desenvolvimento de aplicações e interfaces web modernas, abordando programação, design responsivo, experiência do usuário (UX) e boas práticas utilizadas no mercado de tecnologia."
      }
    ];

    const myEmail = "zuninogabi@gmail.com";

    // ===== RENDERIZAÇÃO =====

    // Projetos
    const projectsEl = document.getElementById("projects-list");
    projects.forEach(p => {
      const card = document.createElement("a");
      card.href = p.link;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.className = "project-card";
      card.innerHTML = `
        <div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        </div>
        <span class="project-arrow">↗</span>
      `;
      projectsEl.appendChild(card);
    });

    // Skills
    const skillsEl = document.getElementById("skills-list");
    skills.forEach(s => {
      const span = document.createElement("span");
      span.className = "skill";
      span.textContent = s;
      skillsEl.appendChild(span);
    });

    // Educação
    const eduEl = document.getElementById("education-list");
    education.forEach(e => {
      const div = document.createElement("div");
      div.className = "edu-card";
      div.innerHTML = `
        <div class="edu-icon">🎓</div>
        <div>
          <h3>${e.course}</h3>
          <p class="institution">${e.institution}</p>
          <p class="period">${e.period}</p>
          <p class="edu-desc">${e.description}</p>
        </div>
      `;
      eduEl.appendChild(div);
    });

    // Dark mode toggle
    const toggleBtn = document.getElementById("theme-toggle");
    function applyTheme(dark) {
      document.documentElement.classList.toggle("dark", dark);
      toggleBtn.textContent = dark ? "☀️" : "🌙";
      localStorage.setItem("theme", dark ? "dark" : "light");
    }
    applyTheme(localStorage.getItem("theme") === "dark");
    toggleBtn.addEventListener("click", () => {
      applyTheme(!document.documentElement.classList.contains("dark"));
    });
    // Ano no footer
    document.getElementById("year").textContent = new Date().getFullYear();


