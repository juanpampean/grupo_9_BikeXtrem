import React, { Component } from "react";
import CardProductList from	'./CardProducList'

class TablaProductos extends Component {
	constructor(){
		super();
		this.state = {
			ProductList : []
		}
	}


componentDidMount() {

	fetch('http://localhost:3001/api/products')
		.then((respuesta) => {
			return respuesta.json()
		})
		.then((products) => {
			this.setState({ ProductList: products.meta.products })
		})
		.catch((error) => console.log(error))
}


render() {
	return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Listado de Productos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Categoria</th>
                                            <th>Proveedor</th>
                                
										</tr>
									</thead>
				
									<tbody>
									{this.state.ProductList.map((list, index) => {
                                    return <CardProductList {...list} key={index} />;
								})}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
	
}

 
}
export default TablaProductos;