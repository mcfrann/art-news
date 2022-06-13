import './Form.css'
import search from '../../images/search.png'

const Form = ({ articles, setFiltered, input, setInput }) => {
  const handleClick = (e) => {
    e.preventDefault()
    const filtered = articles.filter(
      (article) => article.section === input.toLowerCase()
    )
    setFiltered(filtered)
    setInput('')
  }

  return (
    <form>
      <div className='dropdown'>
        <label htmlFor='select'>Filter by: </label>
        <select
          id='select'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        >
          <option value='' disabled>
            Choose
          </option>
          <option value='Arts'>Arts</option>
          <option value='Theater'>Theater</option>
          <option value='Movies'>Movies</option>
          <option value='Style'>Style</option>
          <option value='Podcasts'>Podcasts</option>
          <option value='Books'>Books</option>
        </select>
        <img
          className='search-icon'
          src={search}
          alt='search icon'
          onClick={(e) => handleClick(e)}
        />
      </div>
    </form>
  )
}

export default Form
