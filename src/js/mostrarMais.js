const btnVerMais = document.querySelector('#view_btn');
btnVerMais.addEventListener('click', verMais);

function verMais() {
  const campoCursos = document.querySelector('.cursos');
  campoCursos.classList.toggle('active');

  if (campoCursos.classList.contains('active')) {
    campoCursos.style.maxHeight = campoCursos.scrollHeight + 'px';
    btnVerMais.textContent = 'Ver menos';
  } else {
    campoCursos.style.maxHeight = 300 + 'px';
    btnVerMais.textContent = 'Ver mais';
  }
}