/**
 * Script Interaktif Portofolio - Nabilah Sahda Firjatullah
 * UI/UX Designer & Data Analyst
 */

document.addEventListener("DOMContentLoaded", () => {
  // Ensure portfolioData is loaded
  const data = window.portfolioData;
  if (!data) {
    console.error("Data portofolio tidak ditemukan!");
    return;
  }

  // 1. Inisialisasi Fitur & Render
  initThemeToggle();
  initAmbientStars();
  renderHeroSection(data.profile);
  initTypewriter(data.profile.roles);
  renderAboutSection(data.about, data.profile);
  init3DLanyardCard();
  renderExperiences(data.experiences);
  renderSkills(data.skillsData);
  renderProjects(data.projects);
  renderEducationAndCertifications(data.education, data.certifications, data.trainings);
  renderAchievements(data.achievements);
  renderContactSection(data.profile);
  initNavScroll();
  initMobileMenu();
  initProjectModal(data.projects);
  initContactForm();
});

/* ==========================================================================
   2. TEMA WARNA (DARK / LIGHT MODE TOGGLE)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const htmlRoot = document.documentElement;

  // Baca preferensi tersimpan atau deteksi tema sistem
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  htmlRoot.setAttribute("data-theme", savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = htmlRoot.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      htmlRoot.setAttribute("data-theme", newTheme);
      localStorage.setItem("portfolio-theme", newTheme);
      showToast(`Beralih ke ${newTheme === "light" ? "Mode Terang (Pastel)" : "Mode Gelap (Slate)"}`);
    });
  }
}

/* ==========================================================================
   3. AMBIENT BACKGROUND STARS PARTICLES
   ========================================================================== */
function initAmbientStars() {
  const container = document.getElementById("stars-container");
  if (!container) return;

  const starCount = 45;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star-dot";
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    fragment.appendChild(star);
  }

  container.appendChild(fragment);
}

/* ==========================================================================
   4. HERO SECTION RENDER & TYPEWRITER
   ========================================================================== */
function renderHeroSection(profile) {
  const heroName = document.getElementById("hero-name");
  const heroBio = document.getElementById("hero-bio");
  const statusBadge = document.getElementById("hero-status-text");
  const statsContainer = document.getElementById("hero-stats");

  if (heroName) heroName.textContent = profile.name;
  if (heroBio) heroBio.textContent = profile.headline;
  if (statusBadge) statusBadge.textContent = profile.badgeStatus;

  // Render Stats Cards
  if (statsContainer && profile.stats) {
    statsContainer.innerHTML = profile.stats.map(stat => `
      <div class="stat-item">
        <div class="stat-val-wrapper">
          <span class="stat-value">${stat.value}</span>
          <span class="stat-suffix">${stat.suffix}</span>
        </div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   4. ANIMASI NGEROLL TEKS PERAN (3D TEXT ROLLER ANIMATION)
   ========================================================================== */
function initRoleRoller(roles) {
  const container = document.getElementById("role-roller-wrapper") || document.getElementById("typewriter-text")?.parentElement;
  if (!container || !roles || roles.length === 0) return;

  // Pastikan daftar peran bersih dan terpisah
  const cleanRoles = roles.flatMap(r => r.includes(",") ? r.split(",").map(s => s.trim()) : [r.trim()]);
  if (cleanRoles.length === 0) return;

  container.innerHTML = `<span class="role-roller-text active" id="typewriter-text">${cleanRoles[0]}</span>`;
  
  if (cleanRoles.length === 1) return;

  let currentIndex = 0;
  const intervalMs = 2800; // Durasi tampil 2.8 detik sebelum ngeroll ke peran berikutnya

  setInterval(() => {
    const currentEl = container.querySelector(".role-roller-text.active");
    const nextIndex = (currentIndex + 1) % cleanRoles.length;
    const nextText = cleanRoles[nextIndex];

    const nextEl = document.createElement("span");
    nextEl.className = "role-roller-text roll-in-prep";
    nextEl.id = "typewriter-text";
    nextEl.textContent = nextText;
    container.appendChild(nextEl);

    // Trigger browser reflow untuk memastikan transisi CSS berjalan mulus
    void nextEl.offsetWidth;

    // Gulir keluar teks lama ke atas
    if (currentEl) {
      currentEl.removeAttribute("id");
      currentEl.classList.remove("active");
      currentEl.classList.add("roll-out");
      setTimeout(() => {
        currentEl.remove();
      }, 700);
    }

    // Gulir masuk teks baru dari bawah
    nextEl.classList.remove("roll-in-prep");
    nextEl.classList.add("active");

    currentIndex = nextIndex;
  }, intervalMs);
}

// Alias untuk kompatibilitas fungsi pemanggilan lama
const initTypewriter = initRoleRoller;

/* ==========================================================================
   5. ABOUT ME SECTION & 3D LANYARD TILT
   ========================================================================== */
function renderAboutSection(about, profile) {
  const storyContainer = document.getElementById("about-story");
  const quickInfoContainer = document.getElementById("quick-info-grid");
  const principlesContainer = document.getElementById("principles-grid");

  if (storyContainer && about.story) {
    // Ubah markdown newline ke HTML paragraphs
    const paragraphs = about.story.split("\n\n").map(p => `<p>${p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')}</p>`).join("");
    storyContainer.innerHTML = paragraphs;
  }

  if (quickInfoContainer && about.quickInfo) {
    quickInfoContainer.innerHTML = about.quickInfo.map(info => `
      <div class="quick-info-item">
        <span class="qi-label">${info.label}</span>
        <span class="qi-value">${info.value}</span>
      </div>
    `).join("");
  }

  if (principlesContainer && about.principles) {
    const iconSVGs = {
      heart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
      "chart-bar": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>`,
      sparkles: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15 8.5 22 9.5 17 14.5 18.5 21.5 12 18 5.5 21.5 7 14.5 2 9.5 9 8.5 12 2"></polygon></svg>`,
      users: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
    };

    principlesContainer.innerHTML = about.principles.map(p => `
      <div class="principle-card">
        <div class="principle-icon">${iconSVGs[p.icon] || iconSVGs.sparkles}</div>
        <h4 class="principle-title">${p.title}</h4>
        <p class="principle-desc">${p.description}</p>
      </div>
    `).join("");
  }
}

function init3DLanyardCard() {
  const card = document.getElementById("interactive-id-card");
  if (!card) return;

  const reflection = card.querySelector(".card-reflection");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

    if (reflection) {
      const moveX = (x / rect.width) * 100;
      const moveY = (y / rect.height) * 100;
      reflection.style.background = `radial-gradient(circle at ${moveX}% ${moveY}%, rgba(255,255,255,0.3) 0%, transparent 60%)`;
    }
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    if (reflection) {
      reflection.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 60%)";
    }
  });
}

