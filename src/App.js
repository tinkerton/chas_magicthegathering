import 
  React, {
  useState, 
  useEffect
} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import DeckLibrary from "./screens/DeckLibrary";
import Roster from "./screens/Roster";
import DeckRoster from "./screens/DeckRoster";

function App() {
  const [roster, setRoster] = useState([]);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
 

 useEffect(() => {
    setCards([
      {
      id:"1", colors:"White", name:"Archangel Avazyn", manaCost:"{3}{W}{W}", imageUrl:"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card"
     },
     {
      id:"2", colors:"Blue", name:"Second card", manaCost:"{3}{U}{U}{U}", imageUrl:"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=106426&type=card"
     }
  ]);

  }, [])

  const styles = ({
    navBar: {
      display: 'flex',
      background: '#000',
      color: '#FFF',
      justifyContent: 'flex-end',
      padding:'20px 40px 20px 40px',
      position: 'fixed',
      width: 'calc(100vw - 40px)',
      zIndex:'1',
    },
    logo: {
      fontSize:'20px',
      fontWeight:'700',
      position: 'absolute',
      left:'40px',
    },

    menuItem : { 
      color:'#FFF',
      marginRight:'40px',
      textDecoration:'none',
      fontWeight: '700',

    },
    deckContainer: {
      display:'flex',
    },
    deckPanelLeft: {

      width: '63%',
      padding: '40px',
      marginTop:'40px',
      background:'##FFF',
     
      
    },
    deckPanelRight: {
      width: '25%',
      padding: '40px',
      background:'#f7F7F7',
      position: 'fixed',
      right:'0',
      top:'63px',
      height:'calc(100vh)',
    }

  })

  function addToRoster(id) {
    var cardToAdd = cards.find(card => card.id === id);
    var newRoster = [...roster];
    const index = newRoster.indexOf(roster.find(card => card.id === id))
    if (index !== -1) {
      newRoster[index].nrOfCards++;
      setRoster(newRoster);
    }
    else {
      cardToAdd.nrOfCards = 1;
      setRoster(newRoster.concat(cardToAdd));
    }
    
  }

  function removeFromRoster(id) {
    var newRoster = [...roster];
    const index = newRoster.indexOf(roster.find(card => card.id === id))
    if (index !== -1) {
      if (newRoster[index].nrOfCards>1)
        newRoster[index].nrOfCards--;
      else 
        newRoster.splice(index, 1);
      
      setRoster(newRoster);
    }
  }
/*
  useEffect(() => {  //Fetch MTG API data
    fetch("https://api.magicthegathering.io/v1/cards?code=10e")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCards(result.cards);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else 
  {*/
    return (
      <Router>
        <div style={styles.navBar}>
        <div style={styles.logo}>MAGIC THE GATHERING: DECK BUILDER</div>
        <Link style={styles.menuItem} to="/">DECK BUILDER</Link>
        <Link style={styles.menuItem} to="/roster">MY ROSTER</Link>
        </div>
    
        <Switch>
          <Route path="/roster">
            <Roster 
              roster={roster}
              onChange={(id)=>removeFromRoster(id) } />
          </Route>
          <Route path="/">
            <div style={styles.deckContainer}>
              <DeckLibrary 
                style={styles.deckPanelLeft}
                cards={cards} 
                onChange={(id)=>addToRoster(id) }/>
              <DeckRoster 
                style={styles.deckPanelRight} 
                roster={roster}
                onChange={(id)=>removeFromRoster(id) } />
            </div>
          </Route>
        </Switch>
      </Router>
    );
 // }
}

export default App;
