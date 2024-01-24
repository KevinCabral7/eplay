import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}
type RowProps = {
  marginTop?: string
}
type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  input,
  select,
  option {
    color: ${colors.black};
    background-color: ${colors.white};
    height: 22px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    width: 100%;
    &.error {
      border: 1px solid red;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
