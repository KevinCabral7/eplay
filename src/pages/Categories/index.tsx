import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

const Categories = () => {
  const [gameAcao, setGameAcao] = useState<Game[]>([])
  const [gameRPG, setGameRPG] = useState<Game[]>([])
  const [gameLuta, setGameLuta] = useState<Game[]>([])
  const [gameEsportes, setGameEsportes] = useState<Game[]>([])
  const [gameSimulacao, setGameSimulacao] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao').then((res) =>
      res.json().then((res) => setGameAcao(res))
    )
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg').then((res) =>
      res.json().then((res) => setGameRPG(res))
    )
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta').then((res) =>
      res.json().then((res) => setGameLuta(res))
    )

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes').then((res) =>
      res.json().then((res) => setGameEsportes(res))
    )
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao').then((res) =>
      res.json().then((res) => setGameSimulacao(res))
    )
  }, [])

  return (
    <>
      <ProductsList Games={gameRPG} title="RPG" background="black" />
      <ProductsList Games={gameAcao} title="Ação" background="gray" />
      <ProductsList Games={gameLuta} title="Luta" background="black" />
      <ProductsList Games={gameEsportes} title="Esportes" background="gray" />
      <ProductsList
        Games={gameSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories
