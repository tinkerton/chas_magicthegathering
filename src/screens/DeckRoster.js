import React from 'react';
import Cards from '../components/Cards';

const DeckRoster = (props) => {

  return (
    <div style={props.style}>
      <h1>Roster</h1>
    
      <Cards 
        cards={props.roster} 
        currentColor={'All'} 
        actionType={'Delete'} 
        display={'List'}
        onChange={(id) => props.onChange(id)}/>

    </div>
  );             
}

export default DeckRoster;