import React, { Component } from 'react';

class CommentForm extends Component {
  state = {
    comment: '',
  };

  handleChange = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      comment: '',
    });
  };

  handleEnter = e => {};

  render() {
    const { comment } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="comment-box-form">
          <div className="comment-box-form-box">
            <div className="article-header-profile">
              <a
                className="article-header-profile-link"
                href="https://www.instagram.com/kich555/"
              >
                <img
                  className="article-header-profile-img"
                  src="https://bit.ly/3AyTdmS"
                  alt="profile"
                />
              </a>
            </div>
            <input
              id="textarea"
              placeholder="댓글 달기..."
              onChange={this.handleChange}
              value={comment}
            />
          </div>
          <button className="text-up-btn" type="submit">
            게시
          </button>
        </form>
      </>
    );
  }
}

export default CommentForm;
