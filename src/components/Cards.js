import React from 'react';
import Card from '../components/Card';

const Cards = (props) => {
 const cardColor = props.currentColor;
  
 return (
  <div style={{display: 'flex', flexWrap: 'wrap', flexDirection:props.display==="List"?'column':'row'}}>
    {  
      props.cards
        .filter(
          card => {
            return cardColor==='All'
            ? card.colors
            : card.colors.includes(cardColor)
          })
        .map(item => {
          return item.imageUrl
          ? (<Card 
            key={item.id} 
            card={item} 
            actionType={props.actionType} 
            display={props.display}
            onChange={(id) => props.onChange(id)}/>)
          :false

        }
          
           
          )
         
    }
  </div> 
  );
 };

export default Cards;