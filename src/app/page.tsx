import {Presentation} from './components/presentation/presentation'
import {Projects} from './components/projects/projects'

import "./styles/home.scss"

export default function Home() {
  return (
    <main className='mainPage'>
      <Presentation />
      <Projects />
      <div className="education">
        <h1>Formação</h1>
        <p>Análise e Desenvolvimento de Sistemas 
          <span>Fatec São Caetano do Sul - Antônio Russo</span>
        </p>
      </div>
      <div className="tecnologies">
        <h1>Tecnologias</h1>
      </div>
      <div className="buttons">
        <div className="social"></div>
        <button>Contato</button>
      </div>
    </main>
  )
}
