import React from 'react';

function Header({header}) {
  return (
    <div className="story-list-box" key={header.id}>
      <a className="story-a" href>
        <img
          className="story-img"
          src={header.profileImg}
          alt="user1"
          />
      </a>
      <a className="small-basic2" href>
        {header.profileId}
      </a>
    </div>
  );
};

function HeadList({headers}){
  return (
    <>
    {headers.map(header => (
      <Header 
        header={header} 
        key={header.id} 
        profileId={header.profileId} 
        profileImg={header.profileImg}/>
    ))}
    </>
  )
}

export default HeadList;