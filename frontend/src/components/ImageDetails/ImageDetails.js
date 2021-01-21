import React, { useState } from 'react'
import cx from 'classnames'

const ImageDetails = ({ description, url, isFavorite, setFavorite, imageId }) => {
    const [hover, setIsHover] = useState(false)
    return (
        <div className='image-details' onMouseEnter={() => {
            setIsHover(true)
        }} onMouseLeave={() => {
            setIsHover(false)
        }}>
            <div className='thumbnail'>
                <img src={url} alt={description} />
            </div>
            {
                <div className={cx('description', { 'show': hover } )}>
                {description}
                </div>
            }
            <div className='extra-info'>
                <div className='favorite' onClick={() => {
                    setFavorite({ imageId, isFavorite: !isFavorite})
                }}>
                    <i className={cx('fa fa-heart', { 'is-favorite': isFavorite } )}></i>
                </div>
            </div>
        </div>
    )
}


export default ImageDetails