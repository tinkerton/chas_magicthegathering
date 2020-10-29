import React,{useState} from 'react';
import ManaFilter from '../components/ManaFilter';
import Cards from '../components/Cards';

const Roster = (props) => {
  const [cardColor, setCardColor] = useState('All');

  return (
    <div>
      <h1>Deck Roster</h1>
              
      <ManaFilter 
        onChange={(e)=>setCardColor(e.value)}/>
              
      <Cards 
        cards={props.roster} 
        currentColor={cardColor} 
        actionType={'Delete'} 
        onChange={(id) => props.onChange(id)}/>

    </div>
  );             
}

export default Roster;