import React from 'react';
import CardManaIcons from '../components/CardManaIcons';

const Card = (props) => {
 
    
  const styles = ({
    list: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    grid: {
      display:'flex',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      margin:'2px',
      
    },
    gridCard: {
      flex:'1',
      maxWidth:'200px',
      width:'200px',
      cursor:'pointer',
    },
    nrOfCards :{
      border: '1px solid #DDD',
      background: '#FFF',
      padding: '7px 10px',
      marginLeft: '5px',
      fontWeight: '700',
      color: '#666',
      top: '1px',
      position: 'relative',
      borderRadius: '4px',
      display: 'inline-block',
      width: '10px',
      height: '18px',
    },
    manaName : {
      padding: '6px',
      fontWeight: '700',
      margin: '8px 5px',
      borderRadius: '4px',
      display: 'inline-block',
      minHeight: '20px',
    },
    Blue : {
      background:'#3498db59',
     
    },
    Black : {
      background:'rgba(0,0,0,0.15)',
    },
    Red : {
      background:'rgba(255,50,0,0.35)',
    },
    Green : {
      background:'#cfeccd',
    },
    White : {
      background:'rgb(233 224 206)',
    }
  })

  const {name, colors, id, imageUrl, nrOfCards, manaCost} = props.card;
  return (
    <div style={props.display==='List'?styles.list:styles.grid}>
    {
    props.display==='List'
      ? (
          <div style={{flex:'1'}}>
            <span 
              key={'add_'+id} 
              onClick={(e)=>props.onChange(id)}>
                <img 
                  src={'assets/images/trash.svg'} 
                  alt='Delete'
                  width='15px'
                  />
            </span>
            <span style={styles.nrOfCards}>{nrOfCards}</span>
            <span style={{...styles[colors], ...styles.manaName}}>{colors}{name}</span> 
            <CardManaIcons icons={manaCost}/>
            
          </div>)
      : (
          <div 
            key={'card_' + id} 
            style={styles.gridCard} 
            className='gridCard'
            onClick={(e)=>props.onChange(id)}>
            <img src={imageUrl} alt={name} width={'200px'}/>
          </div>
      )
    }
    </div>
  )
 }
export default Card;