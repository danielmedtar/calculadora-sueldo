const sueldoBruto = document.getElementById('sueldo-bruto');
const bonos = document.getElementById('bonos');
const sueldoNeto = document.querySelector('.resultado');
const calcular = document.getElementById('calcular');
const limpiar = document.getElementById('limpiar')


function puntoNumeros(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

calcular.addEventListener('click', (e) => {
    e.preventDefault();
    function hacerCalculo() {
        if(bonos.value !== '') {
            let resultado = (parseFloat(sueldoBruto.value) + parseFloat( bonos.value)) * 0.83;
            sueldoNeto.innerHTML = `Tu sueldo neto es de ${puntoNumeros(resultado)}`
        } else {
            let resultado = (parseFloat(sueldoBruto.value)) * 0.83;
            sueldoNeto.innerHTML = `Tu sueldo neto es de ${puntoNumeros(resultado)}`
        }
    }

    hacerCalculo();
} )

limpiar.addEventListener('click', () => {
    location.reload()
})