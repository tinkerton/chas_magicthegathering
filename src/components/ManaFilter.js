import React from 'react';
import ColorButton from '../components/ColorButton';

const ManaFilter = (props) => {

  const buttons = [  
    { name: "All", value: "All", imagePath:"assets/images/C.svg" },
    { name: "Black", value: "Black",  imagePath:"assets/images/B.svg" },
    { name: "Blue", value: "Blue",  imagePath:"assets/images/U.svg"  },
    { name: "Green", value: "Green", imagePath:"assets/images/G.svg"  },
    { name: "Red", value: "Red",  imagePath:"assets/images/R.svg"  },
    { name: "White", value: "White",  imagePath:"assets/images/W.svg"  }
  ];

  const styles = ({
    manaFilterContainer: {
      display:'flex',
      justifyContent: 'space-evenly',
      
    }
  })


 return (
   <div style={styles.manaFilterContainer}>
     { buttons.map(button => (
          <ColorButton key={button.name} button={button} onChange={props.onChange}/>
      ))
     }
    </div>
  );
 };

export default ManaFilter;