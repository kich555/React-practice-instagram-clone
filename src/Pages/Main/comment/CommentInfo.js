import React, { Component, Fragment } from 'react';

class CommentInfo extends Component {
  state = {
    comment: '',
    editing: false,
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleToggleEdit = () => {
    const { info, onUpdate } = this.props;
    if (this.state.editing) {
      onUpdate(info.id, {
        comment: this.state.comment,
      });
    } else {
      this.setState({
        comment: info.comment,
      });
    }
    this.setState({
      editing: !this.state.editing,
    });
  };

  handleChange = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  render() {
    const { comment } = this.props.info;
    const { editing } = this.state;
    return (
      <div className="article-comment">
        {editing ? (
          <input
            className="comment-update"
            name="comment"
            placeholder="내용을 수정해 주세요"
            onChange={this.handleChange}
            value={this.state.comment}
          />
        ) : (
          <span>{comment}</span>
        )}
        <div>
          <button onClick={this.handleToggleEdit}>수정</button>
          <button onClick={this.handleRemove}>X</button>
        </div>
      </div>
    );
  }
}

export default CommentInfo;
