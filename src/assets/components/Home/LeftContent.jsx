import { Disc, EighthNotes, House, Layers, MicSignal, MicVocal, Plus } from 'lucide-react';
import React from 'react'

const LeftContent = () => {
  return (
      <div className=' w-1/5 p-5 bg-(--grey) h-full text-white'>
        <div className='flex flex-col gap-3 mb-8'>
            <h2 className='mb-2 bg-(--light-grey) py-3 px-4 rounded-xl flex gap-5 items-center'><House />Home</h2>
        <h2 className=' py-3 px-4 rounded-xl flex gap-5 items-center'><EighthNotes />Songs</h2>
        <h2 className=' py-3 px-4 rounded-xl flex gap-5 items-center'><MicVocal />Artists</h2>
        <h2 className=' py-3 px-4 rounded-xl flex gap-5 items-center'><Disc />Albums</h2>
        <h2 className=' py-3 px-4 rounded-xl flex gap-5 items-center'><MicSignal />Podcast</h2>
        </div>
        <hr className='text-(--border-color)'/>
        <div className='mt-8 flex flex-col gap-8'>
            <h2 className='flex items-center justify-between'>
                <div className='flex items-center gap-5'><Layers />Collection</div>
                <div><Plus /></div>
            </h2>
            <div className='flex items-center gap-5'>
                <div className='bg-black size-10'></div>
                <div>
                    <h4>Eve</h4>
                    <h5>Artist</h5>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='bg-black size-10'></div>
                <div>
                    <h4>Eve</h4>
                    <h5>Artist</h5>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='bg-black size-10'></div>
                <div>
                    <h4>Eve</h4>
                    <h5>Artist</h5>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='bg-black size-10'></div>
                <div>
                    <h4>Eve</h4>
                    <h5>Artist</h5>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='bg-black size-10'></div>
                <div>
                    <h4>Eve</h4>
                    <h5>Artist</h5>
                </div>
            </div>
        </div>
      </div>
  )
}

export default LeftContent
