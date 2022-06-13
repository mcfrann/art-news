import './App.css'
import { fetchData } from './apiCalls'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Articles from './Components/Articles/Articles'
import ArticlePage from './Components/ArticlePage/ArticlePage'
import FilteredPage from './Components/FilteredPage/FilteredPage'
import Footer from './Components/Footer/Footer'
import Form from './Components/Form/Form'
import ReactLoading from 'react-loading'
import backArrow from './images/back-arrow.png'

function App() {
  const [articles, setArticles] = useState([])
  const [filtered, setFiltered] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentArticle, setCurrentArticle] = useState(null)
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    loadArticles()
  }, [])

  useEffect(() => {
    if (input === 'All') {
      setFiltered([])
    }
  }, [])

  useEffect(() => {
    setLoading()
  }, articles)

  const loadArticles = () => {
    fetchData()
      .then((data) => setArticles((prevArticles) => data.results))
      .then(setIsLoading(false))
      .catch((error) => setError('No new news, try again later.'))
  }

  const setLoading = () => {
    if (articles.length > 0) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
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
        {isLoading === false ? (
          <Routes>
            {filtered.length === 0 && (
              <Route
                path='/'
                element={
                  <Articles
                    articles={articles}
                    setCurrentArticle={setCurrentArticle}
                  />
                }
              />
            )}
            {filtered.length > 0 && (
              <Route
                path='/filtered'
                element={<FilteredPage filtered={filtered} />}
              />
            )}
            <Route
              path='/article'
              element={<ArticlePage currentArticle={currentArticle} />}
            />
          </Routes>
        ) : (
          <div className='loading-page'>
            <ReactLoading
              type='spinningBubbles'
              color='#0E1117'
              height={667}
              width={375}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default App
