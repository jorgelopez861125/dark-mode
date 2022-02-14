
import { useState } from 'react';
import './App.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const posts = [
    {
      title: 'Aprendiendo ReactJS',
      content: 'Una de las tecnologias con mayor demanda en el mercado'
    },
    {
      title: 'Aprendiendo ReactJS',
      content: 'Una de las tecnologias con mayor demanda en el mercado'
    },
    {
      title: 'Aprendiendo ReactJS',
      content: 'Una de las tecnologias con mayor demanda en el mercado'
    },
    {
      title: 'Aprendiendo ReactJS',
      content: 'Una de las tecnologias con mayor demanda en el mercado'
    },
    {
      title: 'Aprendiendo ReactJS',
      content: 'Una de las tecnologias con mayor demanda en el mercado'
    },
    {
      title: 'Aprendiendo ReactJS',
      content: 'Una de las tecnologias con mayor demanda en el mercado'
    },
  ]

  return (
    <div className={darkMode ? 'wrapper-dark' : 'wrapper-light'}>
      <div className="contenedor">
        <div className='logo'>
          <div>
            <h1>Hola, soy Misael</h1>
            <p>Bienvenidos a mi blog!</p>
          </div>
          <button type="button"  onClick={() =>setDarkMode(!darkMode)} className='btn'>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
      </div>
        <div className='main'>
          <h3>Lo mejor de la tecnologia</h3>
          <p className={darkMode ? 'cto-dark' : 'cto-light'}>LO ENCONTRAS ACA</p>
        </div>
        <div className='contenedor-posts'>
          {posts.map((post, index) => (
            <div key={index} className='post-card'>
              <p className='post-title'>{post.title}</p>
              <p className='post-content'>{post.content}</p>
            </div>
            
          ))}
         
        </div>
        <footer className='footer'>Hola, soy misael | Todos los derechos reservados</footer>
    </div>
    
    
  );
}

export default App;
