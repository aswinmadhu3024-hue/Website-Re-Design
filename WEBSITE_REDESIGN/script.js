// Initialize Lucide Icons
lucide.createIcons();

// Particle Animation setup
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = Array.from({ length: 35 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 2 + 1,
  dx: (Math.random() - 0.5) * 0.5,
  dy: (Math.random() - 0.5) * 0.5,
  color: ['#f59e0b', '#2563eb', '#14b8a6'][Math.floor(Math.random() * 3)]
}));

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Interactive Event Filtering
function filterEvents(category, btnElement) {
  document.querySelectorAll('.event-filter-btn').forEach(btn => {
    btn.className = 'event-filter-btn px-4 py-2 text-xs font-semibold rounded-lg glass text-slate-300 hover:text-white';
  });
  btnElement.className = 'event-filter-btn px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white';

  document.querySelectorAll('.event-card').forEach(card => {
    card.style.display = (category === 'all' || card.classList.contains(category)) ? 'flex' : 'none';
  });
}

// Secret Easter Egg Toggle
function toggleEasterEgg() {
  document.getElementById('easter-egg-modal').classList.toggle('hidden');
}

// Mobile Menu Navigation Toggle
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}