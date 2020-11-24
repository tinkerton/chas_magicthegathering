import React from 'react';
import Card from '../components/Card';

/*Renders all cards of one or more colors as Card-components*/
class Cards extends React.Component {
  render() {
    const props = this.props;
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
              display={props.display}
              onChange={(id,action,nrOf) => props.onChange(id,action,nrOf)}/>)
              :false

            }


          )

        }
        </div>
      );
    }
  }

export default Cards;
