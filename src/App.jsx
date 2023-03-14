import { ListOfCharacter } from './components/ListOfCharacter'
import { ListOfLocation } from './components/ListOfLocation'
import { ListOfEpisode } from './components/ListOfEpisode'
import { Routes, Route, NavLink } from 'react-router-dom'
import { NotFoundPage } from './components/NotFoundPage'
import './App.css'

function App () {
  return (
    <div>
      <header>
        <h1 className='text-5xl pt-6 text-center'>Rick and Morty API</h1>
        <nav>
          <ul className='flex flex-row justify-around p-8 text-2xl'>
            <li><NavLink to='/character'>Characters</NavLink></li>
            <li><NavLink to='/location'>Locations</NavLink></li>
            <li><NavLink to='/episode'>Episodes</NavLink></li>
          </ul>
        </nav>
      </header>
      <main className='m-auto'>
        <Routes>
          <Route path='/' element={<ListOfCharacter />} />
          <Route path='/character' element={<ListOfCharacter />} />
          <Route path='/location' element={<ListOfLocation />} />
          <Route path='/episode' element={<ListOfEpisode />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
