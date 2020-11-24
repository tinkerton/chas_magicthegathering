import React,{useState, useContext} from 'react';
import ManaFilter from '../components/ManaFilter';
import Cards from '../components/Cards';
import {ThemeContext} from '../components/ThemeContext';

const Roster = (props) => {
  const [cardColor, setCardColor] = useState('All');
  const theme = useContext(ThemeContext);

  const styles = ({
    deckPanelFull : {
      width:'100%',
      padding: '40px',
      marginTop:'40px',
      height:'100vh',
    }
  });

  return (
    <div style={{...styles.deckPanelFull, background: theme.background}}>
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