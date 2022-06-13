import './ArticleTile.css'
import { useNavigate } from 'react-router-dom'

const ArticleTile = ({
  id,
  genre,
  title,
  abstract,
  url,
  byline,
  image,
  alt,
  setCurrentArticle,
  filtered
}) => {
  const navigate = useNavigate()

  const directToArticle = (e) => {
    const targ = e.currentTarget.id - 1
    console.log('one article', filtered[targ])
    setCurrentArticle((prevArticle) => filtered[targ])
    navigate(`/article`)
  }

  return (
    <div className='article-tile' id={id} onClick={(e) => directToArticle(e)}>
      <div className='tile-content'>
        <div className='content'>
          <h2 className='article-title info'>{title}</h2>
          <p className='article-byline info'>{byline} </p>
        </div>
        <img src={image} alt={alt} className='article-image' />
      </div>
    </div>
  )
}

export default ArticleTile
