import React from 'react'
import { useState } from 'react'
import './styles.css'
import {IconButton} from '@mui/material'
import {AccountCircle,PersonAddAlt1,GroupAdd,AddCircle,DarkMode,Search} from '@mui/icons-material'
import Conversation from './Conversation'

function SideBar() {
  const [conversation,setConversation] = useState([
    {
      name:"Test@1",
      lastMsg:"Last messsage was!!",
      time:'today'
    },
    {
      name:"Person@2",
      lastMsg:"How are you?",
      time:"Yesterday"
    },
    {
      name:"User@3",
      lastMsg:"Blocked You",
      time:'31 Jan'
    }
  ])
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
      <div className='sb-conversation'>
        {
          conversation.map((conversation)=>{
            return <Conversation props={conversation} key={conversation} />
          })
        }
      </div>
    </div>
  )
}

export default SideBar