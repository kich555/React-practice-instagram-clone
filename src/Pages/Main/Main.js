import React, { useRef, useState, useEffect } from 'react';
import './Main.scss';
import CreateComment from './Components/comment/CreateComment';
import CommentList from './Components/comment/CommentList';
import FootList from './Components/Footer/FootList';
// import "../../style/common.scss";
function Main() {



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
  fetch('http://localhost:3001/data/ComponentData.json')
  .then(res => res.json())
  .then(res => {
    setComments(
      res.CL,
    )
  })
},[])

const [footers, setFooters] = useState([]);

useEffect(() => {
  fetch('http://localhost:3001/data/footer.json')
  .then(res => res.json())
  .then(res => {
    setFooters(
      res.footers,
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
      <div className="KyungHyunMain">
        <header className="main-header">
          <nav>
            <div className="home-img-box">
              <a href="https://www.instagram.com/">
                <img
                  className="home-img"
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                  alt="home"
                />
              </a>
            </div>
            <div>
              <input type="text" className="search" placeholder="검색" />
            </div>
            <div className="icon-box">
              <div className="icon-box2">
                <a className="profile icon">
                  {' '}
                  <img
                    className="icon-btn"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  />
                </a>
                <a className="profile icon">
                  {' '}
                  <img
                    className="icon-btn"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </a>
                <a className="profile icon">
                  <img
                    className="profile icon-btn"
                    src="https://images.velog.io/images/kich555/profile/5ed64ce8-0f40-49a4-bcc2-ed8d4f7649c3/social.jpeg"
                  />
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <section className="main-section">
            <div className="article-box">
              <div className="story-box">
                <div className="story-space">
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
                        alt="user1"
                      />
                    </a>
                    <a className="small-basic2" href>
                      doyun1359
                    </a>
                  </div>
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1592843875827-a524529cabed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
                        alt="user2"
                      />
                    </a>
                    <a className="small-basic2" href>
                      soolfnj
                    </a>
                  </div>
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1534390602739-373bbe1f955f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                        alt="user3"
                      />
                    </a>
                    <a className="small-basic2" href>
                      g.hanane
                    </a>
                  </div>
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1603876709863-0a501b68a58d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
                        alt="user4"
                      />
                    </a>
                    <a className="small-basic2" href>
                      channleop
                    </a>
                  </div>
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="user5"
                      />
                    </a>
                    <a className="small-basic2" href>
                      sunisuni
                    </a>
                  </div>
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="user6"
                      />
                    </a>
                    <a className="small-basic2" href>
                      vitorio21
                    </a>
                  </div>
                  <div className="story-list-box">
                    <a className="story-a" href>
                      <img
                        className="story-img"
                        src="https://images.unsplash.com/photo-1520315342629-6ea920342047?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                        alt="user7"
                      />
                    </a>
                    <a className="small-basic2" href>
                      nyangnya29
                    </a>
                  </div>
                </div>
              </div>
              <div className="feed-box">
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
                            src="https://images.velog.io/images/kich555/profile/5ed64ce8-0f40-49a4-bcc2-ed8d4f7649c3/social.jpeg"
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
                      src="https://images.unsplash.com/photo-1618141782840-40c041c58821?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80"
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
              </div>
            </div>
            <aside>
              <div className="article-header">
                <div className="article-div">
                  <div className="my-profile article-header-profile">
                    <a
                      className="article-header-profile-link"
                      href="https://www.instagram.com/kich555/"
                    >
                      <img
                        className="article-header-profile-img"
                        src="https://images.velog.io/images/kich555/profile/5ed64ce8-0f40-49a4-bcc2-ed8d4f7649c3/social.jpeg"
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
                        upset
                      </a>
                    </span>
                  </div>
                </div>
                <div>
                  <a className="change-btn">전환</a>
                </div>
              </div>
              <div className="aside-main">
                <div className="aside-main-box1">
                  <span style={{ color: '#8e8e8e' }} className="bold">
                    회원님을 위한 추천
                  </span>
                  <a
                    href="https://www.instagram.com/explore/people/suggested/"
                    className="small-basic2"
                  >
                    모두 보기
                  </a>
                </div>
                <div className="aside-main-box2">
                  <div className="article-header">
                    <div className="article-div">
                      <div className="article-header-profile">
                        <a
                          className="article-header-profile-link"
                          href="https://www.instagram.com/kich555/"
                        >
                          <img
                            className="article-header-profile-img"
                            src="https://images.unsplash.com/photo-1631213717462-1cac02745998?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="span-box">
                        <span className="bold">Jonathan265</span>
                        <span className="small-basic">
                          Did I turn off the gas stove?
                        </span>
                      </div>
                    </div>
                    <div>
                      <a className="change-btn">팔로우</a>
                    </div>
                  </div>
                </div>

                <div className="article-header">
                  <div className="article-div">
                    <div className="article-header-profile">
                      <a
                        className="article-header-profile-link"
                        href="https://www.instagram.com/kich555/"
                      >
                        <img
                          className="article-header-profile-img"
                          src="https://images.unsplash.com/photo-1558346489-19413928158b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="span-box">
                      <span className="bold">WineLover</span>
                      <span className="small-basic">
                        To me, wine is a water
                      </span>
                    </div>
                  </div>
                  <div>
                    <a className="change-btn">팔로우</a>
                  </div>
                </div>
                <div className="article-header">
                  <div className="article-div">
                    <div className="article-header-profile">
                      <a
                        className="article-header-profile-link"
                        href="https://www.instagram.com/kich555/"
                      >
                        <img
                          className="article-header-profile-img"
                          src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=912&q=80"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="span-box">
                      <span className="bold">Nugget723</span>
                      <span className="small-basic">Come on pet me!!</span>
                    </div>
                  </div>
                  <div>
                    <a className="change-btn">팔로우</a>
                  </div>
                </div>
                <div className="article-header">
                  <div className="article-div">
                    <div className="article-header-profile">
                      <a
                        className="article-header-profile-link"
                        href="https://www.instagram.com/kich555/"
                      >
                        <img
                          className="article-header-profile-img"
                          src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="span-box">
                      <span className="bold">Cathy_the_queen</span>
                      <span className="small-basic">Everybody wants me</span>
                    </div>
                  </div>
                  <div>
                    <a className="change-btn">팔로우</a>
                  </div>
                </div>

                <div className="article-header">
                  <div className="article-div">
                    <div className="article-header-profile">
                      <a
                        className="article-header-profile-link"
                        href="https://www.instagram.com/kich555/"
                      >
                        <img
                          className="article-header-profile-img"
                          src="https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=963&q=80"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="span-box">
                      <span className="bold">Harry_the_cat</span>
                      <span className="small-basic">I'm hungry</span>
                    </div>
                  </div>
                  <div>
                    <a className="change-btn">팔로우</a>
                  </div>
                </div>
              </div>
              <div className="aside-buttom">
                <ul className="aside-buttom-ul">
                  <FootList footers={footers} />
                  {/* <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      target="_blank"
                      href="https://about.instagram.com/"
                      rel="noreferrer"
                    >
                      소개·
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://help.instagram.com/"
                    >
                      도움말·
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://about.instagram.com/blog"
                    >
                      홍보 센터·
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      target="_blank"
                      href="https://developers.facebook.com/docs/instagram"
                      rel="noreferrer"
                    >
                      API·
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://about.instagram.com/about-us/careers"
                    >
                      채용 정보·
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://help.instagram.com/519522125107875"
                    >
                      개인정보처리방침·
                    </a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://help.instagram.com/581066165581870"
                    >
                      약관·
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://www.instagram.com/explore/locations/"
                    >
                      위치·
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://www.instagram.com/directory/profiles/"
                    >
                      인기 계정·
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      className="aside-bottom-list"
                      href="https://www.instagram.com/directory/hashtags/"
                    >
                      해시태그·
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a className="aside-bottom-list" href>
                      언어
                    </a>
                  </li> */}
                </ul>
                <span className="aside-buttom-text">
                  © 2021 Instagram from Facebook
                </span>
              </div>
            </aside>
          </section>
        </main>
      </div>
    );
  }

export default Main;
