import inquirer from "inquirer";


const validate = (input) => {
    if (Number.isNaN(input)) {
        return 'Ingrese un valor numerico';
    }
    if (input < 0 || input > 20) {
        return 'Ingrese un valor dentro del rango ';

    }
    return true
}

export const recibirvacas = async (message) => {
    const nvacas = [
        {
            type: 'number',
            name: 'vacas',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor valido';
                }
                if (Number.isNaN(value)) {
                    console.clear();
                    return 'Ingrese un valor numerico';
                }
                if (value < 2 || value > 50) {
                    return 'Ingrese un valor dentro del rango ';
                }
                return true;
            }
        }
    ];

    const { vacas } = await inquirer.prompt(nvacas);
    let dias = Array();
    let vaquitas = Array();
    for (let i = 1; i <= 7; i++) {
        vaquitas = [];
        for (let j = 1; j <= vacas; j++) {

            const question = [
                {
                    type: 'number',
                    name: 'varlec',
                    message: `Ingrese litros para día ${i}, y la vaca ${j}`,
                    validate,
                }
            ];
            const { varlec } = await inquirer.prompt(question);

            vaquitas.push({
                "vaca": j,
                "litros": varlec,

            })
            if (j == vacas) {
                dias.push({
                    "dia": i,
                    "vacas": vaquitas,

                })

            }

        }
    }
    const litrosLeche = litrosAlDia(dias);
    const Vacamayordia = vacaMayor(dias);
    return dias;
}

//Función para realizar la suma de los litros por día
export const litrosAlDia = (dias) => {
    let suma = 0;
    let sumadias = Array();
    console.log(dias.length, dias[1].vacas.length);
    for (let i = 1; i <= dias.length; i++) {

        suma = 0;
        for (let j = 1; j <= dias[i - 1].vacas.length; j++) {
            suma += parseInt(dias[i - 1].vacas[j - 1].litros)
            if (j == dias[i - 1].vacas.length) {

                sumadias.push(
                    {
                        "dia": i,
                        "litrospordia": suma
                    }
                )

            }
        }
        console.log(sumadias[i - 1]);
    }

    //Función para calcular los días de producción
    let diaMayor = { 'dia': 1, 'litros': sumadias[0].litrospordia };
    let diaMenor = { 'dia': 1, 'litros': sumadias[0].litrospordia };
    for (let i = 0; i < sumadias.length; i++) {
        if (diaMayor.litros < sumadias[i].litrospordia) {

            diaMayor = { 'dia': sumadias[i].dia, 'litros': sumadias[i].litrospordia }
        }
        if (diaMenor.litros > sumadias[i].litrospordia) {
            diaMenor = { 'dia': sumadias[i].dia, 'litros': sumadias[i].litrospordia }
        }

    }
    console.log("El día con mayor producción fue ", diaMayor);
    console.log("El día con menor producción fue ", diaMenor);


}
//Función para calcular la vaca que más Leche produce en el día
export const vacaMayor = (dias) => {
    for (let k = 0; k < dias.length; k++) {
        var mayorProduccionDia = 0 ;
        var VacaMayorProduccion = 0;
        for (let i = 0; i < dias[k].vacas.length; i++) {
            if (dias[k].vacas[i].litros > mayorProduccionDia) {
                mayorProduccionDia = dias[k].vacas[i].litros
                VacaMayorProduccion = i + 1
            }
        }
        console.log("Para el" ,{dia: k+1}, "La : ",{VacaMayorProduccion}, "Con : " , {mayorProduccionDia});
    }

}
