import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  display: block;
  width: 100%;
  height: 480px;
  position: relative;

  padding-top: 16px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after {
    content: '';
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.56;
  }
  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }
  p {
    font-size: 16px;
    margin: 16px 0;

    span {
      text-decoration: line-through;
      display: block;
    }
  }
`