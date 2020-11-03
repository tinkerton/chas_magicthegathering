import React,{useState} from 'react';
import ManaFilter from '../components/ManaFilter';
import Cards from '../components/Cards';


/*
This component shows a grid of cards provided by the API
On top of it is a filter module that filters card by color
*/
const DeckLibrary = (props) => {
  const [cardColor, setCardColor] = useState('All');

  return (
      <div style={props.style}>
        <ManaFilter 
        onChange={(e)=>setCardColor(e.value)}/>
        <Cards 
          cards={props.cards} 
          currentColor={cardColor} 
          onChange={(id) => props.onChange(id,'add',null)}/>
       </div>
    
  );             
}

export default DeckLibrary;