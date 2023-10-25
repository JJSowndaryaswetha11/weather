import React from 'react'
import Choosestate from './Choosestate'
import Weekinfo from './Weekinfo'
import HumidityComponents from './Humidity'
import LeftComponents from './Left'

const Home = () => {
  return (
    <>
    <div className='homeWrap'>
        <div className='weatherSection'>
            <LeftComponents/>
            <div className='rightSide'>
                <Choosestate/>
                <Weekinfo/>
                <HumidityComponents/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home