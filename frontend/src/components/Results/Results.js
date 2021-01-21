import React from 'react'
import { chunk } from 'lodash'
import LineImages from '../LineImages'

const Results = ({ list, maxInLine = 3, setFavorite }) => {
    return (
        <div className='results'>
            {
                chunk(list, maxInLine)
                    .map((line, idx) => {
                        return (
                           <LineImages key={`l_${idx}`} line={line} setFavorite={setFavorite} />
                        )
                    })
            }
        </div>
    )
}

export default Results