import React from 'react';

const CardManaIcons = (props) => {

  const icons = [     
    {value: "B",  imagePath:"assets/images/B.svg" },
    {value: "U",  imagePath:"assets/images/U.svg"  },
    {value: "G", imagePath:"assets/images/G.svg"  },
    {value: "R",  imagePath:"assets/images/R.svg"  },
    {value: "W",  imagePath:"assets/images/W.svg"  }
  ];

  const styles = ({
    manaIconContainer: {
      display:'inline-block',

    },
    manaCost: {
      background:'#DDD',
      borderRadius:'10px',
      display: 'inline-block',
      width: '20px',
      padding: '1px 0',
      textAlign: 'center',
      fontWeight: '700',
    },
    manaCostColored: {
      display: 'inline-block',
      width: '20px',
      textAlign: 'center',
      position: 'relative',
    },
    manaImage: {
      position:'relative',
      top:'4px',
      left:'2px',
      width: '20px',
     
    }

  })

 //return null if no icons or cost
if (props.icons === undefined) return null;

let manaCost =[];
//split icon costs into an array
manaCost = props.icons.split('}{'); 
manaCost= manaCost.map(item => (item.replace('{','').replace('}','')));


return (
   <div style={styles.manaIconContainer}>
   {manaCost.map((item, index) => (
    
    isNaN(item) && item!=="X"
     ? (<span 
          key={'grey_'+index} 
          style={styles.manaCostColored}>
          <img 
          alt={item}
          style={styles.manaImage}
          src={icons.find(x => x.value === item).imagePath}/>

        </span>)
     :  <span key={item+'_'+index} style={styles.manaCost}>{item}</span>
    ))} 
   </div>
  );
 };

export default CardManaIcons;