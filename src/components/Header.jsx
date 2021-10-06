
import logo from 'media/Huella.jpg';


const Header = () => {
    return (
     <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="imagen" className="logo" />
            </li>
        
            <li><button className="button mainButton"> + Nuevo post</button> </li>
            <li>
                <div className="buscar">
                    <input placeholder="buscar una raza"/>
                    <i className="fas fa-search button iconoBusqueda"></i> 
                </div>
                
            </li>
            <li><button className="button secondaryButton">Login</button></li>
            <li><button className ="button mainButton">Registro</button></li>
        </ul>
        </header>
    );
}

export default Header;
