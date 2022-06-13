import './Form.css'

const Form = ({ articles, setFiltered, input, setInput }) => {
  const handleClick = (e) => {
    e.preventDefault()
    if (input.toLowerCase() != 'All') {
      const filtered = articles.filter(
        (article) => article.section === input.toLowerCase()
      )
      setFiltered(filtered)
    }
    setInput('')
  }

  return (
    <form>
      <div className='inputs-wrapper'>
        <div className='single-input'>
          <label htmlFor='genre-select'>Genre:</label>
          <select
            id='genre-select'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          >
            <option value='All'>All</option>
            <option value='Arts'>Arts</option>
            <option value='Theater'>Theater</option>
            <option value='Movies'>Movies</option>
            <option value='Style'>Style</option>
            <option value='Podcasts'>Podcasts</option>
            <option value='Books'>Books</option>
          </select>
        </div>
      </div>
      <button onClick={(e) => handleClick(e)}>Filter</button>
    </form>
  )
}

export default Form
