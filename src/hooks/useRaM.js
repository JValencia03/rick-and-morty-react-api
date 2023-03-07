import { useEffect, useState } from 'react'

function useRaM () {
  const [rickAndMortyInfo, setRickAndMortyInfo] = useState([])
  const [endpoint, endpointValue] = useState()

  useEffect(() => {
    endpointValue(() => {

    })
    async function RaMAPIFetch (endpoint = 'character') {
      const res = await fetch(`https://rickandmortyapi.com/api/${endpoint}`)
      const data = await res.json()
      const { results } = data
      setRickAndMortyInfo(results)
    }
    RaMAPIFetch()
  }, [])

  return { rickAndMortyInfo, endpoint }
}

export default useRaM
