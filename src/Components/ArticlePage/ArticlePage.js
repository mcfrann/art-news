import './ArticlePage.css'
import { useEffect } from 'react'

const ArticlePage = ({ currentArticle }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className='selected-article'>
      <h2 className='current-article-title'>{currentArticle.title}</h2>
      <img
        className='current-article-image'
        src={currentArticle.multimedia[0].url}
        alt={currentArticle.multimedia[0].copyright}
      />
      <p className='abstract'>{currentArticle.abstract}</p>
      <p className='nyt-link'>
        Read the full article with a subscription{' '}
        <a id='nytLink' href={currentArticle.url}>
          here
        </a>
        .
      </p>
    </section>
  )
}

export default ArticlePage
