import { subirImagen } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;

const crearIntputFileHtml = () => {
    const html = `
        <h1 class="mt-5">Subir archivos</h1>
        <hr>
        <label>Selecciona una fotografía:</label>
        <input type="file" accept="image/png, image/jpeg">

        <br>
        <hr>
        <img id="foto" class="img-thumbnail" src="">
        <hr>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}

const eventos = () => {
    inputFile.addEventListener('change', (evento) => {
        const file = evento.target.files[0];
        console.log(file);
        subirImagen(file).then( url => {
            console.log(url);
            imgFoto.src = url;
        });
    })
}


export const init = () => {
    crearIntputFileHtml();
    eventos();
}