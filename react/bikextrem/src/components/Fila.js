import PropsTypes from 'prop-types';
import '../css/myStyle.css';





function Fila(props) {

  return (
    <div className="row">

      <div className="col-md-4">
      {props.titulo}
      </div>
      <div className="col">
      {props.duracion}
      </div>
      <div className="col">
      {props.rating}
      </div>
      <div className="col">
     
        <ul>
        {
         props.genero.map((genero, index) => { 
            return <li {...genero} key={index} >
              {props.genero[index]}</li>
          })
        }
        </ul>

       
      
      </div>
      <div className="col">
      {props.premios}
      </div>
    </div>
  );
}

Fila.PropsTypes = {
  titulo: PropsTypes.string.isRequired,
  duracion: PropsTypes.number.isRequired,
  rating: PropsTypes.number.isRequired,
  genero: PropsTypes.array.isRequired,
  premios: PropsTypes.number.isRequired,
}
Fila.defaultProps = {
  titulo: "No tiene titulo",
  duracion: 0,
  rating: 0,
  genero: "sin género",
  premios: 0,
}
export default Fila;