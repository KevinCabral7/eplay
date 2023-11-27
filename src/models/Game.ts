class Game {
  category: string
  description: string
  title: string
  image: string
  infos: string[]
  system: string
  id: number

  constructor(
    category: string,
    description: string,
    title: string,
    image: string,
    infos: string[],
    system: string,
    id: number
  ) {
    this.category = category
    this.description = description
    this.title = title
    this.image = image
    this.infos = infos
    this.system = system
    this.id = id
  }
}

export default Game
