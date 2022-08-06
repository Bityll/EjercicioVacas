import inquirer from "inquirer";
import 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Seleccione su opción',
        choices: [{
            value: '1',
            name: '1. Agregar vacas'
        },
    {
        Value: '0',
        name: '0. Salir'
    },
    
    ]
    }
];

export const mostrarMenu = async() => {

      //  console.clear();
        console.log('================'.green);
        console.log(' Seleccione una opción'.green);
        console.log('================\n'.green);

        const {opcion} = await inquirer.prompt(preguntas);
    
    
    return opcion;
}

export const pausa = async() =>{

    const question = [ 
        {
        type: 'input',
        name: 'enter',
        message: 'Presione Enter para continuar'
    }
    ]
    await  inquirer.prompt(question);
}

