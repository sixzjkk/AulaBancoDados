import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div className='container'>
            <img width="75px" src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"/>
            <div className="card-container">
                <Link to="/musica/cadastrar" className="card">
                    <div>Registrar Música</div>
                </Link>
                <Link to="/musica" className="card">
                    <div>Lista de Músicas</div>
                </Link>
                <Link to="/musica/alterar" className="card">
                    <div>Editar Música</div>
                </Link>
            </div>
        </div>
    );
}
