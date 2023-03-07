import './App.css'
import useRaM from './hooks/useRaM'

function App () {
  const { rickAndMortyInfo } = useRaM()

  return (
    <div>
      <header>
        <h1>Rick and Mory API</h1>
        <ul>
          <li><button>Characters</button></li>
          <li><button>Locations</button></li>
          <li><button>Episodes</button></li>
        </ul>
      </header>
      <main>
        <section>
          {
          rickAndMortyInfo?.map(character => {
            return (
              <div key={character.id}>
                <h3>{character.name}</h3>
                <p>{character.location.name}</p>
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
