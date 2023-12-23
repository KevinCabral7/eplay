import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList Games={rpgGames} title="RPG" background="black" />
        <ProductsList Games={actionGames} title="Ação" background="gray" />
        <ProductsList Games={fightGames} title="Luta" background="black" />
        <ProductsList Games={sportGames} title="Esportes" background="gray" />
        <ProductsList
          Games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Categories
