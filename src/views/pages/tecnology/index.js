import React, { Component } from "react";
import * as Utils from '../../../utils';
import Articles from '../../components/article'

class tecnology extends Component {
  state = {
    articles: []
  };
  
  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    const res = await Utils.fetchNewsPage('technology')
    this.setState({ articles: res });
  };

  render() {
    return <Articles articles={ this.state.articles } />
  }
}

export default tecnology;
