const fetch = require('node-fetch')
const host = 'https://api.jonathanczyzyk.com/api/v1/images/small'
const headers = {
    'x-api-key':'api-key-a163c042-697e-4a7e-abef-818597ff3d07',
}
const getImages = () => {
    return (
        fetch(host, {
            method: 'GET',
            mode: 'cors',
            headers
        })
        .then(res => {
            return res
        })
        .then(res => res.json())
    )
}

module.exports = {
    getImages,
}