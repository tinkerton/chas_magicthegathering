import React from "react";
import ReactDOM from 'react-dom';
import DeckLibrary from '../screens/DeckLibrary';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../components/Card';

configure({ adapter: new Adapter() });

const cards = [
  {
    id:"1", colors:"White", name:"Archangel Avazyn", manaCost:"{3}{W}{W}", imageUrl:"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card"
  },
  {
    id:"2", colors:"Blue", name:"Second card", manaCost:"{3}{U}{U}{U}", imageUrl:"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=106426&type=card"
  }
  ];


it ('renders without crashing', () => {


    const div = document.createElement('div');
    ReactDOM.render(<DeckLibrary cards={cards} roster={cards} onChange={null}/>, div) 
    ReactDOM.unmountComponentAtNode(div);
  });


  it('displays 2 items', () => {
    const wrapper = render(<DeckLibrary cards={cards} roster={cards} onChange={null} />);
    const test = wrapper.find(Card).length;
    setTimeout(() => {
      expect(test).toEqual(2); // or the number of occurrence you're expecting
    }, 200);
    });

it('displays 0 items', () => {
  const wrapper = render(<DeckLibrary cards={[]} roster={[]} onChange={null}/>);
  const test = wrapper.find(Card).length;
  expect(test).toMatchSnapshot();
  setTimeout(() => {
    expect(test).toEqual(0); // or the number of occurrence you're expecting
  }, 200);
});