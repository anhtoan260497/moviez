import axiosClient from "./axiosClient"

const trendingAPI = {
    getTrendingToday(API_Key) {
        const url = `trending/all/day?api_key=${API_Key}`
        return axiosClient.get(url)
    },
    getTrendingWeek(API_Key) {
        const url=`trending/all/week?api_key=${API_Key}`
        return axiosClient.get(url)
    }

}

export default trendingAPI