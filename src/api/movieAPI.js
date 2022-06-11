import axiosClient from "./axiosClient";

const movieAPI = {
  getPopularHome(API_Key) {
      const url = `movie/popular?api_key=${API_Key}&language=en-US`
      return axiosClient.get(url)
  },
  getTrailerHome(API_Key,id) {
    const url = `movie/${id}/videos?api_key=${API_Key}&language=en-US`
    return axiosClient.get(url)
  },
  getMovieInfo(API_Key,id){
    const url =`movie/${id}?api_key=${API_Key}&language=en-US`
    return axiosClient.get(url)
  },
  getMovieCast(API_Key,id) {
    const url = `movie/${id}/credits?api_key=${API_Key}&language=en-US`
    return axiosClient.get(url)
  },
  getMovieExternalId(API_Key,id) {
    const url = `movie/${id}/external_ids?api_key=${API_Key}`
    return axiosClient.get(url)
  },
  getMovieRecommend(API_Key,id){
    const url = `movie/${id}/recommendations?api_key=${API_Key}&language=en-US&page=1`
    return axiosClient.get(url)
  },
  getMoviePopular(API_Key,page) {
    const url = `movie/popular?api_key=${API_Key}&language=en-US&page=${page}`
    return axiosClient.get(url)
  },
  getMovieNowPlaying(API_Key,page){
    const url = `movie/now_playing?api_key=${API_Key}&language=en-US&page=${page}`
    return axiosClient.get(url)
  },
  getMovieUpcoming(API_Key,page){
    const url = `movie/upcoming?api_key=${API_Key}&language=en-US&page=${page}`
    return axiosClient.get(url)
  },
  getMovieToprated(API_Key,page){
    const url = `movie/top_rated?api_key=${API_Key}&language=en-US&page=${page}`
    return axiosClient.get(url)
  },
  getMovieGenres(API_Key) {
    const url = `genre/movie/list?api_key=${API_Key}&language=en-US`
    return axiosClient.get(url)
  }
};

export default movieAPI;
