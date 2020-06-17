const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
    const apiURI = id ? (API + id) : API

    try {
        let response = await fetch(apiURI)
        let data = await response.json()
        return data
    } catch (error) {
        console.error('Fetch error', error)
    }
}

export default getData