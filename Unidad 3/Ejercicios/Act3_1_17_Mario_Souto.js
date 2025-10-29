class Alumno{
    /*DNI, Ciclo, Año finalizacion*/
    constructor(DNI, ciclo, anyo){
        this._DNI = DNI;
        this._ciclo = ciclo;
        this._anyo = anyo;
    }

    get DNI(){
        return this._DNI;
    }
    set DNI(value){
        this._DNI = value;
    }

    get Ciclo(){
        return this._ciclo;
    }
    set Ciclo(value){
        this._ciclo = value;
    }

    get Anyo(){
        return this._anyo;
    }
    set Anyo(value){
        this._anyo = value;
    }
}

class Empresa{
    ciclos = [];
    alumnos = [];
    constructor(cif){
        this._cif = cif;
    }

    get CIF(){
        return this._cif;
    }
    set CIF(value){
        this._cif = value;
    }

    alta(alumno){
        this.alumnos.push(alumno);
    }

    baja(DNI){
        this.alumnos = this.alumnos.filter((a) => a.DNI !== DNI);
    }
    alumnosPorCiclo(ciclo){
        let busqueda = [];
        busqueda = this.alumnos.filter((a) => a.Ciclo === ciclo);
        return busqueda;
    }
}

let empresa1 = new Empresa("B204236757");
empresa1.ciclos.push("DAW");

empresa1.alta(new Alumno("11232667E", "DAW", 2025));
empresa1.alta(new Alumno("88742930L", "DAM", 2020));
empresa1.alta(new Alumno("53968401Y", "DAW", 2024));
empresa1.alta(new Alumno("45225562W", "DAW", 2024));
empresa1.alta(new Alumno("11030659T", "DAM", 2022));
empresa1.alta(new Alumno("99887531R", "DAM", 2021));
empresa1.alta(new Alumno("11778660U", "DAW", 2024));

//empresa1.baja("88742930L");
//console.log(empresa1.alumnos)

console.log(empresa1.alumnosPorCiclo("DAW"));
