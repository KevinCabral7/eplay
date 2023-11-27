import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'windows',
    image: 'https://place-hold.it/222x250',
    infos: ['10%', 'R$: 250,00']
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'windows',
    image: 'https://place-hold.it/222x250',
    infos: ['10%', 'R$: 250,00']
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'PS5',
    image: 'https://place-hold.it/222x250',
    infos: ['5%', 'R$: 290,00']
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'windows',
    image: 'https://place-hold.it/222x250',
    infos: ['10%', 'R$: 250,00']
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'rpg',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'windows',
    infos: ['17/05'],
    image: 'https://place-hold.it/222x250',
    title: 'diablo'
  },
  {
    id: 6,
    category: 'rpg',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'windows',
    infos: ['17/05'],
    image: 'https://place-hold.it/222x250',
    title: 'Zelda'
  },
  {
    id: 7,
    category: 'rpg',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: 'https://place-hold.it/222x250',
    title: 'diablo'
  },
  {
    id: 8,
    category: 'rpg',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'windows',
    infos: ['17/05'],
    image: 'https://place-hold.it/222x250',
    title: 'Star Wars'
  }
]

const Categories = () => (
  <>
    <ProductsList Games={promocoes} title="RPG" background="gray" />
    <ProductsList Games={emBreve} title="Ação" background="black" />
    <ProductsList Games={promocoes} title="Aventura" background="gray" />
    <ProductsList Games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
