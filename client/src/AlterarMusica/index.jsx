import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateMusica() {
  const [id, setId] = useState('');
  const [titulo, setTitulo] = useState('');
  const [album, setAlbum] = useState('');
  const [cantor, setCantor] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { titulo, album, cantor };

    try {
      const response = await fetch(`http://localhost:5000/musica/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('Música atualizada com sucesso!');
        navigate("/musica");
      } else {
        alert('Erro ao atualizar música.');
      }
    } catch (error) {
      console.error('Erro ao atualizar música:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Atualizar Música</h2>
      <input
        type="text"
        placeholder="ID da Música"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Titulo da Música"
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
      <button type="submit">Atualizar Música</button>
    </form>
    </div>
  );
}
