import React from 'react';


function CreateComment ({comment, onChange, onSubmit}) {
//  console.log('a')

    return (
      <>
        <form onSubmit={onSubmit} className="comment-box-form">
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
              onChange={onChange}
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


export default CreateComment;
