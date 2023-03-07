export async function RaMAPIFetch (endpoint = 'character') {
  const res = await fetch(`https://rickandmortyapi.com/api/${endpoint}`)
  const data = await res.json()
  const { results } = data
  return results
}
