import React, {useState, useEffect } from 'react';
import CardMarcasStock from "../CardMarcasStock";
import MarcasEnStock from '../MarcasEnStock';
import "./StockPorCategorias.css"

function StockPorCategorias () {


    return (
    <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Stock de Bicis</h5>
            </div>
            <div className="card-body">
                     <div className="row">
                   <MarcasEnStock/>            
                    </div>
                 </div>
                <div className="card-body">
                     <div className="row">
                   <MarcasEnStock/>
                    </div>
                 </div>
             </div>
    </div>
    )
}

export default StockPorCategorias