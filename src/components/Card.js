import React,{useRef} from 'react';
import CardManaIcons from '../components/CardManaIcons';

const Card = (props) => {

  const nrOfInput = useRef(null)
    
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
      position: 'relative',
      background:'#F7F7F7',
      backgroundImage:'url("../assets/images/template.jpg")',
      minHeight:'278px',
      borderRadius:'4px',

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
      width: '14px',
      textAlign: 'center',
      height: '18px',
    },
    cardNr : {
      position: 'absolute',
      background: '#F00',
      borderRadius: '100px',
      display: 'block',
      width: '30px',
      height: '30px',
      top:'-5px',
      right:'0px',
      color: '#FFF',
      fontSize: '14px',
      fontWeight: '900',
      boxShadow: '5px 5px 5px rgba(0,0,0,0.3)'
     
    },
    cardNrText: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50% , -50%)',
      position: 'absolute'
    },

    manaName : {
      padding: '6px',
      fontWeight: '700',
      margin: '8px 5px',
      borderRadius: '4px',
      display: 'inline-flex',
      minHeight: '20px',
      maxWidth: '190px',
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

  function handleFocus(){
    nrOfInput.current.focus();
    nrOfInput.current.select();
  }


  const {name, colors, id, imageUrl, nrOfCards, manaCost} = props.card;
  return (
    <div style={props.display==='List'?styles.list:styles.grid}>
    {
    props.display==='List'
      ? (
          <div style={{flex:'1'}}>
            <span 
              key={'add_'+id} 
              onClick={(e)=>props.onChange(id,'remove',null)}>
                <img 
                  src={'assets/images/trash.svg'} 
                  alt='Delete'
                  width='15px'
                  />
            </span>
            
            <input 
              style={styles.nrOfCards} 
              value={nrOfCards}
              ref={nrOfInput} 
              onChange={(e)=>props.onChange(id,'modify',e.target.value)}
              onClick={handleFocus}
            />
            <span style={{...styles[colors], ...styles.manaName}}>{name}</span> 
            <CardManaIcons icons={manaCost}/>
            
          </div>)
      : (
          <div 
            key={'card_' + id} 
            style={styles.gridCard} 
            className='gridCard'
            onClick={(e)=>props.onChange(id)}>
            <img src={imageUrl} alt={name} width={'200px'}/>
            {nrOfCards && <div
               style={styles.cardNr}>
               <span style={styles.cardNrText}>{nrOfCards}</span>
            </div>
            }
          </div>
      )
    }
    </div>
  )
 }
export default Card;