import './App.css'
import Results from '../Results'
import NoResults from '../NoResults'
import { useCallback, useEffect, useState } from 'react'

const App = ({ defaultList, getImages, setFavorite }) => {

  const [ list, setList ] = useState(defaultList)


  const cbGetImages = useCallback((query) => {
     
    getImages()
      .then(( list ) => {
        setList(list)
      })
    }, [ getImages])

  const cbSetFavorite = useCallback( ({ imageId, isFavorite }) => {
      setFavorite ({ imageId, isFavorite })
      .then(({ favorites }) => {
          const nList = list.map((image) => ({
            ...image,
            isFavorite: favorites[image.imageId]
          }))
          setList([...nList])
        })
    },[list, setFavorite]
  )
  useEffect(() => {
    cbGetImages()
  }, [cbGetImages])


  return (
    <div className='app' >
      {
        (
          list.length
          ? <Results
              list={list}
              setFavorite={cbSetFavorite} />
          : <NoResults/>
        )
      }
    </div>
  );
}

export default App
