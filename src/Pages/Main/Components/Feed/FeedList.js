import React, { useRef, useState, useEffect } from 'react';
import CommentList from '../comment/CommentList';
import CreateComment from '../comment/CreateComment';

function Feed({feed}) {

  const [inputs, setInputs] = useState({
    comment: '',
  });

  const {comment} = inputs;

  const onChange = e => {
    setInputs({
      comment: e.target.value,
    });
  };

//Error: Objects are not valid as a React child (found: object with keys {id, comment}). If you meant to render a collection of children, use an array instead. <-- comments = [comment{ id, comment}] <--원하던 것은 댓글값인 comment 였지만 comment객체와 파라미터값의 이름이 똑같아 오류가 발생 comment객체 이름을 commentInfo로 변경

  const [comments, setComments] = useState([
    // {
    //   id: 1,
    //   comment: 'Beautiful weather',
    // },
    // {
    //   id: 2,
    //   comment: 'What a nice pic!! Who took the picture???',
    // },
  ]);

  useEffect(() => {
  fetch('http://localhost:3000/data/ComponentData.json')
  .then(res => res.json())
  .then(res => {
    setComments(
      res.CL,
    )
  })
},[])

  const nextId = useRef(3);

  const onCreate = (e) => {
    const commentInfo = {
      comment,
      id: nextId.current,

    }
    setComments([...comments, commentInfo]);
// comments의 불변성을 지키며 새 항목을 추가
    setInputs({
      comment:'',
    });
    nextId.current += 1; //useRef() 를 사용 할 때 파라미터를 넣으면 이 값이 .current 값의 기본값이 됨
  }

  const onSubmit = e => {
    e.preventDefault();
    onCreate();
  }

  const onRemove = id => {
    setComments(comments.filter(commentInfo => commentInfo.id !== id));
  }
  

  // handleCreate = data => {
  //   const { information } = this.state;
  //   this.setState({
  //     information: information.concat(
  //       Object.assign({}, data, {
  //         id: this.id++,
  //       })
  //     ),
  //   });
  // };

  // handleRemove = id => {
  //   const { information } = this.state;
  //   this.setState({
  //     information: information.filter(info => info.id !== id),
  //     // info.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  //     // 선택한 'id'를 제외한 나머지 id들로 새로운 배열을 만들어서 표시함
  //     // info.id 가 id 인 것을 제거함
  //   });
  // };

  // handleUpdate = (id, data) => {
  //   const { information } = this.state;
  //   this.setState({
  //     information: information.map(info => {
  //       if (info.id === id) {
  //         return {
  //           id,
  //           ...data,
  //         };
  //       }
  //       return info;
  //     }),
  //   });
  // };
  
  return (
    <article>
    <header className="article-header">
      <div className="article-div">
        <div className="article-header-profile">
          <a
            className="article-header-profile-link"
            href="https://www.instagram.com/kich555/"
          >
            <img
              className="article-header-profile-img"
              src={feed.profileImg}
              alt=""
            />
          </a>
        </div>
        <div className="span-box">
          <span>
            <a
              className="bold"
              href="https://www.instagram.com/kich555/"
            >
              kich555
            </a>
          </span>
          <span>
            <a
              className="sub"
              href="https://www.instagram.com/kich555/"
            >
              Wecode-위코드
            </a>
          </span>
        </div>
      </div>
      <div className="article-header-button-box">
        <a className="article-header-button">...</a>
      </div>
    </header>
    <div className="article-img">
      <img
        className="article-img"
        src={feed.mainImg}
      />
    </div>
    <div className="article-text">
      <section className="article-text-icon">
        <div className="right-icon">
          <div className="icono-heart span" />
          <div className="icono-disqus span" />
          <div className="icono-locationArrow span" />
        </div>
        <div className="icono-bookmarkEmpty span" />
      </section>
      <section className="article-text1">
        <a href="https://www.instagram.com/kich555/">
          <img
            className="article-text1-img"
            src="https://images.unsplash.com/photo-1520315342629-6ea920342047?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            alt=""
          />
        </a>
        <span className="bold">nyangnya29</span>
        <span className="basic">님 </span>
        <span className="bold">외 284명</span>
        <span className="basic">이 좋아합니다</span>
      </section>
      <div className="article-text2">
        <span className="bold">kich555</span>
        <span className="basic">하늘은 영어로 sky...</span>
        <a className="view-more">더 보기</a>
      </div>
      <div className="article-text3">
        <CommentList comments={comments} onRemove={onRemove} />
      </div>
      <div className="posted-time">
        <span className="time">12시간 전</span>
      </div>
      <section className="comment">
        <div className="comment-box">
          <CreateComment comment={comment} onChange={onChange} onCreate={onCreate} onSubmit={onSubmit} />
        </div>
      </section>
    </div>
  </article>
  )
}

function FeedList({feeds}) {
  return (
    <>
   {feeds.map(feed => (
     <Feed feed={feed} key={feed.id} profileImg={feed.profileImg} mainImg={feed.mainImg} />
   ))}
   </>
    );
  };




export default FeedList;