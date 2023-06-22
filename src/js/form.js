const form = document.querySelector('#myForm');
const campos = document.querySelectorAll('.form__input');
const spanErro = document.querySelectorAll('#inputError');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const campoDoFormulario = document.querySelector('.contato__form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    if (!validaNome(0)) {
        isValid = false;
    }

    if (!validaNome(2)) {
        isValid = false;
    }

    if (!validaNome(3)) {
        isValid = false;
    }

    if (!validaEmail()) {
        isValid = false;
    }

    if (isValid) {
        form.submit();
        campoDoFormulario.innerHTML = `
            <div class="messageSent d-flex flex-column align-items-center justify-content-center">
                <img src="src/images/mailSent.gif" alt="email enviado" width="250px">
                <h3 class="titulo-section-roxa text-center">E-mail enviado com sucesso!</h3>
                <p class="projeto__texto text-center">Retornarei o contato em até 5 dias úteis.</p>
            </div>`;
    }
});

function setError(index) {
    campos[index].style.border = '2px solid rgb(245, 71, 71)';
    spanErro[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = 'none';
    spanErro[index].style.display = 'none';
}

function validaNome(index) {
    if (campos[index].value.length < 3) {
        setError(index);
        return false;
    } else {
        removeError(index);
        return true;
    }
}

function validaEmail() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
        return false;
    } else {
        removeError(1);
        return true;
    }
}
