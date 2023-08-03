import { Presentation } from './components/presentation/presentation'
import { Projects } from './components/projects/projects'
import { Buttons } from './components/buttons/buttons'
import { Education } from './components/education/education'

import "./styles/home.scss"
import { Technologies } from './components/technologies/technologies'

export default function Home() {
  return (
    <main className='mainPage'>
      <Presentation />
      <Projects />
      <Education />
      <Technologies />

      <Buttons />

      <div className="credits">
        Desenvolvido por Arthur Perone
      </div>
    </main>
  )
}
