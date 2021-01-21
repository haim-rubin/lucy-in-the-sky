const { favorites } = require('../database')

const find = ({ username }) => {
    return Promise.resolve(favorites[username] || {})
}

const upsert = ({ username, imageId, isFavorite }) => {
    return new Promise((resolve, reject) => {
        try{

            if(!favorites[username]) {
                favorites[username] = {}
            }
            favorites[username][imageId] = isFavorite
            resolve()
        }
        catch(error) {
            reject(error)
        }
    })
}

module.exports = {
    find,
    upsert,
}