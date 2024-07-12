import '../styles/style.css';
import { NavLink } from 'react-router-dom';
import logou from '../img/logouleam.jpg';

function Home (){

    return(
        <div>
        <header>
            <div className='LogoUleam'>
                <img src={logou} alt="logoU" />
            </div>
            <nav>
                <NavLink to="/"><center><h3>Pagina Principal</h3></center></NavLink>
                <NavLink to="/loginini"><center><h3>Acceder</h3></center></NavLink>
            </nav>
        </header>
        
            <div className='index'/>
            
    
        
        <footer>
            <div className='LogoUleam2'>
                <img src={logou} alt="logu"/>
            </div>
            <nav className='navv'>
                <a><pre><center>ULEAM @ Copyright 2022, Todos los derechos reservados - Universidad Laica Eloy Alfaro de Manabí</center></pre></a>
                <a><pre><center>Dirección: Av. Circunvalación - Vía a San Mateo</center></pre></a>
                <a><pre><center>Manta - Manabí - Ecuador</center></pre></a>
            </nav>
            </footer>
        </div>
    )
}
export default Home;