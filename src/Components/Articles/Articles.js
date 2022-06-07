import './Articles.css'
import ArticleTile from '../ArticleTile/ArticleTile'

const Articles = ({ articles }) => {
  let counter = 0

  const tiles = articles.map((article) => (
    <ArticleTile
      key={counter++}
      genre={article.section}
      title={article.title}
      abstract={article.abstract}
      url={article.url}
      byline={article.byline}
      published={article.published_date}
      image={article.multimedia[0].url}
      alt={article.multimedia[0].caption}
    />
  ))

  return (
    <section className='articles-section'>
      <div className='tiles-container'>{tiles}</div>
    </section>
  )
}

export default Articles
