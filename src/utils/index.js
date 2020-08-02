import * as Services from "../services/news";

export const fetchNewsPage = async (page) => {
  // pegar todas as noticias
  const res = await Services.getNews(page);

  // // Verificando se obtivemos resposta
  if (res.status && res.status === 200) {
      return res.data.articles
  }

  return []
}