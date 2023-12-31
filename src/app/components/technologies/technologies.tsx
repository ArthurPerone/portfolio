import { SectionTitle } from "../title/sectionTitle"
import { ItemTitle } from "../title/itemTitle"

import "./technologies.scss"
import { HTMLIcon } from "../icons/htmlIcon"
import { JSIcon } from "../icons/jsIcon"
import { CSSIcon } from "../icons/cssIcon"
import { ReactIcon } from "../icons/reactIcon"
import { GitIcon } from "../icons/gitIcon"
import { TypescriptIcon } from "../icons/typescriptIcon"

export function Technologies(){
    const techs = {
        'HTML':{
            imgSrc:<HTMLIcon />,
            title:'HTML',
            description:' Linguagem de marcação para criar a estrutura básica de páginas web.',
        },
        'CSS':{
            imgSrc: <CSSIcon />,
            title:'CSS',
            description:' Linguagem para estilizar o formato e a aparência de páginas web.',
        },
        'JavaScript': {
            imgSrc: <JSIcon />,
            title:'JavaScript',
            description:'Linguagem de programação para criar interatividade e dinamismo em páginas web',
        },
        'React': {
            imgSrc: <ReactIcon />,
            title: 'React',
            description:'Biblioteca JavaScript para construir interfaces de usuário reativas e componentizadas.',
        },
        'Git': {
            imgSrc: <GitIcon />,
            title: 'Git',
            description:'Sistema de controle de versão para gerenciar alterações em projetos de desenvolvimento',
        },
        'TypeScript': {
            imgSrc: <TypescriptIcon />,
            title: 'TypeScript',
            description:'Superset ao JavaScript, adiciona tipagem estática e facilita o desenvolvimento escalável e robusto',
        }
    }
    function tech(){
        let listTechs = []
        for(const tech in techs){
            listTechs.push(
                <div className="tech">
                    <ItemTitle text={techs[tech].title}></ItemTitle>
                    {techs[tech].imgSrc}
                    <p>{techs[tech].description}</p>
                </div>
            )
        }
        return(
            listTechs
        );
    }

    return(
        <div className="technologies">
            <SectionTitle text={"Tecnologias"}/>
            <div className="techsList">
                {tech()}
            </div>
        </div>
    )
}