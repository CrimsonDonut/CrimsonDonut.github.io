const pages = {

  about: `
    <section id="hero" class="px-3 px-md-5">
      <div class="hero-inner row g-5">
        <div class="hero-content col-12 col-lg-6 order-2 order-lg-1">
          <span class="hero-badge">
            <span class="material-symbols-outlined">local_cafe</span>
            Available for new projects
          </span>
          <h1 class="font-display hero-heading">
            Hi, I'm <em>Carl Anthony Peña</em><br>
            an aspiring Software Engineer who brews ideas into reality.
          </h1>
          <p class="hero-sub">
            Hi! I'm an aspiring Software Engineer with a a passion for development, currently pursuing a Bachelor of Science in Information Technology at the Polytechnic University of the Philippines.
          </p>
          <div class="hero-actions flex-column flex-sm-row">
            <button class="btn-primary-c" onclick="loadPage('portfolio')">
              <span class="material-symbols-outlined">work</span>
              View My Work
            </button>
            <button class="btn-outline-c" onclick="loadPage('contact')">
              Get In Touch
            </button>
          </div>
        </div>
        <div class="hero-photo-wrap col-12 col-lg-6 order-1 order-lg-2">
          <div class="hero-photo-frame">
            <div class="deco-bg-1"></div>
            <div class="deco-bg-2"></div>
            <img src="assets/images/totoy.jpg" alt="Your name">
            <div class="hero-photo-badge">
              <span class="material-symbols-outlined">design_services</span>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <span class="label">SCROLL</span>
        <div class="line"></div>
      </div>
    </section>

    <section id="philosophy" class="px-3 px-md-5">
      <div class="philosophy-inner row g-5">
        <div class="philosophy-img-wrap col-12 col-md-6">
          <div class="philosophy-img-frame">
            <img src="assets/images/workspace.jpg" alt="Your workspace">
          </div>
        </div>
        <div class="philosophy-content col-12 col-md-6">
          <h2>How I Work</h2>
          <p class="philosophy-quote">
            I prepare ahead of time to produce quality work.
          </p>
          <div class="philosophy-pillars">
            <div class="pillar">
              <div class="pillar-icon"><span class="material-symbols-outlined">lightbulb</span></div>
              <div class="pillar-text">
                <h4>Pillar One</h4>
                <p>Assesment of the task.</p>
              </div>
            </div>
            <div class="pillar">
              <div class="pillar-icon"><span class="material-symbols-outlined">design_services</span></div>
              <div class="pillar-text">
                <h4>Pillar Two</h4>
                <p>Assemble the team and resources needed.</p>
              </div>
            </div>
            <div class="pillar">
              <div class="pillar-icon"><span class="material-symbols-outlined">favorite</span></div>
              <div class="pillar-text">
                <h4>Pillar Three</h4>
                <p>Take action and execute the plan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
activities: `
    <section id="works" class="px-3 px-md-5">
      <div class="section-header flex-column flex-md-row align-items-md-end justify-content-md-between">
        <h1 class="fs-2 fw-semibold text-on-surface">Selected Works</h1>
        <p class="text-muted-surface">My activities and projects for my requirements in Web Development.</p>
      </div>

      <div class="projects-grid row g-4">
        <div class="col-12 col-md-6">
          <div class="card-project card-lg h-100">
          <div class="card-body-c p-4 p-md-5">
            <span class="project-tag">Activity 1</span>
            <h3 class="font-title">Bento Style Page</h3>
            <p class="text-muted-surface">Bento style layout implementation.</p>
            <div class="card-img-wrap">
              <img src="assets/images/BentoPlaceholder.png" alt="Project One">
            </div>
            <div class="project-actions">
              <a href="https://crimsondonut.github.io/pena_webdevelopment/AO1/" target="_blank" rel="noopener" class="btn-project primary">
                <span class="material-symbols-outlined">open_in_new</span> View Project
              </a>
            </div>
          </div>
        </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="card-project card-tall h-100">
            <div class="card-body-c p-4 p-md-5">
              <span class="project-tag">Activity 2</span>
              <h3 class="font-title">Upcoming Activity</h3>
              <p class="text-muted-surface">Details will be added soon.</p>
              <div class="card-img-wrap">
                <img src="assets/images/placeholderimg.jpeg" alt="Placeholder for Activity 2">
              </div>
              <div class="project-actions">
                <a href="" class="btn-project primary">
                  <span class="material-symbols-outlined">open_in_new</span> View Project
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="card-project card-sm-1 h-100">
            <div class="card-body-c p-4 p-md-5">
              <span class="project-tag">Activity 3</span>
              <h3 class="font-title">Upcoming Activity</h3>
              <p class="text-muted-surface">Details will be added soon.</p>
              <div class="card-img-wrap">
                <img src="assets/images/placeholderimg.jpeg" alt="Placeholder for Activity 3">
              </div>
              <div class="project-actions">
                <a href="" class="btn-project primary">
                  <span class="material-symbols-outlined">open_in_new</span> View Project
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="card-project card-sm-2 h-100">
            <div class="card-body-c p-4 p-md-5">
              <span class="project-tag">Activity 4</span>
              <h3 class="font-title">Upcoming Activity</h3>
              <p class="text-muted-surface">Details will be added soon.</p>
              <div class="card-img-wrap">
                <img src="assets/images/placeholderimg.jpeg" alt="Placeholder for Activity 4">
              </div>
              <div class="project-actions">
                <a href="" class="btn-project primary">
                  <span class="material-symbols-outlined">open_in_new</span> View Project
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
portfolio: `
    <section id="works" class="px-3 px-md-5">
      <div class="section-header flex-column flex-md-row align-items-md-end justify-content-md-between">
        <h1 class="fs-2 fw-semibold text-on-surface">Selected Works</h1>
        <p class="text-muted-surface">My works over the years.</p>
      </div>

      <div class="projects-grid row g-4">
        <div class="col-12 col-md-8">
          <div class="card-project card-lg h-100">
          <div class="card-body-c p-4 p-md-5">
            <span class="project-tag">Web</span>
            <h3 class="font-title">TonBITS</h3>
            <p class="text-muted-surface">An e-commerce site focused on selling GPU's at a competitive price. Made primarily with PHP embedded in HTML, and CSS.</p>
            <div class="card-img-wrap">
              <img src="assets/images/TonBits.png" alt="Project One">
            </div>
            <div class="project-actions">
              <a href="https://tonbits.great-site.net/" target="_blank" rel="noopener" class="btn-project primary">
                <span class="material-symbols-outlined">open_in_new</span> View Project
              </a>
              <a href="https://github.com/CrimsonDonut/TonBits" target="_blank" rel="noopener" class="btn-project outline">
                <span class="material-symbols-outlined">code</span> Repository
              </a>
            </div>
          </div>
        </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="card-project card-tall h-100">
          <div class="card-body-c p-4 p-md-5">
            <span class="project-tag">Game</span>
            <h3 class="font-title">Night Light</h3>
            <p class="text-muted-surface">A simple sidescroller that has a cyberpunk-esque theme that gets progressively more challenging as your score gets higher. Made with Python using Pygame</p>
            <div class="card-img-wrap tall">
              <img src="assets/images/nightlight.jpg" alt="Project Two">
            </div>
            <div class="project-actions">
              <a href="https://crimsondonut.github.io/NightLight/" target="_blank" rel="noopener" class="btn-project primary">
                <span class="material-symbols-outlined">open_in_new</span> View Project
              </a>
              <a href="https://github.com/CrimsonDonut/NightLight" target="_blank" rel="noopener" class="btn-project outline">
                <span class="material-symbols-outlined">code</span> Repository
              </a>
            </div>
          </div>
        </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="card-project card-sm-1 h-100">
          <div class="card-body-c p-4 p-md-5">
            <span class="project-tag">Web</span>
            <h3 class="font-title">Athletic Divinity</h3>
            <p class="text-muted-surface">An e-commerce site focused on selling athletic wear and accessories. Made primarily with HTML, JavaScript, and CSS.</p>
            <div class="card-img-wrap">
              <img src="assets/images/AthleticDiv.png" alt="Project Three">
            </div>
            <div class="project-actions">
              <a href="https://athletic-divinity.onrender.com/" target="_blank" rel="noopener" class="btn-project primary">
                <span class="material-symbols-outlined">open_in_new</span> View Project
              </a>
              <a href="https://github.com/CrimsonDonut/Athletic-Divinity" target="_blank" rel="noopener" class="btn-project outline">
                <span class="material-symbols-outlined">code</span> Repository
              </a>
            </div>
          </div>
        </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="card-project card-sm-2 h-100">
          <div class="card-body-c p-4 p-md-5">
            <span class="project-tag">Web</span>
            <h3 class="font-title">PinoyTix</h3>
            <p class="text-muted-surface">An online ticketing platform for Philippine cinemas. Handled the Backend development. Features API calls from TMDB.</p>
            <div class="card-img-wrap">
              <img src="assets/images/PinoyTix.png" alt="Project Four">
            </div>
            <div class="project-actions">
              <a href="https://pinoytix.ifree.page/frontend/pages/index.php" target="_blank" rel="noopener" class="btn-project primary">
                <span class="material-symbols-outlined">open_in_new</span> View Project
              </a>
              <a href="https://github.com/markjtria/IPT-FINALS-PINOYTIX" target="_blank" rel="noopener" class="btn-project outline">
                <span class="material-symbols-outlined">code</span> Repository
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div class="terminal-window">
        <p><span class="cmd">$</span> <span class="out">skills </span></p>
        <p class="out"><strong>Core Focus:</strong> Python</p>
        <p class="out"><strong>Familiar with:</strong> JavaScript, PHP, Figma</p>
      </div>
    </section>
  `,

contact: `
    <section id="contact-simple">
      <div class="contact-header">
        <h1 class="fs-2 fw-semibold text-on-surface">Let's Connect</h1>
        <p class="text-muted-surface">Have a project in mind or just want to chat? Drop a line below.</p>
      </div>
      
      <div class="contact-info-grid row g-4">
        <div class="col-12 col-md-4">
        <div class="contact-item h-100">
          <span class="material-symbols-outlined">mail</span>
          <div class="contact-details">
            <h3>Email</h3>
            <a href="mailto:carlanthony.pena@example.com">carlanthonypenaa@gmail.com</a>
          </div>
        </div>
        </div>

        <div class="col-12 col-md-4">
        <div class="contact-item h-100">
          <span class="material-symbols-outlined">call</span>
          <div class="contact-details">
            <h3>Phone</h3>
            <a href="tel:+639123456789">+63 955 550 5540</a>
          </div>
        </div>
        </div>

        <div class="col-12 col-md-4">
        <div class="contact-item h-100">
          <span class="material-symbols-outlined">location_on</span>
          <div class="contact-details">
            <h3>Location</h3>
            <p>Batangas, Philippines</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  `
};

