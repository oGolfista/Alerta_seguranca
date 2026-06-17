// ─── Navigation ───────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.scrollTop = 0;
  }
}

// Delegate all [data-to] clicks to showScreen
document.addEventListener('click', function (e) {
  const btn = e.target.closest('[data-to]');
  if (btn) showScreen(btn.getAttribute('data-to'));
});

// ─── Panic button (hold 3s to trigger) ────────────────────────
const panicBtn    = document.getElementById('panicBtn');
const progressCircle = document.getElementById('progressCircle');

const HOLD_DURATION = 3000; // ms
const CIRCUMFERENCE = 2 * Math.PI * 72; // r=72 → ≈ 452.4

progressCircle.style.strokeDasharray  = CIRCUMFERENCE;
progressCircle.style.strokeDashoffset = CIRCUMFERENCE;

let holdStart  = null;
let rafId      = null;
let triggered  = false;

function startHold(e) {
  e.preventDefault();
  if (triggered) return;
  holdStart = performance.now();
  panicBtn.classList.add('pressing');
  rafId = requestAnimationFrame(updateRing);
}

function cancelHold() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = null;
  holdStart = null;
  panicBtn.classList.remove('pressing');
  progressCircle.style.strokeDashoffset = CIRCUMFERENCE;
}

function updateRing(now) {
  if (!holdStart) return;
  const elapsed  = now - holdStart;
  const progress = Math.min(elapsed / HOLD_DURATION, 1);
  const offset   = CIRCUMFERENCE - progress * CIRCUMFERENCE;
  progressCircle.style.strokeDashoffset = offset;

  if (progress >= 1) {
    triggerAlert();
    return;
  }
  rafId = requestAnimationFrame(updateRing);
}

function triggerAlert() {
  triggered = true;
  cancelHold();
  triggered = false;
  showScreen('s-alert');
}

// Mouse events (desktop)
panicBtn.addEventListener('mousedown', startHold);
panicBtn.addEventListener('mouseup',   cancelHold);
panicBtn.addEventListener('mouseleave', cancelHold);

// Touch events (mobile)
panicBtn.addEventListener('touchstart', startHold, { passive: false });
panicBtn.addEventListener('touchend',   cancelHold);
panicBtn.addEventListener('touchcancel', cancelHold);

// ─── Toggle switches ──────────────────────────────────────────
document.addEventListener('click', function (e) {
  const toggle = e.target.closest('.toggle');
  if (toggle && !toggle.closest('[data-to]')) {
    toggle.classList.toggle('on');
  }
});
