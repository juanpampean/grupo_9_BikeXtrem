import MarcasEnStock from './MarcasEnStock'
import Totales from './Totales'
import UltimoProducto from "./UltimoProducto";

function ContentRowTop() {
    return (
        <div className="container-fluid">
                                       
        <Totales />
            
            <div className="row">
        <UltimoProducto />
        <MarcasEnStock />
            </div>
        </div>     


    )
}

export default ContentRowTop;