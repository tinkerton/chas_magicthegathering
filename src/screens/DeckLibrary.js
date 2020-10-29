import React,{useState} from 'react';
import ManaFilter from '../components/ManaFilter';
import Cards from '../components/Cards';

const DeckLibrary = (props) => {
  const [cardColor, setCardColor] = useState('All');

  return (
      <div style={props.style}>
        <ManaFilter 
        onChange={(e)=>setCardColor(e.value)}/>
        <Cards 
          cards={props.cards} 
          currentColor={cardColor} 
          actionType={'Add'} 
          onChange={(id) => props.onChange(id)}/>
       </div>
    
  );             
}

export default DeckLibrary;