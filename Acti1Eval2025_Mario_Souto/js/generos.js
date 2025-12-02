class Genero {
        constructor(id, nombre){
            this.id = id;
            this.nombre = nombre;
        }
}

let generos = [];
let peliculas = [];

function obtenerId(){
    if (generos.length === 0 ) {
        return 1;
    }
    return generos[generos.length - 1].id + 1;
}

function tabla(){
    const tabla = document.getElementById()
}