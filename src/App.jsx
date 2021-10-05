import './styles/styles.css';
import logo from './media/Huella.jpg';
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
                    <CardRazasPerros nombreRaza="linda" imagen={pimpim}/>
                    <CardRazasPerros nombreRaza="labrador" imagen={labrador}/>
                    <CardRazasPerros nombreRaza="linda" imagen={pimpim}/>
                    <CardRazasPerros nombreRaza="linda" imagen={pimpim}/>
                    <CardRazasPerros nombreRaza="linda" imagen={pimpim}/>
                </ul>
            </section>
            <section></section>
        </main>
        <footer></footer>
    </div>
  );
}

function CardRazasPerros({ nombreRaza, imagen }){
    return(
        <li className="breedCard">
            <div className="contenedorImagen">
                <img src={imagen} alt={nombreRaza} />   
            </div>
            <span className="breedTitle">{nombreRaza}</span>       
        </li>
    );
}

export default App;
