
import axiosClient from "./axiosClient"

const tvAPI = {
    getPopularHome (API_Key) {
        const url = `/tv/popular?api_key=${API_Key}&language=en-US`
        return axiosClient.get(url)
    },
    getTrailerHome (API_Key,id) {
        const url = `tv/${id}/videos?api_key=${API_Key}&language=en-US`
        return axiosClient.get(url)
    },
    getTvInfo (API_Key,id) {
        const url = `tv/${id}?api_key=${API_Key}&language=en-US`
        return axiosClient.get(url)
    },
    getTvCast (API_Key,id) {
        const url = `tv/${id}/credits?api_key=${API_Key}&language=en-US`
        return axiosClient.get(url)
    },
    getTvExternalId (API_Key,id) {
        const url = `tv/${id}/external_ids?api_key=${API_Key}&language=en-US`
        return axiosClient.get(url)
    },
    getTvRecommend(API_Key,id) {
        const url =`tv/${id}/recommendations?api_key=${API_Key}&language=en-US&page=1`
        return axiosClient.get(url)
    },
    getTvPopular(API_Key,page){
        const url = `tv/popular?api_key=${API_Key}&language=en-US&page=${page}`
        return axiosClient.get(url)
    },
    getTvAiring(API_Key,page){
        const url = `tv/airing_today?api_key=${API_Key}&language=en-US&page=${page}`
        return axiosClient.get(url)
    },
    getTvOnTv(API_Key,page){
        const url = `tv/on_the_air?api_key=${API_Key}&language=en-US&page=${page}`
        return axiosClient.get(url)
    },
    getTvTopRated(API_Key,page){
        const url = `tv/top_rated?api_key=${API_Key}&language=en-US&page=${page}`
        return axiosClient.get(url)
    }, 
    getTvGenres(API_Key) {
        const url = `genre/tv/list?api_key=${API_Key}&language=en-US`
        return axiosClient.get(url)
      }
}

export default tvAPI