import React from 'react';

export default function Error() {
  return (
    <div className='not-found'>
      <h1>404 ERROR!</h1>
      <h2>Page not found</h2>
      <div className="btn"  onClick={() =>{
        window.history.back();
      }}>Go back</div>
    </div>
  )
}
