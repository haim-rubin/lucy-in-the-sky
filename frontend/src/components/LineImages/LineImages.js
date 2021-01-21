import React from 'react'
import ImageDetails from '../ImageDetails'

const LineImages = ({ line, setFavorite }) => {
    return (
        <div className='line-images'>
           {
           line
                .map(({ description, url, imageId, isFavorite }, idxc) => (
                    <ImageDetails
                        key={`_${idxc}`}
                        description={description}
                        url={url}
                        imageId={imageId}
                        setFavorite={setFavorite}
                        isFavorite={isFavorite} />
                ))
            }
        </div>
    )
}


export default LineImages