import Image from 'next/image'

import "./presentation.scss"

export function Presentation(){
    return(
        <div className="presentation">
            <div>
                <h1>Olá, eu sou Arthur</h1>
                <h2>Desenvolvedor Web FrontEnd Jr.</h2>
            </div>
            <Image 
                src = "/profile.jpg"
                alt="Vercel Logo"
                width={400}
                height = {400}
                priority
            />
        </div>
    )
}