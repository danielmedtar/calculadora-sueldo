const sueldoBruto = document.querySelector('.sueldo-bruto');
const bonos = document.querySelector('.bonos');
const sueldoNeto = document.querySelector('.resultado');
const calcular = document.getElementById('calcular');
const limpiar = document.getElementById('limpiar')

const formateador = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'ARS',

    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
})

calcular.addEventListener('click', (e) => {
    e.preventDefault();

    function validar() {
        if(sueldoBruto.value == '' || sueldoBruto.value <= 0 || isNaN(sueldoBruto.value)) {
            sueldoBruto.classList.add ('error')
            sueldoNeto.innerHTML = `Ingresa un sueldo válido`
            sueldoNeto.style.color = 'red'
        } else {
                function hacerCalculo() {
                    if(bonos.value !== '') {
                        let resultado = ((parseFloat(sueldoBruto.value) + parseFloat( bonos.value)) * 0.83).toFixed(2);
                        sueldoNeto.innerHTML = `Tu sueldo neto es <span class="bold">${formateador.format(resultado)}</span>`
    
                        sueldoNeto.style.color = 'white'
                    } else {
                        let resultado = ((parseFloat(sueldoBruto.value)) * 0.83).toFixed(2);
                        sueldoNeto.innerHTML = `Tu sueldo neto es <span class="bold">${formateador.format(resultado)}</span>`
    
                        sueldoNeto.style.color = 'white'
                    }
                }

            }
            hacerCalculo();
        }
        validar()
    }
)

limpiar.addEventListener('click', () => {
    location.reload()
})