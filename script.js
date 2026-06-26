// ===================== NAVIGATION & SECTION VISIBILITY =====================

const sections = {
  home: document.getElementById('home'),
  about: document.getElementById('about'),
  resume: document.getElementById('resume'),
  projects: document.getElementById('projects'),
  contact: document.getElementById('contact'),
};

const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function showSection(id) {
  const target = sections[id];
  if (!target) return;

  // Hide all sections except home (home is always visible)
  Object.entries(sections).forEach(([key, el]) => {
    if (key === 'home') return;
    el.classList.remove('visible');
    el.style.display = 'none';
  });

  if (id === 'home') {
    // Home is always shown — just scroll to it
    sections.home.scrollIntoView({ behavior: 'smooth' });
    updateActiveLink(id);
    return;
  }

  // Show the target section
  target.style.display = 'flex';

  // Trigger the fade-in on next paint
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      target.classList.add('visible');
    });
  });

  target.scrollIntoView({ behavior: 'smooth' });
  updateActiveLink(id);
}

function updateActiveLink(id) {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === id);
  });
}

// Wire up nav links
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = link.dataset.section;
    showSection(section);
    // Close mobile menu
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close mobile menu on outside click
document.addEventListener('click', e => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
  }
});

// ===================== PROJECTS DATA =====================

const projectsData = [
  {
    title: 'To-Do List App',
    description: 'A clean, interactive to-do list app that lets users add, complete, and delete tasks. Built with vanilla HTML, CSS and JavaScript with a focus on simple and intuitive user experience.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/angie-max/todo-list-app',
    live: null,
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio site featuring smooth section navigation, a brown-themed design, dynamic content rendering, and a contact form.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/angie-max',
    live: null,
  },
];

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projectsData.map(p => `
    <div class="project-card">
      <div class="project-card-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
      <div class="project-card-footer">
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-link"><i class="fab fa-github"></i> Code</a>` : ''}
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="project-link project-link-live"><i class="fas fa-external-link-alt"></i> Live</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

renderProjects();

// ===================== RESUME SECTION CONTENT =====================

function renderResume() {
  const container = document.querySelector('.resume .container');
  if (!container) return;

  container.innerHTML = `
    <h2 class="section-title">Resume</h2>

    <div class="resume-body">

      <!-- Career Objective -->
      <div class="resume-block">
        <h3 class="resume-block-title">Career Objective</h3>
        <p class="resume-block-text">
          Final-year Computer Science student at Kirinyaga University, 
          with a strong interest in front-end web development.
        </p>
      </div>

      <!-- Education -->
      <div class="resume-block">
        <h3 class="resume-block-title">Education</h3>
        <div class="resume-entry">
          <div class="resume-entry-header">
            <span class="resume-entry-role">BSc Computer Science</span>
            <span class="resume-entry-date">2025 – Expected 2027</span>
          </div>
          <span class="resume-entry-place">Kirinyaga University &mdash; Final Year</span>
        </div>
      </div>

      <!-- Work Experience -->
      <div class="resume-block">
        <h3 class="resume-block-title">Work Experience</h3>
        <div class="resume-entry">
          <div class="resume-entry-header">
            <span class="resume-entry-role">Intern &mdash; IT Support</span>
            <span class="resume-entry-date">June 2025 – Aug 2025</span>
          </div>
          <span class="resume-entry-place">Machakos Level 5 Hospital</span>
          <ul class="resume-entry-list">
            <li>Assisted hospital staff with IT-related queries and technical troubleshooting</li>
            <li>Installed and configured operating systems and applications</li>
            <li>Supported system updates and network monitoring activities</li>
          </ul>
        </div>
      </div>

      <!-- Skills -->
      <div class="resume-block">
        <h3 class="resume-block-title">Skills</h3>
        <div class="resume-skills-row">
          <div>
            <p class="resume-skills-label">Technical</p>
            <div class="skills-grid">
              <span class="skill-tag">HTML</span>
              <span class="skill-tag">CSS</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">Python</span>
            </div>
          </div>
          <div>
            <p class="resume-skills-label">Soft Skills</p>
            <div class="skills-grid">
              <span class="skill-tag">Structured Planning</span>
              <span class="skill-tag">Problem-solving</span>
              <span class="skill-tag">Communication</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects / GitHub -->
      <div class="resume-block">
        <h3 class="resume-block-title">Academic Projects</h3>
        <p class="resume-block-text">
          View all school and personal projects on GitHub:
          <a href="https://github.com/angie-max" target="_blank" rel="noopener" class="resume-link">
            github.com/angie-max
          </a>
        </p>
      </div>

      <!-- References -->
      <div class="resume-block">
        <h3 class="resume-block-title">References</h3>
        <p class="resume-block-text" style="font-style: italic; opacity: 0.75;">Available upon request.</p>
      </div>

      <!-- Download -->
      <div class="resume-download">
        <a href="ANGELA_MUMO_CV.pdf" download class="btn btn-primary">
          <i class="fas fa-download"></i> Download Full CV
        </a>
      </div>

    </div>
  `;
}

renderResume();

// ===================== INITIAL STATE =====================

// Ensure only home is visible on load
Object.entries(sections).forEach(([key, el]) => {
  if (key !== 'home') {
    el.style.display = 'none';
  }
});

updateActiveLink('home');
