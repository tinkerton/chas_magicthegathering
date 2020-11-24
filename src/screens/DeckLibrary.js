import React,{useState, useContext} from 'react';
import ManaFilter from '../components/ManaFilter';
import Cards from '../components/Cards';
import {ThemeContext} from '../components/ThemeContext';


/*
This component shows a grid of cards provided by the API
On top of it is a filter module that filters card by color
*/
const DeckLibrary = (props) => {
  const [cardColor, setCardColor] = useState('All');
  const theme = useContext(ThemeContext);

  const styles = ({
    deckPanelLeft: {

      width: '63%',
      padding: '40px',
      marginTop:'40px',
      height: '100vh',
     
      
    }
  });

  return (
      <div style={{...styles.deckPanelLeft, background: theme.background}}>
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