import React, { Component } from "react";
import Articles from '../../components/article';
import * as Utils from '../../../utils';

class healt extends Component {
  state = {
    articles: []
  };
  
  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    const res = await Utils.fetchNewsPage('health')
    this.setState({ articles: res });
  };

  render() {
    return <Articles articles={ this.state.articles } />
  }
}

export default healt;
