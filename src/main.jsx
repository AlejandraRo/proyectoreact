import React from 'react'
import ReactDOM from 'react-dom/client'
// import {PrimerComponente} from './PrimerComponente'
import '../src/styles.css'
import { ListadoApp } from './ListadoApp'
// import {ContadorApp} from './ContadorApp'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <PrimerComponente titulo="Esta sección es de props" subtitulo={4}/>  */}
  {/* <ContadorApp value={0} /> */}
  <ListadoApp/>
  </React.StrictMode>,
)