/* ==========================================================================
   6. EXPERIENCES TIMELINE RENDER
   ========================================================================== */
function renderExperiences(experiences) {
  const container = document.getElementById("timeline-container");
  if (!container || !experiences) return;

  container.innerHTML = experiences.map(exp => `
    <div class="timeline-card" id="${exp.id}">
      <div class="timeline-marker">
        <div class="marker-node">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
        </div>
      </div>
      <div class="timeline-content-card">
        <div class="exp-header">
          <div>
            <h3 class="exp-role">${exp.role}</h3>
            <div class="exp-company">${exp.company}</div>
          </div>
          <div class="exp-badge-group">
            <span class="exp-period">${exp.period}</span>
            <span class="exp-location">${exp.location}</span>
          </div>
        </div>

        <p class="exp-summary">${exp.summary}</p>

        <ul class="exp-achievements">
          ${exp.achievements.map(ach => `<li>${ach}</li>`).join("")}
        </ul>

        <div class="exp-skills-tags">
          ${exp.skills.map(s => `<span class="skill-tag-pill">${s}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   7. SKILLS SECTION RENDER & FILTER TABS
   ========================================================================== */
function renderSkills(skillsData) {
  const gridContainer = document.getElementById("skills-grid");
  const filterTabs = document.querySelectorAll("#skills-filter-tabs .filter-tab");
  if (!gridContainer || !skillsData) return;

  const getSkillIconSVG = (icon) => {
    switch (icon) {
      case "figma":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>`;
      case "python":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9H7a4 4 0 0 1 0-8h5v8zm0 6h5a4 4 0 0 1 0 8h-5v-8z"></path><circle cx="9" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>`;
      case "database":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;
      case "bar-chart-2":
      case "chart":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`;
      case "file-spreadsheet":
      case "table":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="8" y1="13" x2="16" y2="13"></line><line x1="8" y1="17" x2="16" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`;
      case "html5":
      case "code":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
      case "git-merge":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>`;
      case "clock":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
      default:
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="m10 15 5-3-5-3v6Z"></path></svg>`;
    }
  };

  const renderCards = (filter = "all") => {
    const filteredItems = filter === "all"
      ? skillsData.items
      : skillsData.items.filter(item => item.category === filter);

    gridContainer.innerHTML = filteredItems.map(skill => `
      <div class="skill-card" data-category="${skill.category}">
        <div class="skill-card-top">
          <div class="skill-icon-box">${getSkillIconSVG(skill.icon)}</div>
          <span class="skill-level-badge">${skill.level}</span>
        </div>
        <h4 class="skill-name">${skill.name}</h4>
        <p class="skill-desc">${skill.desc}</p>
      </div>
    `).join("");
  };

  renderCards("all");

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");
      renderCards(filter);
    });
  });
}

