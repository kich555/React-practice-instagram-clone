import React from 'react';

function CommentInfo({ commentInfo, onRemove }) {
  console.log('c')
  return (
    <div className="article-comment">
      <span>{commentInfo.comment}</span><button onClick={() => onRemove(commentInfo.id)}>X</button>
      
  </div>
  ) 
  
  // <button onClick={}> 에서 <button onClick={onRemove(commentInfo.id)}> 를 하지 않는 이유
  // onClick={someFunction()}을 해버리면 CommentList 컴포넌트가 렌더링되는 것과 동시에
  // someFunction 함수를 호출시켜버린다.
  // 이 경우 Maximum update depth exceeded. 라는 에러가 발생되는데 
  // 간단히 말해서 호출->그에 맞게 랜더->다시 호출->다시 랜더-> 다시 호출...이런 무한 반복에 빠져버린다는 뜻이다.
  // ( This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops...)
  // 만약 someFunction에 파라미터를 넣는다면, ->someFunction에(para)
  // 이 경우 cannot update a component while rendering a different component라는 경고창을 띄우며 
  // CommentList 컴포넌트가 무한 랜더링중이기 때문에 
  // Main 컴포넌트가 정상적으로 Update되지 않는다.
  // 그래서 보통 onClick={someFunction}으로 지정해서 ()를 제외하는 방법으로 함수의 즉시 실행을 막고,
  // 클릭되었을때 실행이 되도록 해주지만,
  // onRemove와 같이 실행되기 위해 파라미터가 필요한 경우,
  // onClick 에 Call back함수를 넣어줘서, 해당 함수가 실행될 때 commentInfo.id라는 파라미터를 건내주어 실행시키는 방식으로 문제를 해결할 수 있다.
}


function CommentList ({comments, onRemove}) {
  console.log('b')
  return (
    <div>
      {comments.map(commentInfo => (
        <CommentInfo commentInfo={commentInfo} key={commentInfo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default CommentList;