import logo from './logo.svg';
import './styles/styles.css';
import logo from './media/huella.jpg';
import pimpim from './media/pimpim.jpeg';
import labrador from './media/labrador.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="imagen" class="logo" />
            </li>
        
            <li><button className="button mainButton"> + Nuevo post</button> </li>
            <li>
                <div className="buscar">
                    <input placeholder="buscar una raza"/>
                    <i className="fas fa-search button iconoBusqueda"></i> 
                </div>
                
            </li>
            <li><button className="button secondaryButton">Iniciar Sesion</button></li>
            <li><button className ="button mainButton">Registrarme</button></li>
        </ul>
    </header>
    <main>
        <section> 
            <h1>Razas de Perros</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={pimpim} alt="linda" />   
                    </div>
                    <span className="breedTitle">linda </span>
                      
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={labrador} alt="labrador" />
                    </div>
                    <span className="breedTitle">labrador </span>
                </li>

            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
