import './App.css'
import { fetchData } from './apiCalls'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Articles from './Components/Articles/Articles'
import ArticlePage from './Components/ArticlePage/ArticlePage'
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
    setLoading()
  }, [articles])

  const loadArticles = () => {
    fetchData()
      .then((data) => {
        setArticles((prevArticles) => data.results)
        setFiltered((prevFiltered) => data.results)
      })
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

  const directHome = () => {
    setFiltered(articles)
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
        <h1 className='page-title' onClick={directHome}>
          Art News
        </h1>
        <div className='spacer'>
          {!currentArticle && (
            <Form
              articles={articles}
              setFiltered={setFiltered}
              input={input}
              setInput={setInput}
            />
          )}
        </div>
      </header>
      <div className='component-container'>
        {isLoading === false ? (
          <Routes>
            <Route
              path='/'
              element={
                <Articles
                  filtered={filtered}
                  setCurrentArticle={setCurrentArticle}
                />
              }
            />
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
              height={200}
              width={200}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default App
