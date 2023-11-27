import { Link } from 'react-router-dom'

import * as S from './styles'
import logo from '../../assets/images/logo vetor.svg'
import carrinho from '../../assets/images/shopping-cart 1.svg'

const Header = () => (
  <S.HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPlay" />
      </Link>
      <nav>
        <S.Links>
          <S.LinkItem>
            <Link to="/categories">Categorias</Link>
          </S.LinkItem>
          <S.LinkItem>
            <a href="#">Novidades</a>
          </S.LinkItem>
          <S.LinkItem>
            <a href="#">Promoções</a>
          </S.LinkItem>
        </S.Links>
      </nav>
    </div>
    <div>
      <S.LinkCart href="#">
        0 - Produto(s)
        <img src={carrinho} alt="Carrinho" />
      </S.LinkCart>
    </div>
  </S.HeaderBar>
)

export default Header
