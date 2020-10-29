import 
  React, {
  useState, 
  useEffect,
  Component
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

const App=()=> {
  
  const DEVMODE = false;
  const [roster, setRoster] = useState([]);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
 

  const styles = ({
      loadingContainer : {
      background:'#000',
      position: 'relative',
      width:'100%',
      height: 'calc(100vh)',
      display:'block',
    },
    loadingLogo: {
      backgroundImage: 'url(../assets/images/magiclogo.png)',
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      width:'100%',
      height: 'calc(100vh)',
      margin: 'auto auto'
    },
    loadingText: {
      color: '#FFF',
      display: 'block',
      margin: 'auto auto',
      textAlign: 'center',
      top: '70%',
      position: 'relative',
      textTransform: 'uppercase',

    },
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
      minWidth:'350px',
      padding: '40px',
      background:'#f7F7F7',
      position: 'fixed',
      right:'0',
      top: '58px',
      height: 'calc(100vh - 58px)',
      boxShadow: '-3px 0px 15px rgba(0,0,0,0.4)',
    }

  })


  /*
   For quicker development, use local data 
   instead of getting it from the API by setting DEVMODE = true
  */
  
    useEffect(() => {
      if (DEVMODE) {
        setCards([
        {
          id:"1", colors:"White", name:"Archangel Avazyn", manaCost:"{3}{W}{W}", imageUrl:"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card"
        },
        {
          id:"2", colors:"Blue", name:"Second card", manaCost:"{3}{U}{U}{U}", imageUrl:"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=106426&type=card"
        }
        ]);
        setIsLoaded(true);
      }
      else {
        //Fetch MTG API data if not DEVMODE
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
      }
      }, [DEVMODE])
    
  
  /*Add more cards of tbe same if the card 
    is already in the roster, else add new card 
  */
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

/*Remove one of card of tbe same type if the card 
  is already in the roster, else remove the card entirely
*/
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
    


  
  if (error) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingLogo}>
          <div style={styles.loadingText}>{error.message}</div>
        </div>
      </div>)
  } else if (!isLoaded) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingLogo}>
          <div style={styles.loadingText} className="pulsingAnimation">Loading API data</div>
        </div>
      </div>)
  } else {
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
  }
}

export default App;
