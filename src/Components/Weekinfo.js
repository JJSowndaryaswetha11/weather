import React, { useEffect, useState } from 'react'
import { UseWeatherAppContext } from '../Context/Context'
import Singlecard from './Singlecard';

const Weekinfo = () => {
    const {state:{daily},dispatch}=UseWeatherAppContext ();
    const [selectedCard, setSelectedCard] = useState(0);
   // console.log('daily',daily);
    const updateCurrent = ()=>{
        return (
            dispatch({
                type:'SET_CURRENT',
                payload:daily[selectedCard]
            })
        )
    }
   useEffect(() => {
        updateCurrent();
        // eslint-disable-next-line
      }, [daily, selectedCard]);
  return (
   <>
   <div className='cardWrap'>
    <ul className='cardList'>
        {
            daily && daily.length >0 ? daily.map((item,index)=> {
                if(index <7) {
                    return <Singlecard key={index} item={item} className={index === selectedCard ? "active" : ""} onClick={()=> {

                        setSelectedCard(index)
                        updateCurrent();
                    }}/>

                }
                
            }) : ''
        }

    </ul>
   </div>
   </>
  )
}

export default Weekinfo