import {Presentation} from './components/presentation/presentation'
import {Projects} from './components/projects/projects'
import {Buttons} from './components/buttons/buttons'

import "./styles/home.scss"

export default function Home() {
  return (
    <main className='mainPage'>
      <Presentation />
      <Projects />
      <div className="container">
        <div className="education">
          <h1>Formação</h1>
          <p>Análise e Desenvolvimento de Sistemas 
            <span>Fatec São Caetano do Sul - Antônio Russo</span>
          </p>
        </div>
        <div className="tecnologies">
          <h1>Tecnologias</h1>
        </div>
      </div>
      <Buttons />
    </main>
  )
}
