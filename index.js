import 'colors';
import { mostrarMenu } from './helpers/inquirer.js';
import { pausa } from './helpers/inquirer.js';
import { recibirvacas,litrosAlDia } from './models/funciones.js';



console.clear();

const main = async () => {
    let vacas = Array();
    console.log(vacas);

    let opt = '';
    do{
         opt = await mostrarMenu();
         switch (opt){
             case '1':
                 const nvacas = await recibirvacas ('Agregar vacas: ');
             
                 
            case '2':
                break;
                }

         await pausa();
        

    } while( opt!== '0');
   

    //pausa(); 
}

main();