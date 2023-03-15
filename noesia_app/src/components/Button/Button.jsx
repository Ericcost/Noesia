import React from 'react';
import './Button.scss';

export default function Button({content, onClick}) {
  return (
    <div className='button'>
      <button>
        <span onClick={onClick}>
          {content}
        </span>
      </button> 
    </div>
  )
}