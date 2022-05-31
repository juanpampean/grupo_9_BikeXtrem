import '../App.css';
function TituloTabla() {
  return (
    <div className="row">
      <div className="col-md-4 strongTitle">
        Titulo
      </div>
      <div className="col strongTitle">
        Duración
      </div>
      <div className="col strongTitle">
        Rating
      </div>
      <div className="col strongTitle">
        Género
      </div> 
      <div className="col strongTitle">
        Premios
      </div>
    </div>
  );
}
export default TituloTabla;