const { useState, useEffect } = React
const { useSearchParams } = ReactRouterDOM
export function SearchHeader() {
  const [searchTxt, setSearchTxt] = useState({ txt: '' })
  const [searchParams, setSearchParams] = useSearchParams()
  const debouncedSearchTerm = useDebounce(searchTxt, 1000)
  useEffect(() => {}, [searchTxt])

  function handleSearch({ target }) {
    let { value } = target
    setSearchTxt((prevReview) => ({ ...prevReview, txt: value }))
  }

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        searchParams.set('q', searchTxt.txt)
        setSearchParams([...searchParams.entries()])
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  )

  function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue(value)
        }, delay)
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => {
          clearTimeout(handler)
        }
      },
      [value, delay] // Only re-call effect if value or delay changes
    )
    return debouncedValue
  }

  return (
    <section className='search-header'>
      <input type='text' placeholder='Search here..' onChange={handleSearch} />
    </section>
  )
}
