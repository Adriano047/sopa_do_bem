import type { ReactNode } from "react"
import Botao from "./button"
type CardProps = {
  imagemLocal: string
  nome: string
  textoCard: string
  estiloCard: any
  textoBotao: string
  link?: string
  icone?: ReactNode
}

export default function Card({ estiloCard, imagemLocal, nome, textoCard, textoBotao, link,icone }: CardProps) {
  return (
    <div className={estiloCard?.card || ""}>
      <div className={estiloCard?.cabecalhoCard || ""}>
        <img className={estiloCard?.imagemLocal || ""} src={imagemLocal} alt="" />
      </div>
      <h2>{nome}</h2>
      <p>{textoCard}</p>
      <Botao texto={textoBotao} icone={icone} link={link} />
    </div>
  )
}