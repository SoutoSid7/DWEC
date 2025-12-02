export class Genero{
    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
    }
}

export class Peliculas{
    constructor(id, titulo) {
        this.id = id;
        this.titulo = titulo;
    }
}

export class Listado{
    // Generos
    static cargarGeneros(){
        return JSON.parse(localStorage.getItem("cmdb_generos") || "[]");
    }
    static guardarGeneros(generos){
        localStorage.setItem("cmdb_generos", JSON.stringify(generos));
    }

    // Peliculas
    static cargarPeliculas(){
        return JSON.parse(localStorage.getItem("cmdb_peliculas") || "[]");
    }
    static guardarPeliculas(peliculas){
        localStorage.setItem("cmdb_peliculas", JSON.stringify(peliculas))
    }
}