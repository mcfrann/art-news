import './App.css'
import { fetchData } from './apiCalls'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Articles from './Components/Articles/Articles'
import ArticlePage from './Components/ArticlePage/ArticlePage'
import FilteredPage from './Components/FilteredPage/FilteredPage'
import Footer from './Components/Footer/Footer'
import Form from './Components/Form/Form'
import backArrow from './images/back-arrow.png'

function App() {
  const [articles, setArticles] = useState([])
  const [filtered, setFiltered] = useState([])
  const [error, setError] = useState('')
  const [loading, setIsLoading] = useState(false)
  const [currentArticle, setCurrentArticle] = useState(null)
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    loadArticles()
  }, [])

  const loadArticles = () => {
    fetchData()
      .then((data) => setArticles((prevArticles) => data.results))
      .catch((error) => setError('No new news, try again later.'))
  }

  const setLoading = () => {
    if (articles.length === 0) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }

  const navigateBack = () => {
    setCurrentArticle(null)
    navigate('/')
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='back-container'>
          {currentArticle && (
            <img
              className='back-arrow'
              src={backArrow}
              alt='back arrow'
              onClick={navigateBack}
            />
          )}
        </div>
        <h1 className='page-title'>Art News</h1>
        <div className='spacer'>
          <Form
            articles={articles}
            setFiltered={setFiltered}
            input={input}
            setInput={setInput}
          />
        </div>
      </header>
      <div className='component-container'>
        <Routes>
          <Route
            path='/'
            element={
              <Articles
                articles={articles}
                setCurrentArticle={setCurrentArticle}
              />
            }
          />
          <Route
            path='/article'
            element={<ArticlePage currentArticle={currentArticle} />}
          />
          <Route path='/filtered' element={<FilteredPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
