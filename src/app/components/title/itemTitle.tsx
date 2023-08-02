import "./title.scss"

interface ItemTitleProps{
    text: String
}

export function ItemTitle({text} : ItemTitleProps){
    return(
        <h2 className="item-title">{text}</h2>
    )
}