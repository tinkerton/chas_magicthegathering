import 
  React, {
  useState, 
  useEffect,
 
} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
  
} from "react-router-dom";

import './App.css';
import ErrorBoundary from "./ErrorBoundary";
import DeckLibrary from "./screens/DeckLibrary";
import Roster from "./screens/Roster";
import DeckRoster from "./screens/DeckRoster";
import {ThemeContext, themes} from './components/ThemeContext';
import ThemedButton from './components/ThemedButton';

const App=()=> {
  
  const DEVMODE = false; //set to true to skip API call
  const [roster, setRoster] = useState([]);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState(themes.light);
 

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
    githubLink : {
      color:'#DDD',
      fontSize: '8 px',
      textTransform:'uppercase',
      textDecoration:'none',
      display:'inline-block',
      fontWeight:'700',
      marginRight:'40px',
      
    },

    deckContainer: {
      display:'flex',
    },
    
   
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
        fetch("https://cors-anywhere.herokuapp.com/https://api.magicthegathering.io/v1/cards?code=10e")
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
      }, [DEVMODE]) //update on DEVMODE change
  
  /*In order to handle multiple callbacks from children,
    this function relays the callback to specific functions
  */
  function modifyRoster(id, action='remove', nrOf=null) {
    switch (action) {
      case 'add': {addToRoster(id); break;}
      case 'remove' : {removeFromRoster(id); break;}
      case 'modify' : {setNrOfInRoster(id,nrOf); break;}
      default : break;
     
    }
  }
  
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
      if (newRoster[index].nrOfCards>1) {
        newRoster[index].nrOfCards--;
        console.log(newRoster[index].nrOfCards)
      }
      else {
        newRoster[index].nrOfCards=''; //needed to trigger rerender
        newRoster.splice(index, 1);
      }
    
      setRoster(newRoster);
    }
  }
    
/*Set a specific nr of cards to a  card
  already in the roster, remove it if 0
*/
function setNrOfInRoster(id, nrOf) {
  var newRoster = [...roster];
  const index = newRoster.indexOf(roster.find(card => card.id === id))
  if (nrOf <=0) {

    newRoster.splice(index, 1);
  }else if (!isNaN(nrOf)) {
    if (index !== -1) {
      newRoster[index].nrOfCards=nrOf;
     
    }
  }
  setRoster(newRoster);
}

function toggleTheme() {
  theme === themes.dark
  ? setTheme(themes.light)
  : setTheme(themes.dark)
}

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}


  //RENDER
  if (error) { //API ERROR SCREEN
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingLogo}>
          <div style={styles.loadingText}>{error.message}</div>
        </div>
      </div>)
  } else if (!isLoaded) { //LOADING SCREEN
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingLogo}>
          <div style={styles.loadingText} className="pulsingAnimation">Loading API data</div>
        </div>
      </div>)
  } else {
    return ( 
      //Using a Router component because it is mandatory in the course
      <ErrorBoundary>
       <ThemeContext.Provider value={theme}>
        <Router>
          <div style={styles.navBar}>
          <div style={styles.logo}>MAGIC THE GATHERING: DECK BUILDER</div>
          <Toolbar changeTheme={toggleTheme} />
            <NavLink exact activeClassName='is-active' style={styles.menuItem} to="/">DECK BUILDER</NavLink>
            <NavLink activeClassName='is-active' style={styles.menuItem} to="/roster">MY DECK</NavLink> 
            <a style={styles.githubLink} href="https://github.com/tinkerton/chas_magicthegathering" rel="noopener noreferrer" target="_blank">View on Gitub</a>
            
        </div>
    
          <div style={styles.deckContainer}>  
          <Switch>
            <Route path="/roster">
             
                <Roster 
                  roster={roster}
                  onChange={(id,action,nrOf)=>modifyRoster(id,'remove',null) } />
            </Route>
            <Route path="/">
                <DeckLibrary 
                  cards={cards}
                  roster={roster}
                  onChange={(id,action,nrOf)=>modifyRoster(id,'add',null) }/>
                <DeckRoster 
                  roster={roster}
                  onChange={(id,action,nrOf)=>modifyRoster(id,action,nrOf) } />
             
            </Route>
          </Switch>
          </div>
        </Router>
        </ThemeContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
