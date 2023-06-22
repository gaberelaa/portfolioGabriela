const campoTexto = document.querySelector('#textAuto');
const texto = 'Desenvolvedora Front-end.';
const interval = 190;

function digitacaoAutomatica(campoTexto, texto, interval) {
    const char = texto.split('').reverse();
    const typer = setInterval(() => {
        if (!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();
        campoTexto.innerHTML += next;
    }, interval);
}

digitacaoAutomatica(campoTexto, texto, interval);


