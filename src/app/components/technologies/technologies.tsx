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
    const works = {
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
    function work(){
        let listWorks = []
        for(const work in works){
            listWorks.push(
                <div className="tech">
                    <ItemTitle text={works[work].title}></ItemTitle>
                    {works[work].imgSrc}
                    <p>{works[work].description}</p>
                </div>
            )
        }
        return(
            listWorks
        );
    }

    return(
        <div className="technologies">
            <SectionTitle text={"Tecnologias"}/>
            <div className="techsList" children={work()}></div>
        </div>
    )
}