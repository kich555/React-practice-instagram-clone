import React, { Component } from 'react';
import CommentInfo from './CommentInfo';

class CommentList extends Component {
  static defaultProps = {
    data: [],
  };

  render() {
    const { data, onRemove, onUpdate } = this.props;

    const list = data.map(info => (
      <CommentInfo
        onUpdate={onUpdate}
        onRemove={onRemove}
        info={info}
        key={info.id}
      />
    ));
    return <>{list}</>;
  }
}

export default CommentList;
