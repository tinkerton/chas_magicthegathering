import React from 'react';
import Cards from '../components/Cards';

/*This component shows a list of selected cards 
  with nr, name and mana cost
*/
const DeckRoster = (props) => {

  return (
    <div style={props.style}>
      <h1>Roster</h1>
    
      <Cards 
        cards={props.roster} 
        currentColor={'All'} 
        display={'List'}
        onChange={(id, action, nrOf) => props.onChange(id,action,nrOf)}/>

    </div>
  );             
}

export default DeckRoster;