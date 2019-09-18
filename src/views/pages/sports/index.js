import React, { Component } from "react";
import * as Services from "../../../services/news";
import Articles from '../../components/article'

class sports extends Component {
  state = {
    articles: []
  };
  
  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    // pegar todas as noticias
    const res = await Services.getNews('sports');

    // Verificando se obtivemos resposta
    if (res.status && res.statusText === "OK") {
      this.setState({
        articles: res.data.articles
      });
    }
  };

  render() {
    return <Articles articles={ this.state.articles } />
  }
}

export default sports;
