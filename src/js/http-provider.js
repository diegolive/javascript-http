
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

const obtenerChiste = async () => {
    try {
        const resp = await fetch(jokeUrl);
        if (!resp.ok)  throw 'No se pudo realizar la petición';    
        const { icon_url, id, value } = await resp.json();  
        return { icon_url, id, value };   
    } catch (error) {
        throw error 
    }
}

const obtenerUsuarios = async () => {
    const resp = await fetch(urlUsuarios);
    const {data} = await resp.json();
    return data;
    // console.log(data);
}


export {
    obtenerChiste,
    obtenerUsuarios
}