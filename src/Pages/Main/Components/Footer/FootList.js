import React from 'react';

function Footer({footer}) {
  return (
    <>
    <li key={footer.id}>
        <a
          className="aside-bottom-list"
          target="_blank"
          href={footer.href}
          rel="noreferrer"
        >
        {footer.foot}
        </a>
    </li>
  </>
  );
};

function FootList({footers}){
  return (
    <>
    {footers.map(footer => (
      <Footer footer={footer} key={footer.id} foot={footer.foot} href={footer.href}/>
    ))}
    </>
  )
}



export default FootList;