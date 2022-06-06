import logo from '../images/LOGO-BIKEXTREM.png'
import {Link,Route,Routes} from 'react-router-dom';
import React from 'react';

import Totales from "./Totales";
import MarcasEnStock from './MarcasEnStock';
import UltimoProducto from "./UltimoProducto";
import Main from './Main';
import Error404 from "./Error404/Error404";
import TablaProductos from './TablaProductos';

function SideBar() {
    return (
		<React.Fragment>
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			
			<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={logo} alt="Bikextrem" />
				</div>
			</Link>

			
			<hr className="sidebar-divider my-0"/>

			
			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - BIKEXTREM</span>
				</Link>
			</li>

			
			<hr className="sidebar-divider"/>

			
			<div className="sidebar-heading">Actions</div>

			
			<li className="nav-item">
				<Link className="nav-link collapsed" to="Totales">
					<i className="fas fa-fw fa-folder"></i>
					<span>Datos Globales</span>
				</Link>
			</li>

			
			<li className="nav-item">
				<Link className="nav-link" to="MarcasEnStock">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Stock por Marcas</span></Link>
			</li>

			
			<li className="nav-item">
				<Link className="nav-link" to="UltimoProducto">
					<i className="fas fa-fw fa-table"></i>
					<span>Ultima Novedad</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="TablaProductos">
					<i className="fas fa-fw fa-table"></i>
					<span>Listado Productos</span>
				</Link>
			</li>


			
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
		<Routes>
                <Route exact={true} path="/Totales" element={<Totales/>}/>
                <Route exact={true} path="/MarcasEnStock" element={<MarcasEnStock/>}/>
                <Route exact={true} path="/UltimoProducto" element={<UltimoProducto/>}/>
                <Route exact={true} path="/TablaProductos" element={<TablaProductos/>}/>
				<Route exact={true} path="/" element={<Main/>}/>
                <Route path="/*" element={<Error404/>}/>
          
        </Routes>

		</React.Fragment> 		
    )   
}

export default SideBar;