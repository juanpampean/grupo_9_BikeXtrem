import React from 'react';


function CardMarcasStock(props){
    return(
        <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
            <div className="card-body">
                {props.marca}
            </div>
        </div>
    </div>
    )
}

export default CardMarcasStock