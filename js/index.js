const promedioFinal = document.getElementById('promedioFinal');

const prom1 = document.getElementById('prom1');
const prom2 = document.getElementById('prom2');
const prom3 = document.getElementById('prom3');

const btnCalcular = document.getElementById('calcular');
const btnBorrar = document.getElementById('Borrar');

function getNota() {
    const NOTA = [];
    NOTA.push(parseFloat(document.getElementById('nota1').value));
    NOTA.push(parseFloat(document.getElementById('nota2').value));
    NOTA.push(parseFloat(document.getElementById('nota3').value));
    NOTA.push(parseFloat(document.getElementById('nota4').value));
    NOTA.push(parseFloat(document.getElementById('nota5').value));
    NOTA.push(parseFloat(document.getElementById('nota6').value));

    return NOTA;
}

function validarCampos(n) {
    for (let i = 0; i < n.length; i++) {
        if (isNaN(parseFloat(n[i]))) {
            n[i] = 0;
        }
    }
}

function calcularPromedio(n) {
    let promedio1 = (((n[0] * 0.4) + (n[1] * 0.6)) * 0.3)
    let promedio2 = (((n[2] * 0.4) + (n[3] * 0.6)) * 0.3)
    let promedio3 = (((n[4] * 0.4) + (n[5] * 0.6)) * 0.4)
    let promedio = promedio1 + promedio2 + promedio3;

    prom1.value = promedio1.toFixed(2);
    prom2.value = promedio2.toFixed(2);
    prom3.value = promedio3.toFixed(2);

    setColor(promedio.toFixed(2))

    promedioFinal.innerHTML = promedio.toFixed(2);
}

function setColor(n) {
    if (n < 6) {
        promedioFinal.style.color = '#fd5555';
    }
    else {
        promedioFinal.style.color = '#00ce67';
    }
}

btnCalcular.addEventListener('click', () => {
    NOTA = getNota();
    validarCampos(NOTA);
    calcularPromedio(NOTA);
})

btnBorrar.addEventListener('click', () => {
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    document.getElementById('nota4').value = '';
    document.getElementById('nota5').value = '';
    document.getElementById('nota6').value = '';
    document.getElementById('prom1').value = '';
    document.getElementById('prom2').value = '';
    document.getElementById('prom3').value = '';
    promedioFinal.innerHTML = '0.0';
    promedioFinal.style.color = 'black'
})