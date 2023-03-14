import { useEffect, useState } from 'react'

export function useRaM (resource) {
  const [rickAndMortyInfo, setRickAndMortyInfo] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function RaMAPIFetch () {
      setIsLoading(false)
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/${resource}`)
        const data = await res.json()
        const { results } = data
        setRickAndMortyInfo(results)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    RaMAPIFetch()
  }, [resource])
  return { rickAndMortyInfo, isLoading }
}
