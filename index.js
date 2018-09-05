import React from 'react' // Permite crear componentes
import {render} from 'react-dom' // Permite agregar los componentes en algún lugar
import Playlist from './src/playlist/components/playlist'
import data from './src/api.json'

const app = document.getElementById('app') // Se trae el elemento donde se va a renderizar


// ReactDOM.render(Que se va a renderizar, Donde se va a realizar)
// const holaMundo = <h1>Hola a todo el mundo</h1>
render(
    <Playlist data={data}/>
,app)
