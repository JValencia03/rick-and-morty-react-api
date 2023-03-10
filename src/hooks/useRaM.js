import { useEffect, useState } from 'react'

export function useRaM (url) {
  const [rickAndMortyInfo, setRickAndMortyInfo] = useState([])

  useEffect(() => {
    async function RaMAPIFetch () {
      const res = await fetch(url)
      const data = await res.json()
      const { results } = data
      setRickAndMortyInfo(results)
    }
    RaMAPIFetch()
  }, [])

  return { rickAndMortyInfo }
}
