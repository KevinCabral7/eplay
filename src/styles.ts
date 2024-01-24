import { createGlobalStyle } from 'styled-components'

export const colors = {
  green: '#10AC84',
  black: '#111111',
  gray: '#333333',
  white: '#EEEEEE',
  lightGray: '#a3a3a3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCSS = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${colors.white};
    list-style: none;
    text-decoration: none;

  }
  body{
    background-color: ${colors.black};
    padding-top: 40px;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media(max-width: ${breakpoints.desktop}){
      max-width: 80%;
    }
  }
`
