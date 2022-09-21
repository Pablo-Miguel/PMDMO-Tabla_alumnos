class Servicio{
    
    constructor(){
        this.listaAlumnos = [new Alumno("Pablo Miguel", 9.1, 5.9, 7.2), new Alumno("Marta", 6.7, 7.5, 8.4), new Alumno("Pepito", 3.7, 5.2, 4.3)];

    }

    //Only read
    getListaAlumnos(){
        return [...this.listaAlumnos];
    }

    getAlumno(index){
        return this.listaAlumnos[index];
    }

}