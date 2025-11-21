import Botao from "./button"
import IconeDeMapa from "../assets/MapPin.svg"
type CardProps = {
  imagemLocal: string
  nome: string
  textoCard: string
  estiloCard: any
  textoBotao: string
  link?: string
}

export default function Card({ estiloCard, imagemLocal, nome, textoCard, textoBotao, link }: CardProps) {
  return (
    <div className={estiloCard?.card || ""}>
      <div className={estiloCard?.cabecalhoCard || ""}>
        <img className={estiloCard?.imagemLocal || ""} src={imagemLocal} alt="" />
      </div>
      <h2>{nome}</h2>
      <p>{textoCard}</p>
      <Botao texto={textoBotao} icone={IconeDeMapa} link={link} />
    </div>
  )
}