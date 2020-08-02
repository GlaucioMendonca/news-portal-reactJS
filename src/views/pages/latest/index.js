import React, { Component } from "react";
import * as Utils from '../../../utils';
import Articles from '../../components/article';

class latest extends Component {
  state = {
    articles: []
  };
  
  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    const res = await Utils.fetchNewsPage('')
    this.setState({ articles: res });
  };

  render() {
    return <Articles articles={ this.state.articles } />
  }
}

export default latest;
