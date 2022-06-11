import axiosClient from './axiosClient'

const searchAPI = {
    getSearchData(API_Key,keyword,page) {
        const url = `search/multi?api_key=${API_Key}&language=en-US&query=${keyword}&page=${page}`
        return axiosClient.get(url)
    }
}

export default searchAPI