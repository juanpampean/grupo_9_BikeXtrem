import '../App.css';
import TituloTabla from './TituloTabla';
import Fila from './Fila';

let billyElliot = {
  titulo: 'Billy Elliot',
  duracion: 123,
  rating: 5,
  genero: ['drama', 'comedia'],
  premios: 2,
}

let alicia = {
  titulo: 'Alicia en el pais de las maravillas',
  duracion: 142,
  rating: 4.8,
  genero: ['drama', 'comedia', 'acción'],
  premios: 3,
}

let peliculas = [billyElliot, alicia];

function Tabla() {
  return (
    <div className="container-fluid borderTabla">
      <div className="tabla">
        <TituloTabla/>
        {
          peliculas.map((element, index) => { /* crea una card por cada cardsProps */
            return <Fila {...element} key={index} />
          })
        }


      </div>
    </div>

  );
}
export default Tabla;