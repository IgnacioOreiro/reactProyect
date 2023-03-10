import React from "react";
import image from "../assets/images/logo-DH.png";
import { Link } from "react-router-dom"

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul
                className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
                id="accordionSidebar"
            >
                {/*<!-- Sidebar - Brand -->*/}
                {/* <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src="{image}" alt="Digital House" />
                    </div>
                </a> */}

                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/" exact="true" >
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House" />
                    </div>
                </Link>



                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    {/* <a className="nav-link" href="/"><i className="fas fa-fw fa-tachometer-alt"></i> <span>Dashboard - DH movies</span></a> */}
                    <Link className="nav-link" to="/" ><i className="fas fa-fw fa-tachometer-alt"></i><span>Dashboard - DH movies</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />
 
                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    {/* <a className="nav-link collapsed" href="/"><i className="fas fa-fw fa-folder"></i><span>Pages</span></a> */}
                    <Link className="nav-link collapsed" to="/LastMovieInDb" ><i className="fas fa-fw fa-folder"></i><span>Last Movie</span></Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    {/* <a className="nav-link" href="/"><i className="fas fa-fw fa-chart-area"></i><span>Charts</span></a> */}
                    <Link className="nav-link" to="/ContentRowMovies" ><i className="fas fa-fw fa-chart-area"></i><span>Charts</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    {/* <a className="nav-link" href="/"><i className="fas fa-fw fa-table"></i><span>Tables</span></a> */}
                    <Link className="nav-link" to="/GenresInDb"><i className="fas fa-fw fa-table"></i><span>Genre</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}


        </React.Fragment>
    );
}
export default SideBar;
