import imagen from '../images/jordan-walke.png'


function TopBar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					
					<ul className="navbar-nav ml-auto">

						
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i className="fas fa-bell fa-fw"></i>								
								<span className="badge badge-danger badge-counter">
									
								</span>
							</a>
						</li>

						
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i className="fas fa-envelope fa-fw"></i>
								
								<span className="badge badge-danger badge-counter">

								</span>
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						
						<li className="nav-item dropdown no-arrow">

						</li>

					</ul>

				</nav>
    )
}

export default TopBar;