const imagenInput = document.getElementById('imagenInput')
const CambiarIcono = document.getElementById('CambiarIcono')
const Dia_Noche = document.getElementById('Dia_Noche')

const ModoOscuro = () => {
        if (imagenInput.checked) {
            CambiarIcono.innerHTML="<img src=\"day.svg\">"
            document.body.style.background="white"
            Dia_Noche.innerHTML="<img src=\"sol.svg\">"
        } else {
            CambiarIcono.innerHTML="<img src=\"night.svg\">"
            document.body.style.background="black"
            Dia_Noche.innerHTML="<img src=\"luna.svg\">"
        }
}
CambiarIcono.addEventListener('click',ModoOscuro)