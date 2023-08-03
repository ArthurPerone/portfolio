import "./education.scss"
import { SectionTitle } from "../title/sectionTitle"

export function Education(){
    return(
        <div className="education">
          <SectionTitle text={"Formação"}/>
          <p>Análise e Desenvolvimento de Sistemas 
            <span>Fatec São Caetano do Sul - Antônio Russo</span>
          </p>
        </div>
    )
}