'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (menuButton && navigation) {
  const closeMenu = () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  };
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(expanded));
    navigation.classList.toggle('open', expanded);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
}

const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-category]')];
const filterStatus = document.querySelector('#filter-status');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let visible = 0;
  cards.forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    if (!card.hidden) visible++;
  });
  if (filterStatus) filterStatus.textContent = `${visible} ${visible === 1 ? 'lectura disponible' : 'lecturas disponibles'}.`;
}));

const questionButton = document.querySelector('#another-question');
const questionText = document.querySelector('#pause-question');
const questionCount = document.querySelector('#question-count');
if (questionButton && questionText && questionCount) {
  const questions = [
    '¿Qué te estás exigiendo hoy que no le exigirías a alguien que quieres?',
    '¿Qué necesitas hoy que llevas varios días dejando para después?',
    '¿Hay algo que puedas dejar sin resolver por un momento?',
    '¿Qué hiciste hoy que estás dejando de reconocer?',
    'Si no tuvieras que responder de inmediato, ¿qué te gustaría decir?'
  ];
  let currentQuestion = 0;
  questionButton.addEventListener('click', () => {
    currentQuestion = (currentQuestion + 1) % questions.length;
    questionText.textContent = questions[currentQuestion];
    questionCount.textContent = `${String(currentQuestion + 1).padStart(2, '0')} / 05`;
  });
}

// Preserve links shared before entries had their own pages.
const legacyEntries = {
  decisiones: 'lecturas/ya-lo-decidiste/',
  suficiente: 'lecturas/cuando-cada-meta-trae-otra-exigencia/',
  limites: 'lecturas/decir-que-no-y-sentir-culpa/'
};
const openLegacyEntry = () => {
  if (!document.querySelector('#reflexiones') || !location.hash.startsWith('#lectura-')) return;
  const path = legacyEntries[location.hash.slice(9)];
  if (path) window.location.replace(new URL(path, document.baseURI).href);
};
window.addEventListener('hashchange', openLegacyEntry);
openLegacyEntry();
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
