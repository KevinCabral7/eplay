import Game from '../../models/Game'
import Product from '../Product'
import { List, Container, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  Games: Game[]
}

const ProductsList = ({ title, background, Games }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {Games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            title={game.title}
            system={game.system}
            infos={game.infos}
            image={game.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
