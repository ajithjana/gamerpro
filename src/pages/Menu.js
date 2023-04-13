import MenuItem  from '../components/MenuItem'
import React from 'react'
import { Data } from '../data/data'
import '../styles/Menu.css'
function Menu() {
  return (
    <div className='menu'>
   
    <div className='menuList'>
      {Data.map((menuItem, key) => {
          return <MenuItem name={menuItem.name} price={menuItem.price} image={menuItem.image}  key={key} />
      })}
    </div>
    </div>
  )
}

export default Menu
