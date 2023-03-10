import useRaM from './hooks/useRaM'
import './App.css'

function App () {
  const { rickAndMortyInfo } = useRaM('https://rickandmortyapi.com/api/character')

  return (
    <div>
      <header>
        <h1>Rick and Mory API</h1>
        <ul>
          <li><a href='/character'>Characters</a></li>
          <li><a href='/location'>Locations</a></li>
          <li><a href='/episode'>Episodes</a></li>
        </ul>
      </header>
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
    </div>
  )
}

export default App
