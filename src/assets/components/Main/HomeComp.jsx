import React from 'react'
import LeftContent from '../Home/LeftContent';
import Header from '../Home/Header';
import MiddleContent from '../Home/MiddleContent';
import RightContent from '../Home/RightContent';

const HomeComp = () => {
  return (
    <div className=' h-screen rounded-4xl border border-(--cream) w-full overflow-x-hidden'>
      <LeftContent />
      <div className='w-4/5 h-full flex flex-col'>
        <Header />
        <div>
            <MiddleContent />
            <RightContent />
        </div>
      </div>
    </div>
  )
}

export default HomeComp
