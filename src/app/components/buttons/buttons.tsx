import "./buttons.scss"
import { EmailIcon } from "../icons/emailIcon"
import { GithubIcon } from "../icons/githubIcon"
import { LinkedinIcon } from "../icons/linkedinIcon"
import { WhatsappIcon } from "../icons/whatsappIcon"


export function Buttons(){
    return(
        <div className="buttons">
            <div className="social">
                <a  href="https://www.linkedin.com/in/arthur-perone-barbosa-832930199/" aria-label="Linkedin" target="_blank">
                    <LinkedinIcon />
                </a>
                <a href="https://github.com/ArthurPerone" aria-label="github" target="_blank">
                    <GithubIcon />
                </a>
                <a href="https://wa.me/5511917031002" aria-label="whatsapp" target="_blank">
                    <WhatsappIcon />
                </a>
            </div>
            <a id="email" href="mailto:arthur.b.perone@outlook.com" aria-label="email" target="_blank">
                Email
                <EmailIcon />
            </a>
        </div>
    )
}