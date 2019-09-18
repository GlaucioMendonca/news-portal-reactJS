import Api from './api'

export const getNews = async ( category, page = 0 ) => await Api.get(
    `/top-headlines?country=br&category=${category}&pageSize=10&page=${page}&apiKey=suachave`
)
    
export const getLatestNews = async () => await Api.get(
    `/top-headlines?country=br&pageSize=10&apiKey=suachave`
)