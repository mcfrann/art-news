import './Articles.css'
import ArticleTile from '../ArticleTile/ArticleTile'

const Articles = ({ articles }) => {
  const tiles = () => {
    let counter = 0
    articles.map((article) => {
      counter += 1
      return (
        <ArticleTile
          key={counter}
          genre={article.section}
          title={article.title}
          abstract={article.abstract}
          url={article.url}
          byline={article.byline}
          published={article.published_date}
          image={article.multimedia.url}
          alt={article.multimedia.caption}
        />
      )
    })
  }
  return <section className='articles-section'>{tiles}</section>
}

export default Articles
