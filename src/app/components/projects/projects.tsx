import Image from 'next/image'

import { SectionTitle } from "../title/sectionTitle"
import { ItemTitle } from "../title/itemTitle"

import "./projects.scss"

export function Projects(){
    const works = {
        'calculadora':{
            imgSrc:'/projects/calculadora.jpg',
            repSrc:'https://github.com/ArthurPerone/calculadora',
            pagSrc:'https://calculadora-phi-brown.vercel.app',
            title:'Calculadora',
        },
        'qrCode':{
            imgSrc:'/projects/gerador-QRCode.jpg',
            repSrc:'',
            pagSrc:'',
            title:'Gerador de QR-Code',
        },
        'autenticador': {
            imgSrc:'/projects/autentificador.jpg',
            repSrc:'',
            pagSrc:'',
            title:'Sistema de Autentificação',
        },
        'toDoList': {
            imgSrc:'/projects/lista-de-tarefas.jpg',
            repSrc:'',
            pagSrc:'',
            title: 'Lista de Tarefas',
        },
        'cloneflix': {
            imgSrc:'/projects/cloneflix.jpg',
            repSrc:'',
            pagSrc:'',
            title: 'Cloneflix',
        },
        'ticTacToe': {
            imgSrc:'/projects/jogo-da-velha.jpg',
            repSrc:'',
            pagSrc:'',
            title: 'Jogo da Velha',
        }
    }
    function work(){
        let listWorks = []
        for(const work in works){
            listWorks.push(
                <div className="work">
                    <ItemTitle text={works[work].title}></ItemTitle>
                    <Image 
                        src={works[work].imgSrc}
                        alt={works[work].title}
                        width={1920}
                        height={1080}
                        priority
                    />
                    <a className="repository" href={works[work].repSrc} target="_blank">Repositório</a>
                    <a className="page" href={works[work].pagSrc} target="_blank">Visualizar Projeto</a>
                </div>
            )
        }
        return(
            listWorks
        );
    }
    const secTitle : String = "Projetos Desenvolvidos"
    return(
        <div className="projects">
            <SectionTitle text={secTitle}></SectionTitle>
            <div className="works">
                {work()}
            </div>
        </div>
    )
}