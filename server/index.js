const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let collection;

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('musica');
    collection = db.collection('musica');

  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

connectDB();

app.use(express.json()); 


app.post('/musica', async (req, res) => {
  try {
    const novaMusica = req.body;

    const result = await collection.insertOne(novaMusica);
    
    res.status(201).json({ message: 'Música criada com sucesso', musica: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar música', error: err });
  }
});

app.get('/musica', async (req, res) => {
  try {

    const musica = await collection.find().toArray();

    res.status(200).json(musica);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar música', error: err });
  }
});

const { ObjectId } = require('mongodb');

app.get('/musica/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);

    const musica = await collection.findOne({ _id: newId });

    if (!musica) {
      res.status(404).json({ message: 'Música não encontrada' });
    } else {
      res.status(200).json(musica);
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar música', error: err });
  }
});

app.put('/musica/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);
    const atualizacao = req.body;

    const result = await collection.updateOne( { _id: newId }, { $set: atualizacao });

    if (result.matchedCount === 0) {
      res.status(404).json({ message: 'Música não encontrada' });
    } else {
      res.status(200).json({ message: 'Música atualizada com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar música', error: err });
  }
});

app.delete('/musica/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);

    const result = await collection.deleteOne({ _id: newId });

    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Música não encontrada' });
    } else {
      res.status(200).json({ message: 'Música excluída com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir música', error: err });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
