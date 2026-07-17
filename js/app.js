import { bookMeta, sections, findSectionById } from './content.js';

const navTree = document.getElementById('navTree');
const contentEl = document.getElementById('content');
const topbarTitle = document.getElementById('topbarTitle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menuBtn');
const sidebarClose = document.getElementById('sidebarClose');

let currentId = 'intro';

function getHashId() {
  const hash = location.hash.replace('#', '');
  return hash || 'intro';
}

function setHash(id) {
  if (location.hash !== `#${id}`) {
    history.pushState(null, '', `#${id}`);
  }
}

function buildNavItem(section, depth = 0) {
  const hasChildren = section.children?.length;
  const isGroup = section.isGroup && hasChildren;
  const navNumber = section.number ? `<span class="nav-num">${section.number}</span>` : '';

  if (isGroup) {
    const group = document.createElement('div');
    group.className = 'nav-group';
    group.dataset.group = section.id;

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'nav-group-toggle';
    toggle.innerHTML = `
      <span class="nav-chevron" aria-hidden="true"></span>
      ${navNumber}
      <span class="nav-label">${section.shortTitle || section.title}</span>
    `;
    toggle.addEventListener('click', () => {
      group.classList.toggle('is-open');
    });

    const childrenWrap = document.createElement('div');
    childrenWrap.className = 'nav-children';

    const parentLink = document.createElement('button');
    parentLink.type = 'button';
    parentLink.className = 'nav-item nav-item--parent';
    parentLink.dataset.id = section.id;
    parentLink.innerHTML = `<span class="nav-label">Обзор раздела</span>`;
    parentLink.addEventListener('click', () => navigateTo(section.id));
    childrenWrap.appendChild(parentLink);

    for (const child of section.children) {
      childrenWrap.appendChild(buildNavItem(child, depth + 1));
    }

    group.appendChild(toggle);
    group.appendChild(childrenWrap);
    return group;
  }

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'nav-item';
  btn.dataset.id = section.id;
  btn.innerHTML = `
    ${navNumber}
    <span class="nav-label">${section.shortTitle || section.title}</span>
  `;
  btn.addEventListener('click', () => navigateTo(section.id));
  return btn;
}

function renderNav() {
  navTree.innerHTML = '';
  for (const section of sections) {
    navTree.appendChild(buildNavItem(section));
  }
  updateNavActive();
  openGroupsForCurrent();
}

function updateNavActive() {
  document.querySelectorAll('.nav-item').forEach((el) => {
    el.classList.toggle('is-active', el.dataset.id === currentId);
  });
}

function openGroupsForCurrent() {
  const section = findSectionById(currentId);
  document.querySelectorAll('.nav-group').forEach((group) => {
    const groupId = group.dataset.group;
    const parent = sections.find((s) => s.id === groupId);
    const childIds = parent?.children?.map((c) => c.id) ?? [];
    const shouldOpen =
      currentId === groupId || childIds.includes(currentId);
    group.classList.toggle('is-open', shouldOpen);
  });
}

function renderHero(section) {
  const hero = section.heroImage || bookMeta.defaultHero;
  return `
    <div class="hero" style="--hero-img: url('${hero}')">
      <div class="hero-overlay"></div>
      <div class="hero-body">
        ${section.number ? `<span class="hero-chapter">Раздел ${section.number}</span>` : ''}
        <h1 class="hero-title">${section.title}</h1>
        ${section.isHome ? `<p class="hero-desc">${bookMeta.subtitle}</p>` : ''}
      </div>
    </div>
  `;
}

function renderSection(section) {
  topbarTitle.textContent = section.shortTitle || section.title;
  document.title = `${section.title} — ${bookMeta.title}`;

  contentEl.innerHTML = `
    ${renderHero(section)}
    <div class="content-body prose">
      ${section.content}
    </div>
  `;

  contentEl.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateTo(id) {
  currentId = id;
  const section = findSectionById(id);
  setHash(id);
  renderSection(section);
  updateNavActive();
  openGroupsForCurrent();
  closeSidebar();
}

function closeSidebar() {
  sidebar.classList.remove('is-open');
  overlay.classList.remove('is-visible');
  document.body.classList.remove('nav-open');
}

function openSidebar() {
  sidebar.classList.add('is-open');
  overlay.classList.add('is-visible');
  document.body.classList.add('nav-open');
}

menuBtn.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

window.addEventListener('popstate', () => {
  currentId = getHashId();
  renderSection(findSectionById(currentId));
  updateNavActive();
  openGroupsForCurrent();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSidebar();
});

// Init
renderNav();
currentId = getHashId();
if (!findSectionById(currentId)) currentId = 'intro';
renderSection(findSectionById(currentId));
