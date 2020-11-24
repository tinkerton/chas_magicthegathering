import React,{useContext} from 'react';
import Cards from '../components/Cards';
import {ThemeContext} from '../components/ThemeContext';

/*This component shows a list of selected cards 
  with nr, name and mana cost
*/
const DeckRoster = (props) => {
  const theme = useContext(ThemeContext);

  const styles = ({
    deckPanelRight: {
      width: '25%',
      minWidth:'350px',
      padding: '40px',
      position: 'fixed',
      right:'0',
      top: '58px',
      height: 'calc(100vh - 58px)',
      boxShadow: '-3px 0px 15px rgba(0,0,0,0.4)',
    }
  });

  return (
    <div style={{...styles.deckPanelRight, background: theme.background, color:theme.foreground}}>
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