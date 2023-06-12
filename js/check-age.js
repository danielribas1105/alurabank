export default function validarIdade (campo) {
    const dataNascimento = new Date(campo.value);
    calcularIdade(dataNascimento);
}

function calcularIdade (data) {
    const dataAtual = new Date();
    const difDatas = dataAtual - data;
    const idade = Math.trunc((difDatas / (1000 * 60 * 60 * 24))/365);
    if (idade >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade");
    }
}

/* Outra forma de cálculo:
    const idadeMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return dataAtual >= idadeMais18; 
*/
