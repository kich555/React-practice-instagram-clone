import React, { useRef, useState, useEffect } from 'react';
import './Main.scss';
import CreateComment from './Components/comment/CreateComment';
import CommentList from './Components/comment/CommentList';
import FeedList from './Components/Feed/FeedList';
import FootList from './Components/Footer/FootList';
import HeadList from './Components/Header/HeadList';
// import "../../style/common.scss";
function Main() {


const [footers, setFooters] = useState([]);

useEffect(() => {
  fetch('http://localhost:3000/data/footerData.json')
  .then(res => res.json())
  .then(res => {
    setFooters(
      res.footers,
    )
  })
},[])

const [headers, setHeaders] = useState([]);

useEffect(() => {
  fetch('http://localhost:3000/data/headerData.json')
  .then(res => res.json())
  .then(res => {
    setHeaders(
      res.headers,
    )
  })
},[])

const [feeds, setFeeds] = useState([]);

useEffect(() => {
  fetch('http://localhost:3000/data/feedData.json')
  .then(res => res.json())
  .then(res => {
    setFeeds(res.DI)
  })
},[])
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
                  <HeadList headers={headers}/>
              
                </div>
              </div>
              <div className="feed-box">
               <FeedList feeds={feeds} />
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
