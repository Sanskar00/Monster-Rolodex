import React from 'react';
import { Card } from '../card/card';
import './card-list.styles.css'

export const CardList=props=>(
<div className='card-list'>
    {props.name.map(monster=>(
          <Card key={monster.id} monster={monster}/>
    ))}

</div>
);
