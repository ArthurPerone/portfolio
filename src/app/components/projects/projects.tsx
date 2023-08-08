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
            display:"none",
        },
        'qrCode':{
            imgSrc:'/projects/gerador-QRCode.jpg',
            repSrc:'https://github.com/ArthurPerone/QrCode-Generator',
            pagSrc:'https://qr-code-generator-nine-tau.vercel.app',
            title:'Gerador de QR-Code',
            display:"none",
        },
        'autenticador': {
            imgSrc:'/projects/autentificador.jpg',
            repSrc:'#',
            pagSrc:'#',
            title:'Sistema de Autentificação',
            display:"flex",
        },
        'toDoList': {
            imgSrc:'/projects/lista-de-tarefas.jpg',
            repSrc:'#',
            pagSrc:'#',
            title: 'Lista de Tarefas',
            display:"flex",
        },
        'cloneflix': {
            imgSrc:'/projects/cloneflix.jpg',
            repSrc:'#',
            pagSrc:'#',
            title: 'Cloneflix',
            display:"flex",
        },
        'ticTacToe': {
            imgSrc:'/projects/jogo-da-velha.jpg',
            repSrc:'https://github.com/ArthurPerone/ticTacToe',
            pagSrc:'https://tic-tac-toe-three-olive.vercel.app',
            title: 'Jogo da Velha',
            display:"none",
        }
    }
    function work(){
        let listWorks = []
        for(const work in works){
            listWorks.push(
                <div className="work">
                    <ItemTitle text={works[work].title}></ItemTitle>
                        <div className="emBreve" style={{display: works[work].display}}>
                            <h3>Em Breve</h3>
                        </div>
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
        
        for(let i=0;i<listWorks.length;i++){
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