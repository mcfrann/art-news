import './Articles.css'
import ArticleTile from '../ArticleTile/ArticleTile'

const Articles = ({ filtered, setCurrentArticle }) => {
  let counter = 0

  const tiles = filtered.map((article) => (
    <ArticleTile
      id={(counter += 1)}
      key={counter}
      genre={article.section}
      title={article.title}
      abstract={article.abstract}
      url={article.url}
      byline={article.byline}
      published={article.published_date}
      image={article.multimedia[1].url}
      alt={article.multimedia[0].caption}
      setCurrentArticle={setCurrentArticle}
      // articles={articles}
      filtered={filtered}
    />
  ))

  return (
    <section className='articles-section'>
      <div className='tiles-container'>
        {filtered.length > 0 ? (
          tiles
        ) : (
          <div className='empty-page'>
            <h2>There aren't any articles of that genre at the moment.</h2>
          </div>
        )}
      </div>
    </section>
  )
}

export default Articles
