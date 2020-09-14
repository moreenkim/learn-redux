import React from 'react';
import { connect } from 'redux-redux';
import { getData } from '../actions/index';

class Post extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData('https://api.valentinog.com/api/link/');
  }

  render() {
    return (
      <ul>
        {this.props.articles.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10),
  };
}

export default connect(mapStateToProps, { getData })(Post);
