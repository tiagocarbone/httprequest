import React, { useState, useEffect } from 'react';

import './app.css'

//https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

  

  const [nutri, setNutri] = useState([])

  useEffect(() => {

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      
      fetch(url)
        .then((resultado) => resultado.json())
        .then((json) => {
          setNutri(json)
        })
    }

    loadApi()

  }, [nutri])

  return (
    <div className='container'>   
      <header>
        <strong>React Nutri</strong>
      </header>     

      {nutri.map((item) =>{
        return (
          <article key={item.id} className='post' > 
            <strong className='titulo'>{item.titulo}</strong>
            <img alt='capa' src={item.capa} className='capa'/>
            <p className='subtitulo' >{item.subtitulo}</p>
             {/*<h1>Categoria - {item.categoria}</h1> */}
            <a href className='botao' >Acessar</a>
          </article>
        )
      })}

    </div>
  );
}

export default App;
