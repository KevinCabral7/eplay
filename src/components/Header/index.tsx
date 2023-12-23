import { Link } from 'react-router-dom'

import * as S from './styles'
import logo from '../../assets/images/logo vetor.svg'
import carrinho from '../../assets/images/shopping-cart 1.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
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
        <S.CartButton onClick={openCart}>
          {items.length} - Produto(s)
          <img src={carrinho} alt="Carrinho" />
        </S.CartButton>
      </div>
    </S.HeaderBar>
  )
}
export default Header
