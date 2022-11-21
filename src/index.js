import { obtenerUsuarios } from "./js/http-provider";


obtenerUsuarios().then( console.log );

// import { init } from "./js/chistes-page";


// init();



// import { obtenerChiste } from './js/http-provider';
// obtenerChiste().then(console.log);

// const jokeUrl = 'https://api.chucknorris.io/jokes/random';


// fetch(jokeUrl).then( resp => {
//     resp.json().then( ({id,value}) => {
//         console.log(id);
//         console.log(value);
//     })
// })

// fetch(jokeUrl)
//     .then( resp => resp.json() )
//     .then( ({id,value}) => {
//         console.log(id, value);
//     });
