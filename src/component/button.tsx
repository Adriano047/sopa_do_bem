import type { ReactNode } from "react"

type BotaoProps = {
    texto: string
    icone?: ReactNode
    link?: string
}

export default function Botao({texto, icone, link}:BotaoProps){
    const handleClick = () => {
    if (link) {
      window.open(link, '_blank',  'noopener,noreferrer')
    }
  }

    return (
       <button onClick={handleClick} style={{ cursor: link ? 'pointer' : 'default' }}>
            <span>{texto}</span>
            {icone && <span>{icone}</span>}
       </button>
    )
}