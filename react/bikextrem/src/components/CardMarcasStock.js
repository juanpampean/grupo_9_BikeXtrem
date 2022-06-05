import React from 'react';


function CardMarcasStock({marca,cantidad}){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                {marca}:{cantidad}
                </div>
            </div>
        </div>
    )
}

export default CardMarcasStock