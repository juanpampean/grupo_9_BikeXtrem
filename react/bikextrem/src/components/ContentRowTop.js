import CategoriesInDb from './CategoriesInDb'
import Totales from './Totales'
import UltimoProducto from "./UltimoProducto";

function ContentRowTop() {
    return (
        <div className="container-fluid">
                                       
        <Totales />
            
            <div className="row">
        <UltimoProducto />
        <CategoriesInDb />
            </div>
        </div>     


    )
}

export default ContentRowTop;