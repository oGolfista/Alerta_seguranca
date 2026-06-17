function mostrarTela(id) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  const alvo = document.getElementById(id);
  if (alvo) {
    alvo.classList.add('ativa');
    alvo.scrollTop = 0;
  }
}

document.addEventListener('click', function (e) {
  const btn = e.target.closest('[data-para]');
  if (btn) mostrarTela(btn.getAttribute('data-para'));
});

const botaoSOS = document.getElementById('botaoSOS');
const anelProgresso = document.getElementById('anelProgresso');

const TEMPO_SEGURAR = 3000;
const CIRCUNFERENCIA = 2 * Math.PI * 72;

anelProgresso.style.strokeDasharray = CIRCUNFERENCIA;
anelProgresso.style.strokeDashoffset = CIRCUNFERENCIA;

let inicioSegurar = null;
let animacao = null;
let disparado = false;

function iniciarSegurar(e) {
  e.preventDefault();
  if (disparado) return;
  inicioSegurar = performance.now();
  botaoSOS.classList.add('pressionando');
  animacao = requestAnimationFrame(atualizarAnel);
}

function cancelarSegurar() {
  if (animacao) cancelAnimationFrame(animacao);
  animacao = null;
  inicioSegurar = null;
  botaoSOS.classList.remove('pressionando');
  anelProgresso.style.strokeDashoffset = CIRCUNFERENCIA;
}

function atualizarAnel(agora) {
  if (!inicioSegurar) return;
  const tempo = agora - inicioSegurar;
  const progresso = Math.min(tempo / TEMPO_SEGURAR, 1);
  anelProgresso.style.strokeDashoffset = CIRCUNFERENCIA - progresso * CIRCUNFERENCIA;

  if (progresso >= 1) {
    dispararAlerta();
    return;
  }
  animacao = requestAnimationFrame(atualizarAnel);
}

function dispararAlerta() {
  disparado = true;
  cancelarSegurar();
  disparado = false;
  mostrarTela('s-alerta');
}

botaoSOS.addEventListener('mousedown', iniciarSegurar);
botaoSOS.addEventListener('mouseup', cancelarSegurar);
botaoSOS.addEventListener('mouseleave', cancelarSegurar);
botaoSOS.addEventListener('touchstart', iniciarSegurar, { passive: false });
botaoSOS.addEventListener('touchend', cancelarSegurar);
botaoSOS.addEventListener('touchcancel', cancelarSegurar);

document.addEventListener('click', function (e) {
  const toggle = e.target.closest('.toggle');
  if (toggle && !toggle.closest('[data-para]')) {
    toggle.classList.toggle('on');
  }
});
