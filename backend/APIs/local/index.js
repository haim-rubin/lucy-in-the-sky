const { find, upsert } = require('../../dal/favorites')

const getUserIsFavories = ({ username  = 'anonymous' } = {}) => {
    return (
        find({ username })
        .then(userIsFavorites => {
            return userIsFavorites
        })
    )
}

const setUserIsFavories = ({ username  = 'anonymous', imageId, isFavorite = false }) =>{
    return (
        upsert({ username, imageId, isFavorite })
    )
}

module.exports = {
    getUserIsFavories,
    setUserIsFavories,
}