import React from 'react';


const ColorButton =(props) => {
  
  const styles = ({
    manaButton: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      boxSizing: 'border-box',
      borderRadius: '4px 4px 0px 0px',
      minWidth: '16%',
      textAlign: 'center',
      position: 'relative',
      borderBottom: '1px solid #CCC',
      background: '#F7F7F7',
      margin:'0px 4px 40px 0',
      height:'44px',
    },
    manaImage: {
        margin: '0px 0px 20px 0px',
        maxWidth:'20px',
        background: '#FFF',
        padding: '4px',
        borderRadius: '100px',
        position: 'absolute',
        top:'8px',
        left:'10px',
       
    },
    manaLabel: {
      fontFamily: 'Arial',
      fontWeight:'bold',
      textTransform: 'uppercase',
      fontSize: '12px',
      color:'#333',
      position: 'absolute',
      top:'15px',
      left:'45px',

    }
  })

    const {value,name,imagePath} = props.button;
    return (
        <div 
          style={styles.manaButton} 
          key={name} 
          button={value} 
          onClick={() => props.onChange({value})}>
        <img 
          style={styles.manaImage} 
          src={imagePath} 
          alt={name}
        />
        <span style={styles.manaLabel}>{name}</span>
      </div>
    );
  
 }
export default ColorButton;