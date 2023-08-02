import "./buttons.scss"
import { EmailIcon } from "../icons/emailIcon"
import { GithubIcon } from "../icons/githubIcon"
import { LinkedinIcon } from "../icons/linkedinIcon"


export function Buttons(){
    return(
        <div className="buttons">
            <div className="social">
                <a href="https://www.linkedin.com/in/arthur-perone-barbosa-832930199/" target="_blank">
                    <LinkedinIcon />
                </a>
                <a href="https://github.com/ArthurPerone" target="_blank">
                    <GithubIcon />
                </a>
            </div>
            <button>
                Email
                <EmailIcon />
            </button>
        </div>
    )
}