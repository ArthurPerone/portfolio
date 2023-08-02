import "./title.scss"

interface SectionTitleProps{
    text: String
}

export function SectionTitle({text} : SectionTitleProps){
    return(
        <h1 className="section-title">{text}</h1>
    )
}