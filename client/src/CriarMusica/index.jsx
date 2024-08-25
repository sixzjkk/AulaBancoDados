import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function CreateMusica() {
  const [titulo, setTitulo] = useState('');
  const [album, setAlbum] = useState('');
  const [cantor, setCantor] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novaMusica = { titulo, album, cantor };

    try {
      const response = await fetch('http://localhost:5000/musica', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaMusica),
      });
      if (response.ok) {
        alert('Música criada com sucesso!');
        setTitulo('');
        setAlbum('');
        setCantor('');
        navigate("/musica");
      } else {
        alert('Erro ao criar música.');
      }
    } catch (error) {
      console.error('Erro ao criar música:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Criar Música</h2>
      <input
        type="text"
        placeholder="Titulo da música"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Álbum"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Cantor"
        value={cantor}
        onChange={(e) => setCantor(e.target.value)}
        required
      />
      <button type="submit">Criar Música</button>
    </form>
    </div>
  );
}
