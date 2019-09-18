import React, { Component } from "react";
import * as Services from "../../../services/news";
import Articles from '../../components/article'

class healt extends Component {
  state = {
    articles: []
  };
  
  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    // pegar todas as noticias
    const res = await Services.getNews('health');

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

export default healt;