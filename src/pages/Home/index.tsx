import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'
export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSalesGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSalesGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          Games={onSalesGames}
          title="Promoções"
          background="gray"
        />
        <ProductsList Games={soonGames} title="Em breve" background="black" />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Home
