import checkForCpf from './check-cpf.js';

const camposFormulario = document.querySelectorAll("[required]");

camposFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11){
        checkForCpf(campo);
    }
}