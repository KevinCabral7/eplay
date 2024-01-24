import Product from '../Product'
import Loader from '../Loader'

import { parseToBrl } from '../../utils'

import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  Games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ title, background, Games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }
    return tags
  }
  if (isLoading) {
    return <Loader />
  }
  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <S.Title>{title}</S.Title>
        <S.List>
          {Games &&
            Games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  category={game.details.category}
                  description={game.description}
                  title={game.name}
                  system={game.details.system}
                  infos={getGameTags(game)}
                  image={game.media.thumbnail}
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Container>
  )
}
export default ProductsList
