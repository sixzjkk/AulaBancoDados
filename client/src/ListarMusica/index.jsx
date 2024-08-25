import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadMusica() {
  const [musica, setMusica] = useState([]);


  useEffect(() => {
    const fetchMusica = async () => {
      try {
        const response = await fetch('http://localhost:5000/musica');
        const data = await response.json();
        setMusica(data);
      } catch (error) {
        console.error('Erro ao buscar as música:', error);
      }
    };

    fetchMusica();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/musica/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setMusica(musica.filter((musica) => musica._id !== id));
        alert('Música excluída com sucesso!');
      } else {
        alert('Erro ao excluir música.');
      }
    } catch (error) {
      console.error('Erro ao excluir música:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Lista de Música</h2>
      <table  className="table-container" border="1">
        <thead>
          <tr>
            <th>Código Música</th>
            <th>Titulo da Música</th>
            <th>Álbum</th>
            <th>Cantor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {musica.map((musica) => (
            <tr key={musica._id}>
              <td>{musica._id}</td>
              <td>{musica.titulo}</td>
              <td>{musica.album}</td>
              <td>{musica.cantor}</td>
              <td>
                <button onClick={() => handleDelete(musica._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
