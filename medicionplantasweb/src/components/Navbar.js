import { NavLink,Link } from "react-router-dom";
export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mis plantitas</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/" exact className="nav-link" activeClassName="active">Ver Medidas</NavLink>
                        <NavLink to="/agregar" exact className="nav-link" activeClassName="active">Agregar Medida</NavLink>
                       </div>
                </div>
            </div>
        </nav>
    )

};