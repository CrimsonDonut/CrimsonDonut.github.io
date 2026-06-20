// =====================================================================
// PAGE CONTENT
// Replace the placeholder text/images below with your own. Everything
// here reuses the CSS classes already defined in style.css, so the
// coffee-and-wood look stays consistent automatically.
// =====================================================================
const pages = {

  about: `
    <section id="hero">
      <div class="hero-inner">
        <div class="hero-content">
          <span class="hero-badge">
            <span class="material-symbols-outlined">local_cafe</span>
            Available for new projects
          </span>
          <h1 class="font-display hero-heading">
            Hi, I'm <em>Carl Anthony Peña</em> —<br>
            an aspiring Software Engineer who brews ideas into reality.
          </h1>
          <p class="hero-sub">
            Hi! I'm an aspiring Software Engineer with a a passion for development, currently pursuing a Bachelor of Science in Information Technology at the Polytechnic University of the Philippines.
          </p>
          <div class="hero-actions">
            <button class="btn-primary-c" onclick="loadPage('portfolio')">
              <span class="material-symbols-outlined">work</span>
              View My Work
            </button>
            <button class="btn-outline-c" onclick="loadPage('contact')">
              Get In Touch
            </button>
          </div>
        </div>
        <div class="hero-photo-wrap">
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

    <section id="philosophy">
      <div class="philosophy-inner">
        <div class="philosophy-img-wrap">
          <div class="philosophy-img-frame">
            <img src="assets/images/workspace.jpg" alt="Your workspace">
          </div>
        </div>
        <div class="philosophy-content">
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

portfolio: `
    <section id="works">
      <div class="section-header">
        <h1 class="font-headline text-on-surface">Selected Works</h1>
        <p class="text-muted-surface">My works over the years.</p>
      </div>

      <div class="projects-grid">
        <div class="card-project card-lg">
          <div class="card-body-c">
            <span class="project-tag">Web</span>
            <h3 class="font-title">TonBITS</h3>
            <p class="text-muted-surface">An e-commerce site focused on selling GPU's at a competitive price. Made primarily with PHP embedded in HTML, and CSS.</p>
            <div class="card-img-wrap">
              <img src="assets/images/TonBits.png" alt="Project One">
            </div>
            <div class="project-actions">
              <a href="https://CrimsonDonut.github.io/TonBits" target="_blank" rel="noopener" class="btn-project primary">
                <span class="material-symbols-outlined">open_in_new</span> View Project
              </a>
              <a href="https://github.com/CrimsonDonut/TonBits" target="_blank" rel="noopener" class="btn-project outline">
                <span class="material-symbols-outlined">code</span> Repository
              </a>
            </div>
          </div>
        </div>

        <div class="card-project card-tall">
          <div class="card-body-c">
            <span class="project-tag">Game</span>
            <h3 class="font-title">Night Light</h3>
            <p class="text-muted-surface">A simple sidescroller that has a cyberpunk-esque theme that gets progressively more challenging as your score gets higher. Made with Python using Pygame</p>
            <div class="card-img-wrap tall">
              <img src="assets/images/nightlight.jpg" alt="Project Two">
            </div>
            <div class="project-actions">
              <a href="https://CrimsonDonut.github.io/NightLight" target="_blank" rel="noopener" class="btn-project primary">
                <span class="material-symbols-outlined">open_in_new</span> View Project
              </a>
              <a href="https://github.com/CrimsonDonut/NightLight" target="_blank" rel="noopener" class="btn-project outline">
                <span class="material-symbols-outlined">code</span> Repository
              </a>
            </div>
          </div>
        </div>

        <div class="card-project card-sm-1">
          <div class="card-body-c">
            <span class="project-tag">Web</span>
            <h3 class="font-title">Athletic Divinity</h3>
            <p class="text-muted-surface">An e-commerce site focused on selling athletic wear and accessories. Made primarily with HTML, JavaScript, and CSS.</p>
            <div class="card-img-wrap">
              <img src="assets/images/AthleticDiv.png" alt="Project Three">
            </div>
            <div class="project-actions">
              <a href="https://CrimsonDonut.github.io/Athletic-Divinity" target="_blank" rel="noopener" class="btn-project primary">
                <span class="material-symbols-outlined">open_in_new</span> View Project
              </a>
              <a href="https://github.com/CrimsonDonut/Athletic-Divinity" target="_blank" rel="noopener" class="btn-project outline">
                <span class="material-symbols-outlined">code</span> Repository
              </a>
            </div>
          </div>
        </div>

        <div class="card-project card-sm-2">
          <div class="card-body-c">
            <span class="project-tag">Web</span>
            <h3 class="font-title">PinoyTix</h3>
            <p class="text-muted-surface">An online ticketing platform for Philippine cinemas. Handled the Backend development. Features API calls from TMDB.</p>
            <div class="card-img-wrap">
              <img src="assets/images/PinoyTix.png" alt="Project Four">
            </div>
            <div class="project-actions">
              <a href="https://yourusername.github.io/project-four" target="_blank" rel="noopener" class="btn-project primary">
                <span class="material-symbols-outlined">open_in_new</span> View Project
              </a>
              <a href="https://github.com/yourusername/project-four" target="_blank" rel="noopener" class="btn-project outline">
                <span class="material-symbols-outlined">code</span> Repository
              </a>
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
        <h1 class="font-headline text-on-surface">Let's Connect</h1>
        <p class="text-muted-surface">Have a project in mind or just want to chat? Drop a line below.</p>
      </div>
      
      <div class="contact-info-grid">
        <div class="contact-item">
          <span class="material-symbols-outlined">mail</span>
          <div class="contact-details">
            <h3>Email</h3>
            <a href="mailto:carlanthony.pena@example.com">carlanthonypenaa@gmail.com</a>
          </div>
        </div>

        <div class="contact-item">
          <span class="material-symbols-outlined">call</span>
          <div class="contact-details">
            <h3>Phone</h3>
            <a href="tel:+639123456789">+63 955 550 5540</a>
          </div>
        </div>

        <div class="contact-item">
          <span class="material-symbols-outlined">location_on</span>
          <div class="contact-details">
            <h3>Location</h3>
            <p>Batangas, Philippines</p>
          </div>
        </div>
      </div>
    </section>
  `
};

const DEFAULT_PAGE = "about";

// =====================================================================
// PAGE ROUTING
// =====================================================================

// Displays the selected page, updates the URL hash, and sets the active nav link
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

// =====================================================================
// MOBILE MENU TOGGLE
// =====================================================================
const navToggle = document.getElementById("nav-toggle");
const navToggleIcon = navToggle.querySelector(".material-symbols-outlined");
const navLinksEl = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinksEl.classList.toggle("nav-links-open");
  navToggleIcon.textContent = isOpen ? "close" : "menu";
});

// =====================================================================
// LIGHT / DARK MODE TOGGLE
// =====================================================================
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
