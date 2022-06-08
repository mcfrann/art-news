import './ArticleTile.css'
import arrow from '../../images/arrow.png'
import { useNavigate } from 'react-router-dom'

const ArticleTile = ({
  key,
  genre,
  title,
  abstract,
  url,
  byline,
  published,
  image,
  alt
}) => {
  const navigate = useNavigate()

  const directToArticle = (e) => {
    navigate(`/article`)
  }

  return (
    <section className='article-tile' id={key}>
      <div className='tile-content' onClick={directToArticle} value={title}>
        <div className='content'>
          <h2 className='article-title info'>{title}</h2>
          <p className='article-byline info'>{byline} </p>
          <p className='article-published info'>{published} </p>
          {/* <img className='arrow info' src={arrow} alt='arrow png' /> */}
        </div>
        <img src={image} alt={alt} className='article-image' />
      </div>
    </section>
  )
}

export default ArticleTile
