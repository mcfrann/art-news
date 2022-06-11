import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='resources'>
        <p className='credit'>
          Site inspiration from{' '}
          <a href='https://criticalmass.com/work' target='_blank'>
            <b>Critical Mass</b>
          </a>
        </p>
        <p className='credit'>
          Read more articles at{' '}
          <a
            href='https://www.nytimes.com/subscription?campaignId=8HHWL&ds_c=71700000096479712&gclid=Cj0KCQjw-pCVBhCFARIsAGMxhAfNEDxpx2Up_BNQV63jx_75wvaKg6jM5JlYhEo5GEfcV8hOpvFR6mYaAt-hEALw_wcB&gclsrc=aw.ds'
            target='_blank'
          >
            <b>New York Times</b>
          </a>
        </p>
      </div>
      <div className='site-info'>
        <p>
          Site built by{' '}
          <a
            className='github-link'
            href='https://github.com/mcfrann/art-news'
            target='_blank'
          >
            <b>Francesca McConnell</b>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
