import Api from './api'

export const getNews = async ( category, page = 0 ) => await Api.get(
    `/top-headlines?country=br&category=${category}&pageSize=10&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
)