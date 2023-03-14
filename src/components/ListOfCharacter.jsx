import { useRaM } from '../hooks/useRaM'

export function ListOfCharacter () {
  const { rickAndMortyInfo, isLoading } = useRaM('character')

  if (isLoading) return (<h1>Loading...</h1>)

  return (
    <section className='grid grid-cols-4'>
      {
      rickAndMortyInfo && rickAndMortyInfo?.map(character => {
        return (
          <div className='flex flex-col text-center' key={character.id}>
            {character.image && <img className='m-auto' src={character.image} alt={character.name} />}
            {character.name && <h3 className='text-2xl'>{character.name}</h3>}
            {character.species && <p>{character.species}</p>}
          </div>
        )
      })
    }
    </section>
  )
}
