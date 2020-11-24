import React from 'react';
import {ThemeContext} from '../components/ThemeContext';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;

    const styles = ({
      themeButton : {
        padding: '10px',
        marginTop: '-6px',
        borderRadius: '30px',
        border: 'none',
        marginRight: '40px',
        fontWeight: 'bold',
       
      }
    });
    return (
      <button
        {...props}
        style={{...styles.themeButton, background: theme.background, color: theme.foreground}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;