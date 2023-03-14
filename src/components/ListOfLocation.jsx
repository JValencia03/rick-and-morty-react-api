import { useRaM } from '../hooks/useRaM'

export function ListOfLocation () {
  const { rickAndMortyInfo } = useRaM('location')

  return (
    <section className='grid grid-cols-4 gap-6'>
      {
      rickAndMortyInfo && rickAndMortyInfo?.map(location => {
        return (
          <div key={location.id}>
            <h3>{location.name}</h3>
            <p>{location.type}</p>
            <p>{location.dimension}</p>
          </div>
        )
      })
    }
    </section>
  )
}
