import React from "react";
import ReactDOM from 'react-dom';

import DeckLibrary from '../screens/DeckLibrary';


it ('renders without crashing', () => {
    const cards = [
        {
          id:"1", colors:"White", name:"Archangel Avazyn", manaCost:"{3}{W}{W}", imageUrl:"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card"
        },
        {
          id:"2", colors:"Blue", name:"Second card", manaCost:"{3}{U}{U}{U}", imageUrl:"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=106426&type=card"
        }
        ];

    const div = document.createElement('div');
    ReactDOM.render(<DeckLibrary cards={cards} roster={cards} onChange={null}/>, div) 
    ReactDOM.unmountComponentAtNode(div);
});
