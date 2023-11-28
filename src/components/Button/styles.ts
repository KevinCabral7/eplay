import { styled } from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(Props) =>
    Props.variant === 'primary' ? colors.green : 'transparent'};
  border: 2px solid
    ${(Props) => (Props.variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`
