import { heroesCiclo, heroeIfAwait, obtenerHeroeAwait, obtenerHeroesArr, obtenerHeroesArr0 } from './js/await';
import { buscarHeroeCall } from './js/callbacks';
import { buscarHeroe, promesaLenta, promesaMedia, promesaRapida, buscarHeroeAsync } from './js/promesas';


// Callbacl

buscarHeroeCall('spider', (err,heroe)=>{
    if(err){    
        console.error(`Error CallBack :  ${err}` );      
    }else {
        console.info(`Callback : ${heroe.nombre}`);
    }
});

//Promise 

buscarHeroe('spider').then( heroe=> {
    console.info(`Promise 1000: ${heroe.nombre}`);
    
}).catch(err => {
    console.error(`Error Promise 1000 :  ${err}`);  
});


// Async

buscarHeroeAsync('iron').then(heroe => {
    console.info(`buscarHeroeAsync 1000: ${heroe.nombre}`);
}).catch(err => {
    console.error(`Error buscarHeroeAsync 1000 :  ${err}`);
});

// Manejo de Errores

obtenerHeroeAwait('capia').then(heroe => {
    console.log(` Errores obtenerHeroeAwait: ${heroe.nombre}`);
});





//Promise all

Promise.all( [
    buscarHeroe('iron'),
    buscarHeroe('spider')
] ).then(([heroe1, heroe2]) => {
    
    console.log(` Promise All : Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
    
    
});

//Promise. race

Promise.race( [promesaLenta, promesaMedia, promesaRapida] ).then(
    console.log
    
);



// heroesCiclo();






console.log('Fin del Programa');




// heroeIfAwait('iron');
console.log('obtenerHeroesArr0', (
    obtenerHeroesArr0().then(console.table)
));




