import React from 'react'

function GenresInDb () {
    return (
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Hibrida
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                MTB
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                DESCENSO
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                BMX
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                RUTA
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default GenresInDb