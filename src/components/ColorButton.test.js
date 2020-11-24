import React from "react";
import renderer from 'react-test-renderer';
import ColorButton from '../components/ColorButton';

it('renders correctly', () => {
    const buttonProps = {value: "B",  imagePath:"assets/images/B.svg" };
    const Button = renderer.create(<ColorButton key="Black" button={buttonProps}/>).toJSON();
    expect(Button).toMatchSnapshot();
});