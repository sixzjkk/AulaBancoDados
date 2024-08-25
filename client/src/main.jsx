import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateMusica from './CriarMusica'
import ReadMusica from './ListarMusica'
import UpdateMusica from './AlterarMusica'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={ <Home/> }/>
                  <Route path="/musica/cadastrar" element={ <CreateMusica/> }/>
                  <Route path="/musica" element={ <ReadMusica/> }/>
                  <Route path="/musica/alterar" element={ <UpdateMusica/>}/>
            </Routes> 
      </BrowserRouter>
  </React.StrictMode>,
)



