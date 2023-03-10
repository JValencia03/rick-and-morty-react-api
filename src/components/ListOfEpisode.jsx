import { useRaM } from '../hooks/useRaM'

export function ListOfEpisode () {
  const { rickAndMortyInfo } = useRaM('https://rickandmortyapi.com/api/episode')

  return (
    <main>
      <section>
        {
      rickAndMortyInfo && rickAndMortyInfo?.map(character => {
        return (
          <div key={character.id}>
            <h3>{character.name}</h3>
            <p>{character.name}</p>
            <img src={character.image} alt={character.name} />
          </div>
        )
      })
    }
      </section>
    </main>
  )
}
