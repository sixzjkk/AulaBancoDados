import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div className='container'>
            <h2>Spotify</h2>
            <div className="card-container">
                <Link to="/musica/cadastrar" className="card">
                    <div>Registrar Música</div>
                </Link>
                <Link to="/musica" className="card">
                    <div>Lista de Música</div>
                </Link>
                <Link to="/musica/alterar" className="card">
                    <div>Editar Música</div>
                </Link>
            </div>
        </div>
    );
}
