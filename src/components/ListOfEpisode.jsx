import { useRaM } from '../hooks/useRaM'

export function ListOfEpisode () {
  const { rickAndMortyInfo } = useRaM('episode')

  return (
    <section className='grid grid-cols-4 gap-6'>
      {
      rickAndMortyInfo && rickAndMortyInfo?.map(episode => {
        return (
          <div key={episode.id}>
            <h3>{episode.name}</h3>
            <p>{episode.air_date}</p>
            <p>{episode.episode}</p>
          </div>
        )
      })
    }
    </section>
  )
}
