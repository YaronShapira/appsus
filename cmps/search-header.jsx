const { useState, useEffect } = React
const { useSearchParams } = ReactRouterDOM
export function SearchHeader() {
  const [searchTxt, setSearchTxt] = useState({ txt: '' })
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {}, [searchTxt])

  function handleSearch({ target }) {
    let { value } = target
    setSearchTxt((prevReview) => ({ ...prevReview, txt: value }))
    setSearchParams({ q: target.value })
  }

  return (
    <section className='search-header'>
      <input type='text' placeholder='Search here..' onChange={handleSearch} />
    </section>
  )
}
