import checkForCpf from './check-cpf.js';
import validarIdade from './check-age.js';

const camposFormulario = document.querySelectorAll("[required]");

camposFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11){
        checkForCpf(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        validarIdade(campo);
    }
}