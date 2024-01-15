import React from 'react'
import './styles.css'
import {IconButton} from '@mui/material'
import {AccountCircle,PersonAddAlt1,GroupAdd,AddCircle,DarkMode,Search} from '@mui/icons-material'

function SideBar() {
  return (
    <div className='side-bar'>
      <div className='sb-header'>
        <div>
          <IconButton>
            <AccountCircle/>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddAlt1/>
          </IconButton>
          <IconButton>
            <GroupAdd/>
          </IconButton>
          <IconButton>
            <AddCircle/>
          </IconButton>
          <IconButton>
            <DarkMode/>
          </IconButton>
        </div>
      </div>
      <div className='sb-search'>
        <IconButton>
          <Search/>
        </IconButton>
        <input type="text" className='search-box' />
      </div>
      <div className='sb-conversation'>conversation</div>
    </div>
  )
}

export default SideBar