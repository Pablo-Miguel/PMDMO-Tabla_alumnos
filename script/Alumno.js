class Alumno{

    constructor(nombre, nota1, nota2, nota3){
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    getNombre(){
        return this.nombre;
    }

    getNota1(){
        return this.nota1;
    }

    getNota2(){
        return this.nota2;
    }
    
    getNota3(){
        return this.nota3;
    }

    setNombre(nombre){
        this.nombre = nombre
    }

    setNota1(nota){
        if(nota >= 0 && nota <= 10){
            this.nota1 = nota1;
            return 0;
        }
        return -1
    }

    setNota2(nota){
        if(nota >= 0 && nota <= 10){
            this.nota2 = nota2;
            return 0;
        }
        return -1
    }

    setNota3(nota){
        if(nota >= 0 && nota <= 10){
            this.nota3 = nota3;
            return 0;
        }
        return -1
    }

    media(){
        return Math.round(((this.nota1 + this.nota2 + this.nota3) / 3) * 100) / 100; 
    }
    
}