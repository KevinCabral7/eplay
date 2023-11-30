import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <S.Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((infos) => (
          <Tag key={infos}>{infos}</Tag>
        ))}
      </S.Infos>
      <S.Titulo>{title}</S.Titulo>
      <Tag size="small">{category}</Tag>
      <Tag size="small">{system}</Tag>
      <S.Descricao>{getDescricao(description)}</S.Descricao>
    </S.Card>
  )
}

export default Product