const DEFAULT_PAGE = "about";

function loadPage(pageName) {
  const name = pageName || window.location.hash.replace("#", "") || DEFAULT_PAGE;
  const content = pages[name];

  if (!content) {
    console.warn(`No page found for "${name}", loading default instead.`);
    return loadPage(DEFAULT_PAGE);
  }

  const main = document.getElementById("maincontent");
  main.innerHTML = content;

  if (window.location.hash !== `#${name}`) {
    window.location.hash = name;
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === name);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Handle clicks on navigation links, and close the mobile menu after picking one
document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage(link.dataset.page);
    document.querySelector(".nav-links").classList.remove("nav-links-open");
  });
});

// Handle browser back/forward buttons
window.addEventListener("hashchange", () => loadPage());

// Load the initial page when the site finishes loading
document.addEventListener("DOMContentLoaded", () => loadPage());

const navToggle = document.getElementById("nav-toggle");
const navToggleIcon = navToggle.querySelector(".material-symbols-outlined");
const navLinksEl = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinksEl.classList.toggle("nav-links-open");
  navToggleIcon.textContent = isOpen ? "close" : "menu";
});

// Light Dark Theme Toggle
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector(".material-symbols-outlined");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  // Icon shows what clicking it will switch TO
  themeIcon.textContent = theme === "dark" ? "light_mode" : "dark_mode";
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme") || root.getAttribute("data-theme") || "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});
