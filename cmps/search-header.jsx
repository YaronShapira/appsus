const { useState, useEffect } = React
const { useSearchParams } = ReactRouterDOM
export function SearchHeader() {
  const [searchTxt, setSearchTxt] = useState({ txt: '' })
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    if (searchParams.get('q')) {
      setSearchTxt({ txt: searchParams.get('q') })
    } else {
      setSearchTxt({ txt: '' })
    }
  }, [searchParams])

  function handleSearch({ target }) {
    let { value } = target
    setSearchTxt((prevSearchTxt) => ({ ...prevSearchTxt, txt: value }))
    setSearchParams({ q: target.value })
  }

  return (
    <section className='search-header'>
      <input
        type='text'
        placeholder='Search here..'
        value={searchTxt.txt}
        onChange={handleSearch}
      />
    </section>
  )
}
