export default function validarIdade (campo) {
    const dataNascimento = new Date(campo.value);
    if(!calcularIdade(dataNascimento)) {
        campo.setCustomValidity("O usuário não é maior de idade!");
    }
}

function calcularIdade (data) {
    const dataAtual = new Date();
    const difDatas = dataAtual - data;
    const idade = Math.trunc((difDatas / (1000 * 60 * 60 * 24))/365);
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

/* Outra forma de cálculo:
    const idadeMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return dataAtual >= idadeMais18; 
*/
