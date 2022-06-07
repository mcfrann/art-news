import './App.css'
import { fetchData } from './apiCalls'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Articles from './Components/Articles/Articles'

function App() {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState('')
  const [loading, setIsLoading] = useState(false)

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

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Art News</h1>
        <div className='component-container'>
          <Routes>
            <Route path='/' element={<Articles articles={articles} />} />
          </Routes>
        </div>
      </header>
    </div>
  )
}

export default App
