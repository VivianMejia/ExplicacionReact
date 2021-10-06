import CardRazasPerros from 'components/CardRazasPerros';
import pimpim from 'media/pimpim.jpeg';
import labrador from 'media/labrador.jpg';

function Index() {
    return (
      <section>
        <h1>Razas de Perros</h1>
        <ul className='breedCardContainer'>
        <CardRazasPerros nombreRaza="linda" imagen={pimpim}/>
                  <CardRazasPerros nombreRaza="labrador" imagen={labrador}/>
                  <CardRazasPerros nombreRaza="linda" imagen={pimpim}/>
                  <CardRazasPerros nombreRaza="linda" imagen={pimpim}/>
                  <CardRazasPerros nombreRaza="linda" imagen={pimpim}/>
        </ul>
      </section> 
    ); 
 }
  
  export default Index;