/* ==========================================================================
   8. PROJECTS SHOWCASE & FILTER
   ========================================================================== */
function renderProjects(projects) {
  const container = document.getElementById("projects-grid");
  const filterTabs = document.querySelectorAll("#projects-filter-tabs .filter-tab");
  if (!container || !projects) return;

  const renderProjectCards = (filter = "all") => {
    const filtered = filter === "all"
      ? projects
      : projects.filter(p => p.category === filter || (filter === "uiux" && p.category.includes("uiux")));

    container.innerHTML = filtered.map(p => `
      <div class="project-card" data-id="${p.id}">
        <div class="project-thumb-wrapper">
          <img src="${p.thumbnail}" alt="${p.title}" class="project-thumb" loading="lazy">
          <span class="project-badge-pill">${p.badge}</span>
          <span class="project-category-tag">${p.categoryLabel}</span>
        </div>
        <div class="project-info">
          <div class="project-role-text">${p.role}</div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-summary">${p.summary}</p>
          
          <div class="project-tags-list">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
          </div>

          <div class="project-card-footer">
            <button class="btn-view-project" data-project-id="${p.id}">
              <span>Lihat Detail Case Study</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            ${(p.github || (p.id === 'paddlepals' && p.link)) ? `
              <a href="${p.github || p.link}" target="_blank" rel="noopener noreferrer" class="btn-card-github" title="Lihat Repository GitHub Amarine" aria-label="Lihat Repository GitHub Amarine">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `).join("");

    // Attach click event for detail modals
    container.querySelectorAll(".btn-view-project").forEach(btn => {
      btn.addEventListener("click", () => {
        const projId = btn.getAttribute("data-project-id");
        openProjectModal(projId);
      });
    });
  };

  renderProjectCards("all");

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");
      renderProjectCards(filter);
    });
  });
}

/* ==========================================================================
   9. PROJECT CASE STUDY MODAL
   ========================================================================== */
function initProjectModal(projects) {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function openProjectModal(projectId) {
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content-area");
  const projects = window.portfolioData?.projects;
  if (!modal || !modalContent || !projects) return;

  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  modalContent.innerHTML = `
    <img src="${project.thumbnail}" alt="${project.title}" class="modal-hero-img">
    <div class="modal-content-inner">
      <div class="modal-badge-row">
        <span class="project-badge-pill" style="position:static">${project.badge}</span>
        <span class="project-category-tag" style="position:static">${project.categoryLabel}</span>
      </div>

      <h2 class="modal-project-title">${project.title}</h2>
      <div class="modal-project-role">Peran: <strong>${project.role}</strong> (${project.year})</div>

      <p class="project-summary" style="font-size:1rem; margin-bottom:20px;">${project.summary}</p>

      <h4 class="modal-section-title">Sorotan & Pendekatan Desain (Case Study Highlights):</h4>
      <ul class="modal-highlights-list">
        ${project.highlights.map(h => `<li>${h}</li>`).join("")}
      </ul>

      <h4 class="modal-section-title">Tools & Metodologi:</h4>
      <div class="project-tags-list" style="margin-bottom:28px;">
        ${project.tools.map(t => `<span class="project-tag" style="padding:6px 12px; font-size:0.8rem; background:rgba(99,102,241,0.15); border-color:rgba(99,102,241,0.3); color:var(--text-primary);">${t}</span>`).join("")}
      </div>

      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <a href="${project.figma}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span>Lihat Tampilan Desain</span>
        </a>
        ${(project.github || (project.id === 'paddlepals' && project.link)) ? `
          <a href="${project.github || project.link}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn btn-secondary btn-modal-github">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>Link GitHub</span>
          </a>
        ` : ''}
        <button class="btn btn-outline" onclick="document.getElementById('project-modal').classList.remove('active'); document.body.style.overflow='';">
          <span>Tutup</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* ==========================================================================
   10. EDUCATION, CERTIFICATIONS & TRAININGS
   ========================================================================== */
function renderEducationAndCertifications(education, certifications, trainings) {
  const eduContainer = document.getElementById("education-container");
  const certContainer = document.getElementById("certifications-container");
  const trainContainer = document.getElementById("trainings-container");

  if (eduContainer && education) {
    eduContainer.innerHTML = education.map(edu => `
      <div class="edu-card">
        <div class="edu-header">
          <h4 class="edu-degree">${edu.degree}</h4>
          <span class="edu-gpa-badge">${edu.gpa}</span>
        </div>
        <div class="edu-inst">${edu.institution}</div>
        <div class="edu-period">${edu.period}</div>
        <p class="edu-desc">${edu.description}</p>
      </div>
    `).join("");
  }

  if (certContainer && certifications) {
    certContainer.innerHTML = certifications.map(cert => `
      <div class="cert-card">
        <div class="cert-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
        </div>
        <div>
          <h4 class="cert-title">${cert.title}</h4>
          <div class="cert-issuer">${cert.issuer}</div>
          <div class="cert-validity">Masa Berlaku: ${cert.validity} • <span style="color:var(--accent-teal); font-weight:600;">${cert.badge}</span></div>
          <p class="cert-desc">${cert.description}</p>
        </div>
      </div>
    `).join("");
  }

  if (trainContainer && trainings) {
    trainContainer.innerHTML = trainings.map(tr => `
      <div class="training-card">
        <div class="training-top">
          <span class="training-provider">${tr.provider}</span>
          <span class="training-date">${tr.date}</span>
        </div>
        <h4 class="training-title">${tr.title}</h4>
        <p class="training-desc">${tr.desc}</p>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   11. ACHIEVEMENTS SECTION RENDER
   ========================================================================== */
function renderAchievements(achievements) {
  const container = document.getElementById("achievements-container");
  if (!container || !achievements) return;

  container.innerHTML = achievements.map(ach => `
    <div class="achievement-card">
      <div class="achievement-trophy-box">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
      </div>
      <div class="achievement-info">
        <span class="achievement-badge-pill">${ach.badge} • ${ach.year}</span>
        <h3 class="achievement-title">${ach.title}</h3>
        <div class="achievement-event">${ach.event} — ${ach.organizer}</div>
        <p class="achievement-desc">
          <strong>Karya: ${ach.projectTitle}</strong> — ${ach.description}
        </p>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   12. CONTACT SECTION & SOCIAL LINKS
   ========================================================================== */
function renderContactSection(profile) {
  const socialsList = document.getElementById("contact-socials-list");
  const footerSocials = document.getElementById("footer-socials");
  const copyBtn = document.getElementById("btn-copy-email");

  const socialLinks = [
    { name: "LinkedIn", url: profile.socialLinks.linkedin, icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>` },
    { name: "Instagram", url: profile.socialLinks.instagram, icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>` },
    { name: "GitHub", url: profile.socialLinks.github, icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>` },
    { name: "Figma", url: profile.socialLinks.figma, icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>` }
  ];

  const renderSocialButtons = (container) => {
    if (!container) return;
    container.innerHTML = socialLinks.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-btn" title="${s.name}" aria-label="${s.name}">
        ${s.icon}
      </a>
    `).join("");
  };

  renderSocialButtons(socialsList);
  renderSocialButtons(footerSocials);

  // Copy email button
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(profile.email).then(() => {
        showToast("Email berhasil disalin ke clipboard!");
      }).catch(() => {
        showToast("Email: " + profile.email);
      });
    });
  }
}

/* ==========================================================================
   13. CONTACT FORM SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const subjectInput = document.getElementById("form-subject");
    const messageInput = document.getElementById("form-message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value;
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      showToast("Mohon lengkapi semua bidang isian bertanda *", true);
      return;
    }

    // Siapkan mailto link untuk fallback pengiriman instan
    const mailtoSubject = encodeURIComponent(`[Portofolio Inquiry] ${subject} - ${name}`);
    const mailtoBody = encodeURIComponent(`Halo Nabilah,\n\nNama: ${name}\nEmail: ${email}\nPerihal: ${subject}\n\nPesan:\n${message}\n\n---\nDikirim melalui portofolio website`);

    window.location.href = `mailto:nabilahsahdaf@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    showToast("Terima kasih! Membuka aplikasi email Anda...");
    form.reset();
  });
}

/* ==========================================================================
   14. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message, isWarning = false) {
  const toast = document.getElementById("toast-notification");
  const msgEl = document.getElementById("toast-message");
  const iconEl = document.getElementById("toast-icon");

  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  if (iconEl) {
    iconEl.textContent = isWarning ? "!" : "✓";
    iconEl.style.background = isWarning ? "var(--accent-rose)" : "var(--accent-teal)";
  }

  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 3500);
}

/* ==========================================================================
   15. ACTIVE NAV SCROLL TRACKING
   ========================================================================== */
function initNavScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links .nav-link, .mobile-nav-links .nav-link");

  function onScroll() {
    const scrollY = window.pageYOffset + 180;

    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop;
      const secId = sec.getAttribute("id");

      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${secId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ==========================================================================
   16. MOBILE DRAWER MENU
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("close-mobile-menu-btn");
  const drawer = document.getElementById("mobile-nav-drawer");
  const mobileLinks = drawer ? drawer.querySelectorAll(".nav-link") : [];

  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener("click", () => {
    drawer.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeDrawer);
  }

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  function closeDrawer() {
    drawer.classList.remove("active");
    document.body.style.overflow = "";
  }
}
