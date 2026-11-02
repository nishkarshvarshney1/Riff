import { Cast, Search } from 'lucide-react';
import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-600'>
      <div>
        <h1>Welcome back, Kenshii!</h1>
        <h2>112 new playlist for you</h2>
      </div>
      <div>
        <Search />
        <input type="text" placeholder='Search by title, artist, or album...' />
      </div>
      <div>
        <div><Cast /></div>
        <div></div>
      </div>
    </div>
  )
}

export default Header
