window.addEventListener('load', main);

let btnLista, content, servicio;

const crearTabla = () => {
    let table = document.createElement("table");
    table.id="table";
    table.innerHTML="<tr><th>NOMBRE</th> <th>1º TRIMESTRE</th> <th>2º TRIMESTRE</th> <th>3º TRIMESTRE</th> <th>NOTA MEDIA</tr>";
        
        let columna, fila;
        for (let i = 0; i < servicio.getListaAlumnos().length; i++) {
            columna = document.createElement("tr");
            if(i % 2 == 0){
                columna.className="oscuro";
            }
            table.appendChild(columna);
        
            for (let j = 0; j < Object.keys(servicio.getListaAlumnos()[i]).length + 1; j++) {
                fila = document.createElement("td");
                columna.appendChild(fila);

                switch(j){
                    case 0:
                        fila.appendChild(document.createTextNode(`${servicio.getAlumno(i).getNombre()}`));
                        break;
                    case 1:
                        fila.appendChild(document.createTextNode(`${servicio.getAlumno(i).getNota1()}`));
                        break;
                    case 2:
                        fila.appendChild(document.createTextNode(`${servicio.getAlumno(i).getNota2()}`));
                        break;
                    case 3:
                        fila.appendChild(document.createTextNode(`${servicio.getAlumno(i).getNota3()}`));
                        break;
                    case 4:
                        fila.appendChild(document.createTextNode(`${servicio.getAlumno(i).media()}`));
                        break;
                }
                
            }
        }

    content.appendChild(table);

    btnLista.disabled = true;
}

function main() {
    servicio = new Servicio();
    
    btnLista = document.querySelector('#btnLista');
    content = document.querySelector('#content');
    btnLista.addEventListener('click', (e) => {crearTabla(e)});
}