import { ListOfCharacter } from './components/ListOfCharacter'
import { ListOfLocation } from './components/ListOfLocation'
import { Routes, Route, NavLink } from 'react-router-dom'
import { ListOfEpisode } from './components/ListOfEpisode'
import { NotFoundPage } from './components/NotFoundPage'
import './App.css'

function App () {
  return (
    <div>
      <header>
        <h1>Rick and Mory API</h1>
        <nav>
          <ul>
            <li><NavLink to='/character'>Characters</NavLink></li>
            <li><NavLink to='/location'>Locations</NavLink></li>
            <li><NavLink to='/episode'>Episodes</NavLink></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<ListOfCharacter />} />
        <Route path='/character' element={<ListOfCharacter />} />
        <Route path='/location' element={<ListOfLocation />} />
        <Route path='/episode' element={<ListOfEpisode />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
