import React,{useState} from 'react';
import ManaFilter from '../components/ManaFilter';
import Cards from '../components/Cards';

const Roster = (props) => {
  const [cardColor, setCardColor] = useState('All');

  return (
    <div style={props.style}>
      <ManaFilter 
        onChange={(e)=>setCardColor(e.value)}/>
              
      <Cards 
        cards={props.roster} 
        currentColor={cardColor} 
        onChange={(id,action,nrOf) => props.onChange(id,action,nrOf)}/>

    </div>
  );             
}

export default Roster;