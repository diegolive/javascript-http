
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// Cloudinary
const cloudPreset = 'nlhxqv9m'
const cloudUrl = 'https://api.cloudinary.com/v1_1/dlfmodmj0/upload'

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
}

// archivoSubir : file
const subirImagen = async ( archivoSubir ) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {
        const resp = await fetch ( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
        
    } catch (error) {
       throw error; 
    }
}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}