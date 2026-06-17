/* ===== NAV SCROLL EFFECT ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ===== MOBILE NAV TOGGLE ===== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ===== COUNTER ANIMATION ===== */
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const isFloat = target % 1 !== 0;
  const isLarge = target > 1000;
  const duration = 1800;
  const start = performance.now();
  function tick(now) {
    const elapsed = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - elapsed, 3);
    const current = target * eased;
    if (isLarge) {
      el.textContent = Math.floor(current).toLocaleString('en-IN');
    } else if (isFloat) {
      el.textContent = current.toFixed(1);
    } else {
      el.textContent = Math.floor(current);
    }
    if (elapsed < 1) requestAnimationFrame(tick);
    else el.textContent = isLarge ? target.toLocaleString('en-IN') : isFloat ? target : target;
  }
  requestAnimationFrame(tick);
}

/* ===== INTERSECTION OBSERVER ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger counters in hero
      const counters = entry.target.querySelectorAll('[data-target]');
      counters.forEach(c => { if (!c.dataset.animated) { c.dataset.animated = true; animateCounter(c); } });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .hero-content, .finding-card, .overview-card, .chart-card, .term-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

/* ===== CHART.JS DEFAULTS ===== */
Chart.defaults.font.family = "'Inter', system-ui, sans-serif";
Chart.defaults.color = '#666';
Chart.defaults.plugins.legend.display = false;

const MAROON = '#8B0000';
const MAROON2 = '#a31010';
const GOLD = '#C8961E';
const GOLD2 = '#e5b43a';
const GRAY = '#d6d0c8';

/* ===== DEBT TRAJECTORY CHART ===== */
new Chart(document.getElementById('debtChart'), {
  type: 'bar',
  data: {
    labels: ['2020-21', '2021-22', '2022-23', '2023-24', '2024-25', '2025-26*'],
    datasets: [{
      label: 'Outstanding Liabilities (₹ lakh crore)',
      data: [5.13, 5.96, 6.77, 7.58, 8.54, 9.99],
      backgroundColor: ['#c8961e44','#c8961e55','#c8961e66','#8B000066','#8B000088','#8B0000'],
      borderColor:      ['#c8961e','#c8961e','#c8961e','#8B0000','#8B0000','#5c0000'],
      borderWidth: 1.5,
      borderRadius: 6,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 11,
        ticks: { callback: v => '₹' + v + 'L', font: { size: 11 } },
        grid: { color: '#f0ece6' }
      },
      x: { ticks: { font: { size: 11 } }, grid: { display: false } }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: ctx => ` ₹${ctx.parsed.y} lakh crore`
        }
      },
      legend: { display: false }
    }
  }
});

/* ===== PEER COMPARISON CHART ===== */
new Chart(document.getElementById('peerChart'), {
  type: 'bar',
  data: {
    labels: ['Tamil Nadu', 'Karnataka', 'Maharashtra', 'Gujarat'],
    datasets: [{
      label: 'Debt / GSDP (%)',
      data: [28.3, 23.4, 19.7, 17.6],
      backgroundColor: [MAROON, '#c0392b88', '#c0392b55', '#c0392b33'],
      borderColor: [MAROON, '#c0392b', '#c0392b', '#c0392b'],
      borderWidth: 1.5,
      borderRadius: 6,
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        max: 35,
        ticks: { callback: v => v + '%', font: { size: 11 } },
        grid: { color: '#f0ece6' }
      },
      y: { ticks: { font: { size: 12, weight: '500' } }, grid: { display: false } }
    },
    plugins: {
      tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.x}% of GSDP` } },
      legend: { display: false }
    }
  }
});

/* ===== REVENUE DEFICIT CHART ===== */
new Chart(document.getElementById('deficitChart'), {
  type: 'line',
  data: {
    labels: ['2020-21', '2021-22', '2022-23', '2023-24', '2024-25', '2025-26*'],
    datasets: [{
      label: 'Revenue Deficit (₹ crore)',
      data: [51602, 46538, 38624, 62126, 73432, 78324],
      borderColor: MAROON,
      backgroundColor: 'rgba(139,0,0,0.08)',
      borderWidth: 2.5,
      fill: true,
      tension: 0.35,
      pointBackgroundColor: [GRAY, GRAY, GOLD, MAROON, MAROON, MAROON],
      pointRadius: [4, 4, 5, 5, 5, 8],
      pointHoverRadius: 8,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: { callback: v => '₹' + (v/1000).toFixed(0) + 'k cr', font: { size: 11 } },
        grid: { color: '#f0ece6' }
      },
      x: { ticks: { font: { size: 11 } }, grid: { display: false } }
    },
    plugins: {
      tooltip: { callbacks: { label: ctx => ` ₹${ctx.parsed.y.toLocaleString('en-IN')} crore` } },
      legend: { display: false }
    }
  }
});

/* ===== SoTR CHART ===== */
new Chart(document.getElementById('sotrChart'), {
  type: 'bar',
  data: {
    labels: ['Karnataka', 'Maharashtra', 'Gujarat', 'Tamil Nadu'],
    datasets: [{
      label: 'SoTR / GSDP (%)',
      data: [7.2, 6.8, 6.5, 5.45],
      backgroundColor: ['#2ecc7144', '#27ae6055', '#2ecc7166', MAROON],
      borderColor: ['#27ae60', '#27ae60', '#27ae60', MAROON],
      borderWidth: 1.5,
      borderRadius: 6,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 9,
        ticks: { callback: v => v + '%', font: { size: 11 } },
        grid: { color: '#f0ece6' }
      },
      x: { ticks: { font: { size: 12, weight: '500' } }, grid: { display: false } }
    },
    plugins: {
      tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.y}% of GSDP` } },
      legend: { display: false }
    }
  }
});

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const activateNavLink = () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--maroon)' : '';
    a.style.background = a.getAttribute('href') === '#' + current ? 'var(--surface-2)' : '';
  });
};
window.addEventListener('scroll', activateNavLink, { passive: true });
