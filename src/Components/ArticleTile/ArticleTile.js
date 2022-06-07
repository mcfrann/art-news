import './ArticleTile.css'

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
  return (
    <section
      src={image}
      className='article-tile'
      id={key}
      style={{
        backgroundImage: `url(${image})`,
        // height: '100%',
        // width: '100%',
        objectFit: 'cover'
      }}
    >
      <div className='tile-content'>
        <h2 className='article-title'>{title}</h2>
        <p className='article-byline'>{byline}</p>
      </div>
    </section>
  )
}

export default ArticleTile
