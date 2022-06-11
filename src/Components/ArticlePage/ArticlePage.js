import './ArticlePage.css'

const ArticlePage = ({ currentArticle }) => {
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
        Read the full article here: {currentArticle.url}
      </p>
    </section>
  )
}

export default ArticlePage
