
const get = ({ url }) => (
    fetch(url)
        .then(res => {
            return res
        })
        .then(res => res.json())
        .catch(error => {
            console.log(error)
            throw error
        })
)

const put = ({ url, body }) => (
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => {
        return res
    })
    .then(res => res.json())
    .catch(error => {
        console.log(error)
        throw error
    })
)

export const getImages = () => {
    return (
        get({url: `/api/images` })
        .catch(() => [])
    )
   
}

export const getFavorites = () => {
    return (
        get({ url: `/api/images/favorites` })
        .catch(() => {})
    )
}

export const setFavorite = ({ imageId, isFavorite }) => {
    return (
        put({ url: `/api/images/${imageId}/favorites`, body: { isFavorite } })
        .catch(() => {})
    )
   
}

const mergeImagesWithFavorites = (list, favorites) => {
    const merged = list.map((item, idx) => ({
        ...item,
        isFavorite: favorites[item.url],
        imageId: idx,
    }))
    return merged
}

export const getImagesWithFavorites = () => {
    return (
        Promise
            .all([
                getImages(),
                getFavorites()
            ])
            .then(([{ list }, { favorites }]) => {
                return (
                    mergeImagesWithFavorites(list, favorites)
                )
            })
            .catch(() => [])
    )
   
}

