import React, { Component } from 'react';
import {
  Container,
  Header,
  Button
} from 'semantic-ui-react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getPostData } from '../actions/index'
import { withRouter } from 'react-router-dom';

class Posts extends Component {

  state = {
    isActive: false
  }

  constructor(props) {
    super(props)
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData = () => {
    this.setState({ loading: true })
    this.props.getPostData()
  }

  render() {
    console.log("Props", this.props);
    return (
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Semantic UI React Thunk Template</Header>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>
          A text container is used for the main container, which is useful for single column layouts.
                </p>
        <Button primary onClick={this.fetchData}>Fetch</Button>
        <br />
        {this.props && this.props.postlist && this.props.postlist.map((item, i) =>
          <li key={i}>{item.title}</li>
        )}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPostData
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts))
