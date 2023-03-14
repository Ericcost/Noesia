import React from 'react';
import ButtonLink from '../../components/ButtonLink/ButtonLink'
import './Door.scss';

export default function Door() {
  return (
    <div className='door'>
        <h1>
            Door
        </h1>
        <ButtonLink content='Map' path='/carte'/>
    </div>
  )
}
